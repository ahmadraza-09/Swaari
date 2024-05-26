import React from 'react'
import '../css/desktopfooter.css'
import { useNavigate } from "react-router-dom";

const DesktopFooter = () => {

    // const navigate = useNavigate();

  return (
    <>
      <footer>
        <div class="row">
            <div class="footer-col">
                <h2 className="logo">
                    SW<img src="Images/auto-rickshaw.svg" alt="" />&nbsp;RI
                </h2>
                <img src="images/hefty-logo.png" alt="" />
                {/* <p>Your trusted partner in wellness, offering comprehensive medical resources and services.</p> */}
                <div className="contact-col">
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>B-80, P.C Colony,Gautam Budh Nagar, Sector-63, Noida, Uttar Pradesh</p>
                    </p>
                </div>
                <div className="contact-col">
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:0000000000" target='_blank'>+91 0000000000</a></p>
                    <p><i class="fa-solid fa-envelope"></i><a href="mailto:info@heftyservices.com" target='_blank'>info@swaari.com</a></p>
                </div>
                <div className="contact-col">
                    <p>
                        <i class="fa-regular fa-clock"></i>
                        <p>Mon – Sat: 10:00 am – 06.00 pm</p>
                    </p>
                </div>
            </div>
            <div class="footer-col">
                <h4>menu</h4>
                <a onClick={() => {navigate('/')}}>home</a>
                <a onClick={() => {navigate('/ride')}}>ride</a>
                <a onClick={() => {navigate('/drive')}}>drive</a>
                <a onClick={() => {navigate('/about')}}>about</a>
                <a onClick={() => {navigate('/gallery')}}>gallery</a>
                <a onClick={() => {navigate('/contact')}}>contact</a>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <a onClick={() => {navigate('/faq')}}>FAQ</a>
                <a>Contact Support</a>
                <a>Terms and Conditions</a>
                <a>privacy policy</a>
                <a>Give Feedback</a>
                <a>payment options</a>
            </div>
            <div class="footer-col">
                <h4>services</h4>
                <a>Ride Booking</a>
                <a>Driver On Demand</a>
                <a>Vehicle Rental</a>
                <a>Outstation Rides</a>
                <a>Package Delivery</a>
                <a>Emergency Assistance</a>
            </div>
            <div class="footer-col">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a><i class="fab fa-facebook-f"></i></a>
                    <a><i class="fab fa-twitter"></i></a>
                    <a><i class="fab fa-instagram"></i></a>
                    <a><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div className="news-letter">
                    <input type="text"  placeholder='Enter your E-Mail'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

        <div className="footer-copyright">
            <div className="footer-copyright-left">
                <p>© 2024</p> 
                <div className="footer-logo">
                    SW<img src="Images/auto-rickshaw.svg" alt="" />&nbsp;RI
                </div>
            </div>

            <div className="footer-copyright-right">
                All Rights Reserved
            </div>
        </div>
      </footer>
    </>
  )
}

export default DesktopFooter
