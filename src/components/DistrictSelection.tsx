import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { indianStates } from "@/data/indianStates";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const DistrictSelection = ({ state, onNext, onBack }: { state: string; onNext: (district: string, complex: string) => void; onBack: () => void }) => {
  const [district, setDistrict] = useState("");
  const [complex, setComplex] = useState("");
  
  const stateData = indianStates.find(s => s.name === state);
  const districtData = stateData?.districts.find(d => d.name === district);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Select Court Complex</h2>
      <p className="text-muted-foreground mb-8">Choose the court complex where your case was filed.</p>
      
      <div className="bg-card p-6 rounded-lg border border-border shadow-sm space-y-4">
        <Select value={district} onValueChange={setDistrict}>
          <SelectTrigger>
            <SelectValue placeholder="Select a district..." />
          </SelectTrigger>
          <SelectContent>
            {stateData?.districts.map((d) => (
              <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {district && (
          <Select value={complex} onValueChange={setComplex}>
            <SelectTrigger>
              <SelectValue placeholder="Select a court complex..." />
            </SelectTrigger>
            <SelectContent>
              {districtData?.courtComplexes.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        
        <div className="flex gap-3">
          <Button onClick={onBack} variant="secondary"><ArrowLeft className="mr-2 w-4 h-4" /> Previous</Button>
          <Button onClick={() => onNext(district, complex)} disabled={!complex} className="flex-1">Next <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </div>
  );
};
