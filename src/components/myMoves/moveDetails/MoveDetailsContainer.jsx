import React from 'react'
import InventoryDetails from './InventoryDetails'
import HouseDetails from './HouseDetails'

const MoveDetailsContainer = ({data}) => {
  return (
    <div className='MoveDetailsContainer'>

        <InventoryDetails inventory={data?.items?.inventory}/>
        <HouseDetails data={data}/>
    </div>
  )
}

export default MoveDetailsContainer