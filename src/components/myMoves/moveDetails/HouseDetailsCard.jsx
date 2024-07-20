import React from "react";
import DoubleText from "../../DoubleText";

const HouseDetailsCard = ({data}) => {
  return (
    <>
    <div className="HouseDetailsCard">
      <span>
        <strong>Existing House Details</strong>{" "}
      </span>
      <div className="Texts">

      <DoubleText label={"Floor No."} value={data?.old_floor_no} />
      <DoubleText label={"Elevator Available"} value={data?.old_elevator_availability} />
      <DoubleText label={"Packing Required"} value={data?.packing_service} />
      <DoubleText label={"Distance From Truck to Door"} value={data?.old_parking_distance} />
      <DoubleText label={"Additional Information"} value={data?.old_house_additional_info ?data?.old_house_additional_info:"no Additional Info"} />
      </div>
    </div>
    <div className="HouseDetailsCard">
      <span>
        <strong>New House Details</strong>{" "}
      </span>
      <div className="Texts">

      <DoubleText label={"Floor No."} value={data?.new_floor_no} />
      <DoubleText label={"Elevator Available"} value={data?.new_elevator_availability} />
      <DoubleText label={"Packing Required"} value={data?.packing_service} />
      <DoubleText label={"Distance From Truck to Door"} value={data?.new_parking_distance} />
      <DoubleText label={"Additional Information"} value={data?.new_house_additional_info ?data?.new_house_additional_info:"no Additional Info"} />
      </div>
    </div>
    </>
  );
};

export default HouseDetailsCard;
