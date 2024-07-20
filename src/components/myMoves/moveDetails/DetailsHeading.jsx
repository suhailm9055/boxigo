import React from 'react'
import ButtonComponent from "../../ButtonComponent";


const DetailsHeading = ({heading,buttonTitle,buttonType,buttonColor}) => {
  return (
    <div className="heading">
    <strong>{heading}</strong>
    <ButtonComponent title={buttonTitle}
    type={buttonType}
    color={buttonColor}
    bold={true}
    />
  </div>
  )
}

export default DetailsHeading