import React from 'react'
import '../css/mobilefooter.css'

const MobileFooter = () => {
  return (
    <>
      <div className="mobile-footer">
        <div className="home-button">
            <i class="fa-solid fa-house"></i>
        </div>
        <div className="home-button">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="home-button">
            <img src="Images/auto-rickshaw.svg" alt="" />
        </div>
        <div className="home-button"><i class="fa-solid fa-user"></i></div>
      </div>
    </>
  )
}

export default MobileFooter
