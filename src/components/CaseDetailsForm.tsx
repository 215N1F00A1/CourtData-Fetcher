import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const CaseDetailsForm = ({ onNext, onBack }: { onNext: (num: string, year: string) => void; onBack: () => void }) => {
  const [caseNumber, setCaseNumber] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Enter Case Details</h2>
      <p className="text-muted-foreground mb-8">Provide the case number and filing year.</p>
      <div className="bg-card p-6 rounded-lg border border-border shadow-sm space-y-4">
        <div>
          <Label>Case Number</Label>
          <Input placeholder="e.g., 1765" value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)} />
        </div>
        <div>
          <Label>Filing Year</Label>
          <Input placeholder="e.g., 2024" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="flex gap-3">
          <Button onClick={onBack} variant="secondary"><ArrowLeft className="mr-2 w-4 h-4" /> Previous</Button>
          <Button onClick={() => onNext(caseNumber, year)} disabled={!caseNumber || !year} className="flex-1">Next <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </div>
  );
};
