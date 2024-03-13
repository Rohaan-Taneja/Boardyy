"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Hint from "@/components/Hint";

const New_Button = () => {
  return (
    <Dialog>

      <DialogTrigger asChild>
        

        <div className="aspect-square">

          {/* tooltip conponent  */}
          <Hint
            label="add orgnaisation"
            side="right"
            sideOffset={18}
            align="center"
          >
            <button className="bg-white/25 p-1.5 rounded-md mt-4 opacity-60 hover:opacity-100 transition ">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-0 max-w-[480px]">

        {/* this is the feature , which will open up in the dialog box and allow us to create a new organization  */}
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default New_Button;
