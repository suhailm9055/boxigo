import React, { useEffect, useState } from "react";
import MyMovesCard from "../../components/myMoves/MyMovesCard";
import Icons from "../../components/icons";

const MyMoves = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://test.api.boxigo.in/sample-data/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  console.log('data',data);
  return (
    <>
      <div className="MyMoves">
        <div className="title">
          <strong>My Moves</strong>
        </div>
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
    </>
  );
};

export default MyMoves;
