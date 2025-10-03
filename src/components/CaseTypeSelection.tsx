import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { caseTypes } from "@/data/caseTypes";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const CaseTypeSelection = ({ onNext, onBack }: { onNext: (type: string) => void; onBack: () => void }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Select Case Type</h2>
      <p className="text-muted-foreground mb-8">Choose the type of case you're searching for.</p>
      <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger>
            <SelectValue placeholder="Select a case type..." />
          </SelectTrigger>
          <SelectContent>
            {caseTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-3 mt-6">
          <Button onClick={onBack} variant="secondary"><ArrowLeft className="mr-2 w-4 h-4" /> Previous</Button>
          <Button onClick={() => onNext(selected)} disabled={!selected} className="flex-1">Next <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </div>
  );
};
