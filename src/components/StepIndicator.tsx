import { CheckCircle, Circle } from "lucide-react";

type Step = 'state' | 'district' | 'session' | 'caseType' | 'details' | 'captcha' | 'results';

const steps = [
  { id: 'state', label: 'Select State', desc: 'Choose your state' },
  { id: 'district', label: 'Select District', desc: 'Choose your district' },
  { id: 'session', label: 'Initialize Session', desc: 'Connect to ECourts' },
  { id: 'caseType', label: 'Select Case Type', desc: 'Choose case category' },
  { id: 'details', label: 'Enter Case Details', desc: 'Case number & year' },
  { id: 'captcha', label: 'Solve CAPTCHA', desc: 'Verify human user' },
  { id: 'results', label: 'Search & Results', desc: 'Find case details' },
];

export const StepIndicator = ({ currentStep }: { currentStep: Step }) => {
  const currentIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <nav className="space-y-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        
        return (
          <div
            key={step.id}
            className={`flex items-start gap-3 p-3 rounded-lg transition-smooth ${
              isCurrent ? 'bg-primary/10 border border-primary/20' : ''
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            ) : (
              <Circle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`} />
            )}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${isCurrent ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.label}
              </p>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        );
      })}
    </nav>
  );
};
