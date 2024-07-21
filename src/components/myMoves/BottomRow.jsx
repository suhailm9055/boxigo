import React, { useState } from "react";
import IconAndText from "../IconAndText";
import Icons from "../icons";
import Checkbox from "../Checkbox";
import ButtonComponent from "../ButtonComponent";
import Footer from "../Footer";
import {formatDate} from "../../utils/dateFormat"

const BottomRow = ({setShowMoveDetails,data}) => {
  const [isFlexible, setIsFlexible] = useState(data?.move_date_flexible );
  return (
    <>
    <div className="BottomRow">
      <div className="Type">
        <IconAndText text={data?.property_size} icon="HomeRoundedIcon" />
      </div>
      <div className="Packages">
        <IconAndText text={data?.total_items} icon="WidgetsIcon" />
      </div>
      <div className="Distance">
        <IconAndText text={data?.distance} icon="PlaceIcon" />
      </div>
      <div className="Date">
        <IconAndText text={formatDate(data?.moving_on) } icon="DateRangeRoundedIcon" />
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
      <ButtonComponent type="outlined" title="View Move Details" setShowMoveDetails={setShowMoveDetails}/>
        <ButtonComponent type="contained" title={"Qoutes Awaiting"}/>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default BottomRow;
