import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/header.css';

const Header = () => {

    const navigate = useNavigate();

    const [showDropdown, setShowDropdown] = useState(false);
    const [showLanguageDialog, setShowLanguageDialog] = useState(false);
    const accountRef = useRef(null);
    const languageRef = useRef(null);

    const handleAccountClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLanguageClick = () => {
        setShowLanguageDialog(!showLanguageDialog);
    };

    const handleCloseDialog = () => {
        setShowLanguageDialog(false);
    };

    const handleClickOutside = (event) => {
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
        if (languageRef.current && !languageRef.current.contains(event.target)) {
            setShowLanguageDialog(false);
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
            <h2 className="logo" onClick={() => {navigate('/')}}>
                SW<img src="Images/auto-rickshaw.svg" alt="" />&nbsp;RI
            </h2>

            <div className="menu">
                <li onClick={() => {navigate('/')}}>Home</li>
                <li onClick={() => {navigate('/ride')}}>Ride</li>
                <li onClick={() => {navigate('/drive')}}>Drive</li>
                <li onClick={() => {navigate('/about')}}>About</li>
                <li onClick={() => {navigate('/blog')}}>Blog</li>
                <li onClick={() => {navigate('/contact')}}>Contact</li>
            </div>

            <div className="header-right">

                <div className="language" onClick={handleLanguageClick} ref={languageRef}>
                    <i className="fa-solid fa-globe"></i>
                </div>

                <div className="account" onClick={handleAccountClick} ref={accountRef}>
                    <i className="fa-solid fa-bars"></i>
                    <img src="Images/profile.png" alt="" />
                    {showDropdown && (
                        <div className="account-dropdown">
                            <ul>
                                <li onClick={() => {navigate('/login')}}>Signup</li>
                                <li onClick={() => {navigate('/login')}}>Login</li>
                                <hr />
                                <li>Swaari your home</li>
                                <li>Help Centre</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {showLanguageDialog && (
            <>
                <div className="overlay" onClick={handleCloseDialog}></div>
                <div className="language-dialog">
                    <div className="language-dialog-content">
                        <i className="fa-solid fa-xmark close-icon" onClick={handleCloseDialog}></i>
                        <h3>Select Language</h3>
                            <div class="language-inputs">
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>English - EN</label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>हिन्दी - HI - <span>अनुवाद</span></label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>தமிழ் - TA - <span>மொழிபெயர்ப்பு</span></label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>తెలుగు - TE - <span>అనువాదం</span></label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>ಕನ್ನಡ - KN - <span>ಭಾಷಾಂತರ</span></label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>മലയാളം - ML - <span>വിവർത്തനം</span></label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>বাংলা - BN - <span>অনুবাদ</span></label>
                                </div>
                                <div class="langauge-box">
                                    <input type="radio" name="language"/>
                                    &nbsp;
                                    <label>मराठी - MR - <span>भाषांतर</span></label>
                                </div>
                            </div>
                                
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default Header;
