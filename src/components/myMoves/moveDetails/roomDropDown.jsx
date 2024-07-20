import React from "react";
import { inventory } from "../../../utils/mockData";
import ItemCount from "./ItemCount";

const RoomDropDown = () => {
  return (
    <>
      <div className="RoomDropDown">
        {inventory["inventory"]?.map((item, index) => {
          return (
            <div className="type" key={index}>
              <h3>{item?.displayName}</h3>
              {item?.category.map((category, ind) => (
                <ItemCount category={category} key={ind} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RoomDropDown;
