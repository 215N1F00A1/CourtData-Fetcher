import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const downloadOrderAsPDF = (orderTitle: string, orderDate: string) => {
  // Create a simple PDF-like content
  const content = `
    ====================================
    COURT ORDER
    ====================================
    
    Order Title: ${orderTitle}
    Date: ${orderDate}
    
    Court: District Court
    
    ORDER DETAILS:
    
    This is to certify that the order has been 
    issued by the Hon'ble Court on ${orderDate}.
    
    The order pertains to: ${orderTitle}
    
    All parties are hereby directed to comply 
    with the terms mentioned in the order.
    
    ====================================
    Generated: ${new Date().toLocaleString()}
    ====================================
  `;
  
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Order_${orderDate.replace(/\//g, '-')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  toast.success("Order downloaded successfully!");
};

export const SearchResults = ({ onNewSearch }: { onNewSearch: () => void }) => (
  <div className="max-w-6xl mx-auto">
    <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg mb-6 flex items-center gap-3">
      <CheckCircle className="text-accent" />
      <p className="text-accent-foreground font-medium">Case Found Successfully</p>
    </div>

    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Case Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-muted-foreground">Case Type:</span> Hindu Marriage Act</div>
          <div><span className="text-muted-foreground">Filing Number:</span> 520/2025</div>
          <div><span className="text-muted-foreground">Filing Date:</span> 07-07-2025</div>
          <div><span className="text-muted-foreground">Registration Number:</span> 133/2025</div>
          <div><span className="text-muted-foreground">Registration Date:</span> 09-07-2025</div>
          <div><span className="text-muted-foreground">CNR Number:</span> MHMU010123452025</div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Case Status</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-muted-foreground">Status:</span> Pending</div>
          <div><span className="text-muted-foreground">Stage:</span> Pre-Trial</div>
          <div><span className="text-muted-foreground">First Hearing:</span> 18-July-2025</div>
          <div><span className="text-muted-foreground">Next Hearing:</span> 25-July-2025</div>
          <div><span className="text-muted-foreground">Court Number:</span> 4</div>
          <div><span className="text-muted-foreground">Judge:</span> Hon'ble Justice Sharma</div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Petitioners</h3>
        <div className="space-y-2">
          <div className="p-3 bg-muted/30 rounded text-sm">
            <div className="font-medium">Rajesh Kumar</div>
            <div className="text-muted-foreground">Advocate: Adv. Priya Sharma</div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Respondents</h3>
        <div className="space-y-2">
          <div className="p-3 bg-muted/30 rounded text-sm">
            <div className="font-medium">Sunita Kumar</div>
            <div className="text-muted-foreground">Advocate: Adv. Ramesh Gupta</div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Acts</h3>
        <div className="flex flex-wrap gap-2">
          <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Hindu Marriage Act, 1955</div>
          <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Section 13</div>
          <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Section 24</div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Case History</h3>
        <div className="space-y-2">
          <div className="p-3 bg-muted/30 rounded text-sm">
            <div className="flex justify-between mb-1">
              <span className="font-medium">22-07-2025</span>
              <span className="text-muted-foreground">Hearing</span>
            </div>
            <p className="text-muted-foreground">Arguments heard. Matter adjourned for further proceedings.</p>
          </div>
          <div className="p-3 bg-muted/30 rounded text-sm">
            <div className="flex justify-between mb-1">
              <span className="font-medium">18-07-2025</span>
              <span className="text-muted-foreground">First Hearing</span>
            </div>
            <p className="text-muted-foreground">Case taken on board. Notice issued to respondent.</p>
          </div>
          <div className="p-3 bg-muted/30 rounded text-sm">
            <div className="flex justify-between mb-1">
              <span className="font-medium">09-07-2025</span>
              <span className="text-muted-foreground">Registration</span>
            </div>
            <p className="text-muted-foreground">Case registered successfully.</p>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Orders</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
            <div className="text-sm">
              <div className="font-medium">Order dated 22-07-2025</div>
              <div className="text-muted-foreground">Interim Order - Maintenance</div>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => downloadOrderAsPDF("Interim Order - Maintenance", "22-07-2025")}
            >
              <Download className="w-4 h-4 mr-2" /> Download
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded">
            <div className="text-sm">
              <div className="font-medium">Order dated 18-07-2025</div>
              <div className="text-muted-foreground">Notice Order</div>
            </div>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => downloadOrderAsPDF("Notice Order", "18-07-2025")}
            >
              <Download className="w-4 h-4 mr-2" /> Download
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Process Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-muted-foreground">Notice Issued:</span> Yes</div>
          <div><span className="text-muted-foreground">Notice Date:</span> 18-07-2025</div>
          <div><span className="text-muted-foreground">Service Status:</span> Served</div>
          <div><span className="text-muted-foreground">Service Date:</span> 20-07-2025</div>
          <div><span className="text-muted-foreground">Filing Mode:</span> Physical</div>
          <div><span className="text-muted-foreground">Case Category:</span> Matrimonial</div>
        </div>
      </div>
    </Card>

    <Button onClick={onNewSearch} className="mt-6"><Plus className="w-4 h-4 mr-2" /> New Search</Button>
  </div>
);
