import React from "react";
import Address from "../Address";
import Icons from "../icons";

const TopRow = ({data}) => {
  return (
    <div className="TopRow">
      <div className="From">
        <Address
          direction="From"
          location={data?.moving_from}
        />
      </div>
      <div className="Arrow">
        <Icons name={"ArrowCircleRightOutlinedIcon"} />{" "}
      </div>
      <div className="To">
        <Address direction="To" location={data?.moving_to}/>
      </div>
      <div className="reqId">
        <h3>Request#</h3>
        <p ><strong>{data?.estimate_id}</strong> </p>
      </div>
    </div>
  );
};

export default TopRow;
