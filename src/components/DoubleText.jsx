import React from 'react'

const DoubleText = ({label,value}) => {
  return (
    <>
    <div className='DoubleText'>

    <h3 className='label'>{label}</h3>
    <h3 className='value'>{value}</h3>
    </div>
    </>
  )
}

export default DoubleText