"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Hint from "@/components/Hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

// this is the component , that will show the individual organisation div , presnt in sidebar , individual names
export const Items = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  // checking , which organisation is active 
  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">

      {/* this hint is the tooltip component , that we have designed */}
      <Hint
        label={name}
        side="right"
        sideOffset={18}
        align="center"
        alignOffset={10}
      >
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={onClick}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "rounded-md cursor-pointer opacity-60 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
