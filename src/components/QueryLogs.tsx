import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const QueryLogs = () => {
  const [selectedJson, setSelectedJson] = useState<any>(null);
  const [showJsonDialog, setShowJsonDialog] = useState(false);

  const handleViewJson = (jsonData: any) => {
    setSelectedJson(jsonData);
    setShowJsonDialog(true);
  };

  return (
    <>
      <Dialog open={showJsonDialog} onOpenChange={setShowJsonDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Raw JSON Response</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] w-full rounded border">
            <pre className="p-4 text-xs font-mono bg-muted">
              {JSON.stringify(selectedJson, null, 2)}
            </pre>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <div className="border-t border-border p-6 bg-muted/20">
        <div className="space-y-6">
          {/* Most Searches */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Most Searches</h3>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>State</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Case Type</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Maharashtra</TableCell>
                    <TableCell>Mumbai</TableCell>
                    <TableCell>Hindu Marriage Act</TableCell>
                    <TableCell className="text-right">15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Delhi</TableCell>
                    <TableCell>Central</TableCell>
                    <TableCell>Criminal Cases</TableCell>
                    <TableCell className="text-right">12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Karnataka</TableCell>
                    <TableCell>Bangalore</TableCell>
                    <TableCell>Civil Suit</TableCell>
                    <TableCell className="text-right">8</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>

          <Separator />

          {/* Recent Query Logs */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Recent Query Logs</h3>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Case Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Error</TableHead>
                    <TableHead>Raw JSON</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">14:23:45</TableCell>
                    <TableCell>Maharashtra</TableCell>
                    <TableCell>Mumbai</TableCell>
                    <TableCell className="font-mono">520/2025</TableCell>
                    <TableCell><Badge variant="default" className="bg-green-500">Success</Badge></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleViewJson({
                          caseNumber: "520/2025",
                          state: "Maharashtra",
                          district: "Mumbai",
                          caseType: "Hindu Marriage Act",
                          parties: {
                            petitioners: ["Rajesh Kumar"],
                            respondents: ["Sunita Devi"]
                          },
                          status: "Active",
                          filingDate: "2024-01-15",
                          nextHearing: "2024-04-20",
                          caseHistory: [
                            { date: "2024-01-15", event: "Case filed" },
                            { date: "2024-02-10", event: "First hearing" }
                          ]
                        })}
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">14:15:32</TableCell>
                    <TableCell>Delhi</TableCell>
                    <TableCell>Central</TableCell>
                    <TableCell className="font-mono">234/2025</TableCell>
                    <TableCell><Badge variant="default" className="bg-green-500">Success</Badge></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleViewJson({
                          caseNumber: "234/2025",
                          state: "Delhi",
                          district: "Central",
                          caseType: "Criminal Cases",
                          parties: {
                            petitioners: ["State of Delhi"],
                            respondents: ["Amit Sharma"]
                          },
                          status: "Active",
                          filingDate: "2025-01-05",
                          nextHearing: "2025-04-15"
                        })}
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">14:10:18</TableCell>
                    <TableCell>Karnataka</TableCell>
                    <TableCell>Bangalore</TableCell>
                    <TableCell className="font-mono">156/2024</TableCell>
                    <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                    <TableCell className="text-xs text-destructive">Case not found</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleViewJson({
                          caseNumber: "156/2024",
                          state: "Karnataka",
                          district: "Bangalore",
                          error: "Case not found in database",
                          timestamp: "2024-03-16T14:10:18Z",
                          statusCode: 404
                        })}
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">13:58:42</TableCell>
                    <TableCell>Tamil Nadu</TableCell>
                    <TableCell>Chennai</TableCell>
                    <TableCell className="font-mono">789/2025</TableCell>
                    <TableCell><Badge variant="default" className="bg-green-500">Success</Badge></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleViewJson({
                          caseNumber: "789/2025",
                          state: "Tamil Nadu",
                          district: "Chennai",
                          caseType: "Civil Suit",
                          parties: {
                            petitioners: ["Lakshmi Industries"],
                            respondents: ["Chennai Corporation"]
                          },
                          status: "Active",
                          filingDate: "2025-02-20",
                          nextHearing: "2025-05-10"
                        })}
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">13:45:20</TableCell>
                    <TableCell>Gujarat</TableCell>
                    <TableCell>Ahmedabad</TableCell>
                    <TableCell className="font-mono">321/2025</TableCell>
                    <TableCell><Badge variant="default" className="bg-yellow-500">Pending</Badge></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleViewJson({
                          caseNumber: "321/2025",
                          state: "Gujarat",
                          district: "Ahmedabad",
                          caseType: "Property Dispute",
                          status: "Pending",
                          submittedAt: "2025-03-16T13:45:20Z",
                          message: "Query submitted, awaiting response"
                        })}
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
