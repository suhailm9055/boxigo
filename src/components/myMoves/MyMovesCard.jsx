import React, { useState } from 'react'
import TopRow from "./TopRow"
import BottomRow from "./BottomRow"
import MoveDetailsContainer from './moveDetails/MoveDetailsContainer'

const MyMovesCard = ({data}) => {

  const [showMoveDetails,setShowMoveDetails] = useState(false)

  return (
    
    <div className='MyMovesCard'>
        
        <TopRow data={data}/>
        <BottomRow setShowMoveDetails={setShowMoveDetails} data={data}/>
       {showMoveDetails &&  <MoveDetailsContainer data={data} />}
      <hr/>

    </div>
    
  )
}

export default MyMovesCard