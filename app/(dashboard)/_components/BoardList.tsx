"use client";

import { useQuery } from "convex/react";
import EmptyBoards from "./EmptyBoards";
import { EmptyFavourite } from "./EmptyFavourite";
import Empty_Search from "./Empty_Search";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card/Index";
import NewBoardButton from "./NewBoardButton";

interface BoardListProps {
  orgId: string;

  query: {
    search?: string;
    favorite?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, {
    orgId,
    ...query,
  });

  console.log(data);
  

  if (data === undefined) {
    return <div> Loading ...</div>;
  }

  // if data set is empty and user searched for something
  if (!data?.length && query.search) {
    return <Empty_Search />;
  }

  //   if data set is empty and user selected favourite
  if (!data?.length && query.favorite) {
    return <EmptyFavourite />;
  }

  //   if data set is empty
  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        {/* if favourite is selected  */}
        {query.favorite ? " Favorite boards" : "Team boards"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageURL}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
