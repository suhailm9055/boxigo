import React from "react";
import MyMovesCard from "../../components/myMoves/MyMovesCard";

const MyMoves = () => {
  return (
    <>
      <div className="MyMoves">
      <div className="title">
      <strong>My Moves</strong> 
        </div>
        <MyMovesCard />
        <MyMovesCard />
        <MyMovesCard />
        <MyMovesCard />
      </div>
    </>
  );
};

export default MyMoves;
