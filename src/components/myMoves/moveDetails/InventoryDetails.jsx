import React, { useState } from "react";
import RoomDropDownItems from "./roomDropDownItems";
import RoomTypes from "./RoomTypes";
import DetailsHeading from "./DetailsHeading";

const InventoryDetails = ({inventory}) => {
  const [showRoomDetails, setShowRoomDetails] = useState([]);
  return (
    <>
      <div className="RoomTypesContainer">
        <DetailsHeading
          heading={"Inventory Details"}
          buttonTitle="Edit Inventory"
          buttonType="contained"
          buttonColor="black"
        />
        <RoomTypes
          setShowRoomDetails={setShowRoomDetails}
          showRoomDetails={showRoomDetails.includes("Living Room")}
          inventory={inventory}
          name={"Living Room"}

        />
        {showRoomDetails.includes("Living Room") && <RoomDropDownItems inventory={inventory} name={"Living Room"}/>}

        <RoomTypes
          setShowRoomDetails={setShowRoomDetails}
          showRoomDetails={showRoomDetails.includes("Bed Room")}
          inventory={inventory}
          name={"Bed Room"}
        />
        {showRoomDetails.includes("Bed Room") && <RoomDropDownItems inventory={inventory}  name={"Bed Room"}/>}

        <RoomTypes
          setShowRoomDetails={setShowRoomDetails}
          showRoomDetails={showRoomDetails.includes("Kitchen")}
          inventory={inventory}
          name={"Kitchen"}
        />
        {showRoomDetails.includes("Kitchen") && <RoomDropDownItems inventory={inventory} name={"Kitchen"}/>}

        <RoomTypes
          setShowRoomDetails={setShowRoomDetails}
          showRoomDetails={showRoomDetails.includes("Bathroom") }
          inventory={inventory}
          name={"Bathroom"}
        />
        {showRoomDetails.includes("Bathroom") && <RoomDropDownItems inventory={inventory} name={"Bathroom"}/>}
      </div>
    </>
  );
};

export default InventoryDetails;
