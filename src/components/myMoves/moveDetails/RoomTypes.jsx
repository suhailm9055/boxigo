import React from "react";
import Icons from "../../icons";
const RoomTypes = ({ setShowRoomDetails, showRoomDetails, inventory ,name}) => {
  const includedItemsCount = () => {
    const availableItems = inventory?.map((inventoryItem) => {
      return inventoryItem.category.map((cat) =>
        cat["items"]?.reduce((total, item) => {
          if (item["qty"] > 0) {
            total += item["qty"];
          }
          return total;
        }, 0)
      );
    });
    return availableItems;
  };
  const sumNestedArray = () => {
    return includedItemsCount().reduce((totalSum, subArray) => {
      return (
        totalSum + subArray.reduce((subTotal, number) => subTotal + number, 0)
      );
    }, 0);
  };
  return (
    <div
      className="RoomTypesWithArrow"
      onClick={() => setShowRoomDetails((prev) =>{
      return prev.includes(name)?
      prev.filter(Array => !Array.includes(name))
      : [...prev,name]
      } )}
    >
      <div className="RoomTypes">
        <span>
          <strong>{name}</strong>{" "}
        </span>
        <div className="itemCountDiv">
          <strong>{sumNestedArray()}</strong>
        </div>
      </div>
      <div className="iconArrow">
        {showRoomDetails ? (
          <Icons name="KeyboardArrowDownIcon" isBlack="black" />
        ) : (
          <Icons name="KeyboardArrowUpIcon" isBlack="black" />
        )}
      </div>
    </div>
  );
};

export default RoomTypes;
