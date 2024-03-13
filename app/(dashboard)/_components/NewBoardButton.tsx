"use client";

import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

// this button will create a new board => denoted by blue background and + sign 
const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {

  const router= useRouter();
  // this is used to create a new board/row in the table
  const create = useMutation(api.board.create);
  const onclick = () => {
    create({
      orgId,
      title: "untitled",
    })
      .then((id) => {
        toast("new board has been created succesfully");
        router.push(`/board/${id}`)
      })
      .catch(() => {
        toast.error("failed to create board");
      });
  };

  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-400 rounded-lg hover:bg-blue-600 flex flex-col items-center justify-center py-6"
      )}
    >
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light"> New Board</p>
    </button>
  );
};

export default NewBoardButton;
