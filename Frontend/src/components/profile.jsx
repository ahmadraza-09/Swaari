import React from 'react'
import '../css/profile.css'

const Profile = () => {
  return (
    <>
      <div className="profile-section">
        <div className="user-profile-card">
          <div className="user-profile-card-section">
            <div className="user-profile-card-section-left">
              <div className="left">
                <img className='profile-img' src="Images/profile.png" alt="" />
              </div>
              <div className="right">
                <h4 className="name">
                  Ahmad Raza
                </h4>
                <p className="number">
                  9297829642
                </p>
              </div>
            </div>
            <div className="user-profile-card-section-right">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="user-profile-card-bookings">
            Bookings
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <ul className='mobile-menu-list'>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-solid fa-handshake-angle"></i>
              Help
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-solid fa-truck"></i>
              Parcel - Send Items
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-regular fa-credit-card"></i>
              Payment
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-solid fa-car"></i>
              My Rides
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-solid fa-shield"></i>
              Safety
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              Refer and Earn
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className='mobile-menu'>
            <div className="left">
              <i class="fa-solid fa-gear"></i>
              Settings
            </div>
            <div className="right">
               <i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Profile
