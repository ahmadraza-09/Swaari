import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/mobilefooter.css'

const MobileFooter = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="mobile-footer">
        <div className="home-button" onClick={() => {navigate('/')}}>
            <i class="fa-solid fa-house"></i>
        </div>
        <div className="home-button" onClick={() => {navigate('/searchride')}}>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="home-button" onClick={() => {navigate('/ride')}}>
            <img src="Images/auto-rickshaw.svg" alt="" />
        </div>
        <div className="home-button" onClick={() => {navigate('/profile')}}>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </>
  )
}

export default MobileFooter
