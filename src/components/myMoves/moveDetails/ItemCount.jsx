import React from "react";

const ItemCount = ({ category, key }) => {
  const availableItems = category["items"]?.filter((item, ind) => {
    return item["qty"] > 0;
  });


  const itemTypeDisplay = (item) => {
    const types = item["type"]?.map(
      (type, index) =>
        type["selected"] && type["option"]
    );

    return types.length>0 ?<strong>{...types}</strong> :<strong>NA</strong>

  };



  console.log("availableItems", availableItems);
  return (
    <>
      {availableItems?.map((item, ind) => {
        return (
          <>
            <div className="ItemCountContainer">
              <div className="itemNames">
                <p>{item?.displayName}</p>
                <p>{itemTypeDisplay(item)}</p>
              </div>
              <div className="itemCount">
                <strong>{item["qty"]}</strong>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ItemCount;
