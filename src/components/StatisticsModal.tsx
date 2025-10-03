import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QueryLogs } from "@/components/QueryLogs";

export const StatisticsModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Statistics & Query Logs</DialogTitle>
        </DialogHeader>
        <QueryLogs />
      </DialogContent>
    </Dialog>
  );
};
