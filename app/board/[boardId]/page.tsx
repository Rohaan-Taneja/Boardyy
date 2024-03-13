import React from "react";
import { Room } from "@/components/Room";
import { Loading } from "./_components/Loading";
import { Canvas } from "./_components/Canvas";

interface BoardPgeProps {
  params: {
    boardId: string;
  };
}

const BoardIdpage = ({ params }: BoardPgeProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdpage;
