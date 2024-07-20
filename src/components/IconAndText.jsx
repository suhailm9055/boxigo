import React from 'react'
import Icons from './icons'

const IconAndText = ({text,icon}) => {
  return (
    <div className='IconAndText'>
        <Icons name={icon}/>
        <h4>{text}</h4>

    </div>
  )
}

export default IconAndText