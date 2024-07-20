import React from "react";
import MyMovesCard from "../../components/MyMovesCard";

const MyMoves = () => {
  return (
    <>
      <div className="MyMoves">
        MyMoves
        <MyMovesCard />
        <MyMovesCard />
        <MyMovesCard />
        <MyMovesCard />
      </div>
    </>
  );
};

export default MyMoves;
