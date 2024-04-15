import React, { useState } from 'react'

import './keys.css'

const Keys = () => {
    const [status,setStatus]= useState(false)
  return (
    <div className='key'>{
        status? <h1>Learn React</h1>:null
      }
      
         <button className='show'
            onClick={()=>setStatus(true)}>
              Show</button>
         <button className='hide'
            onClick={()=>setStatus(false)}>
              Hide</button>

         <button className='toggle'
            onClick={()=>setStatus(!status)}>
              Toggle</button></div>
  )
}

export default Keys