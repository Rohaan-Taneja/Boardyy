import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/elements.svg"
        alt="no organization selected"
        width={300}
        height={300}
      />

      <h2 className="text-2xl font-semibold mt-6">Welcome to Boardy</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization to get started
      </p>

      <Dialog>
        <DialogTrigger>
            <Button size="lg" className="mt-5">
                Create Organization
            </Button>
        </DialogTrigger>
        <DialogContent className="border-none bg-transparent p-0 max-w-[480px]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmptyOrg;
