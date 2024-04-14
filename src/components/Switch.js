import React, { useState } from 'react'
import './switch.css'
import cx from 'classnames'

const Switch = ({rounded=true}) => {
    const [isToggled,setIsTogled] = useState(false)
    
    const sliderCx = cx('slider',{
        rounded:rounded
    })


  return (
    <>
    
    {
    isToggled? <h1>Learn React</h1>:null
    }
   <label className='switch'>
    <input type='checkbox' checked={isToggled} onChange={()=>setIsTogled(previous=>!previous)}/>
    <span className={sliderCx}/>
   </label>
   </>
  )
}

export default Switch