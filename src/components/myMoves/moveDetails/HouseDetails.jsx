import React from 'react'
import DetailsHeading from './DetailsHeading'
import HouseDetailsCard from './HouseDetailsCard'

const HouseDetails = ({data}) => {
  
  return (
    <>
    <div className="RoomTypesContainer">
      <DetailsHeading
        heading={"House Details"}
        buttonTitle="Edit House Details"
        buttonType="contained"
        buttonColor="black"
      />
    <HouseDetailsCard data={data}/>
    </div>
  </>
  )
}

export default HouseDetails