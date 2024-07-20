import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PlaceIcon from '@mui/icons-material/Place';

const Icons = ({name,isBlack}) => {
  return (
    <div className={`icons ${isBlack}`}>
       {name=="ArrowCircleRightOutlinedIcon" && <ArrowCircleRightOutlinedIcon/>}
       {name=="HomeRoundedIcon" && <HomeRoundedIcon/>}
       {name=="DateRangeRoundedIcon" && <DateRangeRoundedIcon/>}
       {name=="EditRoundedIcon" && <EditRoundedIcon />}
       {name=="ReportProblemRoundedIcon" && <ReportProblemRoundedIcon />}
       {name=="KeyboardArrowUpIcon" && <KeyboardArrowUpIcon />}
       {name=="KeyboardArrowDownIcon" && <KeyboardArrowDownIcon />}
       {name=="HourglassTopIcon" && <HourglassTopIcon />}
       {name=="WidgetsIcon" && <WidgetsIcon />}
       {name=="PlaceIcon" && <PlaceIcon />}
    </div>
  )
}

export default Icons