"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

// emty board screen 
const EmptyBoards = () => {


  const router = useRouter();

  // getting the current active org
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  // this will add a new board or we can say a row is added into the table
  const onclick = () => {
    if (!organization) return;

    var bttn = document.querySelector(
      ".create_board_bttn"
    ) as HTMLButtonElement;

    bttn.disabled = true;

    // making buttn disable for 1 sec , so that its look alike it is creating and processing
    setTimeout(() => {
      bttn.disabled = false;
      create({
        orgId: organization.id,
        title: "untitled",
      })

          // we will create a board and will redirect the user to that board page 
        .then((id) => {
          toast(
            `board has been created succesfully in ${organization.name} organization`
          );
          router.push(`/board/${id}`);

        })
        .catch(() => {
          toast.error("failed to create the board");
        });
    }, 500);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/note.svg"
        alt="no organization selected"
        width={110}
        height={110}
      />

      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>

      <p className="text-muted-foreground text-sm mt-2">
        start by creating a board for your organization
      </p>

      
      <div className="mt-6">
        <Button onClick={onclick} size="lg" className="create_board_bttn">
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
