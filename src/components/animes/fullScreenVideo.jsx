import { forwardRef } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const FullScreenVideo = forwardRef(
  ({ children, open, setOpen }, ref) => {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="hidden" asChild ref={ref} />
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className="w-[90%] max-w-full h-[90%] p-0 overflow-hidden"
        >
          {children}
        </DialogContent>
      </Dialog>
    );
  }
);

FullScreenVideo.displayName = "FullScreenVideo";
