import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";


// thi is the component to invite the members 
const Invite_Button = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus className="h-4 w-4 mr-2" />
          Invite members 
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

export default Invite_Button;
