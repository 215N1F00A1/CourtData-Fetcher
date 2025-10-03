import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

export const CaptchaSolver = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setUserInput("");
    setError("");
  };

  const handleVerify = () => {
    if (userInput.toUpperCase() === captcha) {
      onNext();
    } else {
      setError("Incorrect CAPTCHA. Please try again.");
      handleRefresh();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Solve CAPTCHA</h2>
      <p className="text-muted-foreground mb-8">Enter the characters shown in the image below.</p>
      <div className="bg-card p-6 rounded-lg border border-border shadow-sm space-y-4">
        <div className="relative">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 h-24 rounded flex items-center justify-center border-2 border-border">
            <div className="text-4xl font-bold tracking-widest select-none" style={{ 
              fontFamily: 'monospace',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '8px',
              transform: 'skew(-5deg)'
            }}>
              {captcha.split('').map((char, idx) => (
                <span key={idx} style={{ 
                  display: 'inline-block',
                  transform: `rotate(${Math.random() * 20 - 10}deg)`,
                  color: `hsl(${Math.random() * 360}, 70%, 50%)`
                }}>
                  {char}
                </span>
              ))}
            </div>
          </div>
          <Button 
            onClick={handleRefresh} 
            size="sm" 
            variant="outline" 
            className="absolute top-2 right-2"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        <div>
          <Label>CAPTCHA Text</Label>
          <Input 
            placeholder="Enter CAPTCHA text" 
            value={userInput} 
            onChange={(e) => {
              setUserInput(e.target.value);
              setError("");
            }}
            maxLength={6}
          />
          {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        </div>
        <div className="flex gap-3">
          <Button onClick={onBack} variant="secondary"><ArrowLeft className="mr-2 w-4 h-4" /> Previous</Button>
          <Button onClick={handleVerify} disabled={!userInput} className="flex-1">
            Verify & Search <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
