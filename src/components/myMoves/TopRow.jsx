import React from "react";
import Address from "../Address";
import Icons from "../icons";

const TopRow = () => {
  return (
    <div className="TopRow">
      <div className="From">
        <Address
          direction="From"
          location="Koramangala Police Station, 20th Main Road, 6th Block, Koramangala, Bengaluru, Karnataka"
        />
      </div>
      <div className="Arrow">
        <Icons name={"ArrowCircleRightOutlinedIcon"} />{" "}
      </div>
      <div className="To">
        <Address direction="To" location="Ejipura, Bengaluru, Karnataka" />
      </div>
      <div className="reqId">
        <h3>Request#</h3>
        <p >E21415</p>
      </div>
    </div>
  );
};

export default TopRow;
