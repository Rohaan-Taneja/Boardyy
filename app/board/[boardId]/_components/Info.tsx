"use client";

import { Actions } from "@/components/Actions";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

// defing the font
const font = Poppins({
  subsets: ["latin"],
  weight: ["900"],
});


// this will give space between board name and boardyy 
const TabSeparator = () => {
  return (
    <div className="text-neutral-300 px-1.5">
      |
    </div>
  );
};

// this component will return the info of the board opened
const Info = ({ boardId }: InfoProps) => {
  
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  // if no board data , then skeleton will be loaded
  if (!data) {
    return <InfoSkeleton />;
  }
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      {/* hint is the our custor toolti component  */}
      <Hint label="go to Home Page">
        <Button asChild variant="ghost" className="px-2">
          <Link href="/">
            <Image src="/logoo.svg" alt="logo" height={40} width={40} />
            <span className="font-bold text-xl ml-2"> Boardyy</span>
          </Link>
        </Button>
      </Hint>

      {/* text seperator line  */}
      <TabSeparator />

      {/* name of the board  */}
      <Button
        variant="ghost"
        className="text-base font-normal px-2"
        onClick={() => onOpen(data._id, data.title)}
      >
        {data.title}
      </Button>

      <TabSeparator />

      <Actions
        id={data._id}
        title={data.title}
        side="bottom"
        sideOffset={10}
      >
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
export default Info;
