import React from 'react'


const Address = ({direction,location}) => {
  return (
    <>
    <div className='Direction'>{direction}</div>
    <div className='Location'>{location}</div>
    </>
  )
}

export default Address