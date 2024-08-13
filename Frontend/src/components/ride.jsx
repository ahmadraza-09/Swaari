import React, { useEffect, useState, useRef } from 'react';
import '../css/ride.css';

const Ride = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [stopPosition, setStopPosition] = useState(0);
  const stopis4Ref = useRef(null);

  useEffect(() => {
    if (stopis4Ref.current) {
      const stopis4Top = stopis4Ref.current.offsetTop;
      setStopPosition(stopis4Top);
    }

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    // Set start and end positions
    const startPosition = 300; // Starting 'top' value in px
    //   const endPosition = 200;  // Ending 'top' value in px
    const scrollStart = 900;    // Scroll position where the movement starts
    const scrollEnd = stopPosition;   // Scroll position where the movement ends

  // Calculate current position based on scroll
  let currentPosition = startPosition;
  if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
    currentPosition = startPosition + (scrollEnd - startPosition) * ((scrollPosition - scrollStart) / (scrollEnd - scrollStart));
  } else if (scrollPosition > scrollEnd) {
    currentPosition = stopPosition; // Clamp to stopis4 position
  } else if (scrollPosition < scrollStart) {
    currentPosition = startPosition;
  }

  return (
    <div className='ride-section'>
      <h2>How SWAARI Ride Works?</h2>
      <div className="guide-container">
        <img
          className='auto-upper'
          src="Images/auto-upper.png"
          alt=""
          style={{
            top: `${currentPosition}px`, // Move image based on scroll
          }}
        />
        <div className="auto-road"></div>
        <div className="stopis1 stopis"></div>
        <div className="stopis2 stopis"></div>
        <div className="stopis3 stopis"></div>
        <div className="stopis4 stopis" ref={stopis4Ref}></div>
        <div className="parent-guide-box">
          <div className="guide-box">
            <h3>Choose Your Destination</h3>
            <img src="Images/travel.png" alt="" />
            <p>Select your starting location and destination with ease. Choose your preferred date and time for a seamless experience. Get tailored suggestions as you type. Plan your journey effortlessly!</p>
          </div>
        </div>
        <div className="parent-guide-box2">
                <div className="guide-box">
                    <h3>Click On Search Button</h3>
                    <img src="Images/search.png" alt="" />
                    <p>"Once you've entered your details, simply click the 'Search' button. We'll find the best routes for you in seconds. Explore your options and choose the one that fits your schedule. Start your journey with just one click!"</p>
                </div>
            </div>
            <div className="parent-guide-box3">
                <div className="guide-box">
                    <h3>Choose Available Auto</h3>
                    <img src="Images/available.png" alt="" />
                    <p>"After searching, browse through the available autos that match your route. Compare options and select the one that best suits your needs. Each auto is ready to take you to your destination. Just click on your preferred auto to proceed!"</p>
                </div>
            </div>
            <div className="parent-guide-box4">
                <div className="guide-box">
                    <h3>Enjoy Your Ride Now</h3>
                    <img src="Images/dance.png" alt="" />
                    <p>"Once you've chosen your auto, you're all set to go! Sit back, relax, and enjoy your ride to the destination. Our service ensures a smooth and comfortable journey. Let us take care of the rest while you travel with ease!"</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Ride;
