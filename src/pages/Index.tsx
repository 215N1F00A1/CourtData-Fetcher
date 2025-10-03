import { useState } from "react";
import { Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/StepIndicator";
import { StateSelection } from "@/components/StateSelection";
import { DistrictSelection } from "@/components/DistrictSelection";
import { SessionInitializer } from "@/components/SessionInitializer";
import { CaseTypeSelection } from "@/components/CaseTypeSelection";
import { CaseDetailsForm } from "@/components/CaseDetailsForm";
import { CaptchaSolver } from "@/components/CaptchaSolver";
import { SearchResults } from "@/components/SearchResults";
import { StatisticsModal } from "@/components/StatisticsModal";

type Step = 'state' | 'district' | 'session' | 'caseType' | 'details' | 'captcha' | 'results';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('state');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedComplex, setSelectedComplex] = useState('');
  const [selectedCaseType, setSelectedCaseType] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [filingYear, setFilingYear] = useState('');
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-muted/30 border-r border-border p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-semibold">ECourts Scraper</h1>
        </div>
        <Button variant="outline" className="w-full justify-start mb-8" onClick={() => setShowStatistics(true)}>
          <BarChart3 className="w-4 h-4 mr-2" />
          Statistics
        </Button>
        <StepIndicator currentStep={currentStep} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-8">
          {currentStep === 'state' && (
            <StateSelection onNext={(state) => { setSelectedState(state); setCurrentStep('district'); }} />
          )}
          {currentStep === 'district' && (
            <DistrictSelection 
              state={selectedState} 
              onNext={(district, complex) => { 
                setSelectedDistrict(district); 
                setSelectedComplex(complex);
                setCurrentStep('session'); 
              }}
              onBack={() => setCurrentStep('state')}
            />
          )}
          {currentStep === 'session' && (
            <SessionInitializer 
              onNext={() => setCurrentStep('caseType')}
              onBack={() => setCurrentStep('district')}
            />
          )}
          {currentStep === 'caseType' && (
            <CaseTypeSelection 
              onNext={(caseType) => { setSelectedCaseType(caseType); setCurrentStep('details'); }}
              onBack={() => setCurrentStep('session')}
            />
          )}
          {currentStep === 'details' && (
            <CaseDetailsForm 
              onNext={(num, year) => { setCaseNumber(num); setFilingYear(year); setCurrentStep('captcha'); }}
              onBack={() => setCurrentStep('caseType')}
            />
          )}
          {currentStep === 'captcha' && (
            <CaptchaSolver 
              onNext={() => setCurrentStep('results')}
              onBack={() => setCurrentStep('details')}
            />
          )}
          {currentStep === 'results' && (
            <SearchResults onNewSearch={() => setCurrentStep('state')} />
          )}
        </div>
      </div>
      
      <StatisticsModal open={showStatistics} onClose={() => setShowStatistics(false)} />
    </div>
  );
};

export default Index;
