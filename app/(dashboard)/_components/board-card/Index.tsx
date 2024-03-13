"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./Overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./Footer";
import { Actions } from "@/components/Actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

// this will get the details  and will return a card
const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "you" : authorId;

  // abhi se kitni der pehle banaya gya hai
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const {
    mutate: onfavourite,
    pending:pendingfavourite
  }= useApiMutation(api.board.favorite);
  const {
    mutate:onunfavourite,
    pending:pendingunfavourite
  }= useApiMutation(api.board.unfavorite);



  const togglefavourite=()=>{
    if(isFavorite){
      onunfavourite({id})
        .catch(()=> toast("failed to unfavourite"))

    }else{
      onfavourite({id,orgId})
        .catch(()=> toast("failed to favourite"))
    }
  }

  return (
    <div>
      <Link href={`/board/${id}`}>
        <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
          <div className="relative flex-1 bg-amber-50">
            <Image src={imageUrl} alt={title} fill className="object-fit" />

            {/* this will give hover effect  */}
            <Overlay />

              {/* three horizontal dots bttn  */}
            <Actions id={id} title={title} side="right">
              <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
                <MoreHorizontal 
                  className="text-white opacity-75 hover:opacity-100 transition-opacity" />
              </button>
            </Actions>
          </div>
          <Footer
            isFavorite={isFavorite}
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdAtLabel}
            onclick={togglefavourite}
            disabled={pendingfavourite || pendingunfavourite}
          />
        </div>
      </Link>
    </div>
  );
};

export default BoardCard;
