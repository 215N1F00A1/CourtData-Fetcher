import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { indianStates } from "@/data/indianStates";
import { ArrowRight } from "lucide-react";

export const StateSelection = ({ onNext }: { onNext: (state: string) => void }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Select State</h2>
      <p className="text-muted-foreground mb-8">Choose the state where your case was filed.</p>
      
      <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger>
            <SelectValue placeholder="Select a state..." />
          </SelectTrigger>
          <SelectContent>
            {indianStates.map((state) => (
              <SelectItem key={state.code} value={state.name}>{state.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button onClick={() => onNext(selected)} disabled={!selected} className="mt-6 w-full">
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
