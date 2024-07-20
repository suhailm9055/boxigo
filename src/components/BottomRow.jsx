import React, { useState } from "react";
import IconAndText from "./IconAndText";
import Icons from "./icons";
import Checkbox from "./Checkbox";
import Button from "./Button";

const BottomRow = () => {
  const [isFlexible, setIsFlexible] = useState(false);
  return (
    <div className="BottomRow">
      <div className="Type">
        <IconAndText text="2 BHK" icon="HomeRoundedIcon" />
      </div>
      <div className="Packages">
        <IconAndText text="24" icon="HomeRoundedIcon" />
      </div>
      <div className="Distance">
        <IconAndText text="4.8 km" icon="HomeRoundedIcon" />
      </div>
      <div className="Date">
        <IconAndText text="4.8 km" icon="DateRangeRoundedIcon" />
        <Icons name="EditRoundedIcon" isBlack="black" />
      </div>
      <div className="IsFlexible">
        <Checkbox
          isFlexible={isFlexible}
          setIsFlexible={setIsFlexible}
          text="Is flexible"
        />
      </div>
      <div className="DetailsButtons">
        <Button type="outLined" title="View More Details"/>
        <Button type="filled" title={"Qoutes Awaiting"}/>
      </div>
    </div>
  );
};

export default BottomRow;
