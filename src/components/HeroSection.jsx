import React from 'react'
import image from "../assets/logo.png"
import "./style.css"
function HeroSection() {
  return (
    <div className='hero'>
        <img className='logo' src={image} alt="" width={100}/>
        <h1>FIFA23</h1>
    </div>
  )
}

export default HeroSection