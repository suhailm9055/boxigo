import React from "react";
import ItemCount from "./ItemCount";

const RoomDropDown = ({inventory}) => {
  const isInventoryAvailable = (item) => {
    const hasQuantity = item.category.map((cat) =>
      cat["items"]?.filter((item2, ind) => {
        if (item2["qty"] > 0) {
          return true;
        }
      })
    );
    return hasQuantity.reduce((finalItem, currentItem) => {
      if (currentItem?.length > 0) {
        finalItem.push(currentItem);
      }
      return finalItem
    }, []);
  };

  return (
    <>
      <div className="RoomDropDown">
        {inventory?.map((item, index) => {
  

          return (
            isInventoryAvailable(item).length >0 && <div className="type" key={index}>
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
