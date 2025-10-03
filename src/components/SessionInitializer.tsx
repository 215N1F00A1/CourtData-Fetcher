import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Settings } from "lucide-react";

export const SessionInitializer = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => (
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl font-semibold mb-2">Initialize Session</h2>
    <p className="text-muted-foreground mb-8">Click the button below to establish a connection with the ECourts system for the selected court.</p>
    <div className="bg-card p-6 rounded-lg border border-border shadow-sm text-center">
      <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
      <Button onClick={onNext} size="lg"><Settings className="mr-2 w-4 h-4" /> Initialize Session</Button>
      <Button onClick={onBack} variant="secondary" className="mt-4"><ArrowLeft className="mr-2 w-4 h-4" /> Previous</Button>
    </div>
  </div>
);
