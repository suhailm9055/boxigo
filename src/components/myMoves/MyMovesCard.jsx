import React, { useState } from 'react'
import TopRow from "./TopRow"
import BottomRow from "./BottomRow"
import MoveDetailsContainer from './moveDetails/MoveDetailsContainer'

const MyMovesCard = () => {

  const [showMoveDetails,setShowMoveDetails] = useState(true)
  return (
    
    <div className='MyMovesCard'>
        
        <TopRow/>
        <BottomRow setShowMoveDetails={setShowMoveDetails}/>
       {showMoveDetails &&  <MoveDetailsContainer  />}
      <hr/>

    </div>
    
  )
}

export default MyMovesCard