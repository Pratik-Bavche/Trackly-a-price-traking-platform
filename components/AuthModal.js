import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function AuthModal({isOpen,onClose}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign in to continue</DialogTitle>
            <DialogDescription>
                Track product prices and get alerts on price drops
            </DialogDescription>
          </DialogHeader>
            <div className="flex flex-col gap-4 py-4"></div>
        </DialogContent>
    </Dialog>
  )
}
