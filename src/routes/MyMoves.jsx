import React, { useEffect, useState } from "react";
import MyMovesCard from "../components/myMoves/MyMovesCard";
import Icons from "../components/icons";

const MyMoves = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://test.api.boxigo.in/sample-data/"
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log();
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
if(error){
  return <div className="error">{error?.message}</div>
}

  return (
    <>
      <div className="MyMoves">
        <div className="title">
          <strong>My Moves</strong>
        </div>
        <div className="cards">

        {loading ? (
          <div className="Loading">
            <Icons name="HourglassTopIcon" />
          </div>
        ) : (
          (data["Customer_Estimate_Flow"] || [])?.map((item, ind) => (
            <MyMovesCard  data={item} key={ind}/>
          ))
        )}
        </div>
      </div>
    </>
  );
};

export default MyMoves;
