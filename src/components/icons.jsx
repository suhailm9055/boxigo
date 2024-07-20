import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


const Icons = ({name,isBlack}) => {
  return (
    <div className={`icons ${isBlack}`}>
       {name=="ArrowCircleRightOutlinedIcon" && <ArrowCircleRightOutlinedIcon/>}
       {name=="HomeRoundedIcon" && <HomeRoundedIcon/>}
       {name=="DateRangeRoundedIcon" && <DateRangeRoundedIcon/>}
       {name=="EditRoundedIcon" && <EditRoundedIcon />}
    </div>
  )
}

export default Icons