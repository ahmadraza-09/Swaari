import React, { useState, useEffect, useRef } from 'react';
import '../css/header.css';

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const accountRef = useRef(null);

    const handleAccountClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (event) => {
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <>
      <div className="header">
            <h2 className="logo">
                SW<img src="Images/auto-rickshaw.svg" alt="" />&nbsp;RI
            </h2>

            <div className="menu">
                <li>Home</li>
                <li>Ride</li>
                <li>Drive</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </div>

            <div className="header-right">

                <div className="language">
                    <i class="fa-solid fa-globe"></i>
                </div>

                <div className="account" onClick={handleAccountClick} ref={accountRef}>
                    <i class="fa-solid fa-bars"></i>
                    <img src="Images/profile.png" alt="" />
                    {showDropdown && (
                        <div className="account-dropdown">
                            <ul>
                                <li>Signup</li>
                                <li>Login</li>
                                <hr />
                                <li>Swaari your home</li>
                                <li>Help Centre</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
      </div>
    </>
  )
}

export default Header
