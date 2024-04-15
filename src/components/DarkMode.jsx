import React, {  useState } from 'react'
import './DarkMode.css'
import Toggle from './Toggle'
import useLocalStorage from 'use-local-storage'

const DarkMode = () => {

    const preference = window.matchMedia("(prefer-color-scheme:dark)").matches;
    const[isDark,setaisDark]=useLocalStorage("isDark",preference)

  return (
    <div className='DarkMode' data-theme={isDark?"dark":"light"}>
       <Toggle isChecked={isDark} handleChange={()=>setaisDark(!isDark)}/>
       <h1 className='title'>Hello world</h1>
       <div className='box'>
        <h2>This is a box</h2>
       </div>

    </div>
  )
}

export default DarkMode