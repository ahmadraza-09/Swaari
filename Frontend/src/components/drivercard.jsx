import React from 'react';
import '../css/drivercard.css';

const DriverCard = ({ imageUrl, businessName, rating, location, isAvailable, onBookNow }) => {
  return (
    <div className="driver-card">
      <div className="image-section">
        <img src={imageUrl} alt="Driver" />
      </div>

      <div className="content-section">
        <div className="name-rating">
          <h4 className="business-name">
            {businessName}
          </h4>

          <div className="bussiness-rating">
            <i className="fa-solid fa-star"></i>
            {rating}
          </div>
        </div>

        <div className="driver-location">
          <i className="fa-solid fa-location-dot"></i>
          <p>{location}</p>
        </div>

        { isAvailable ? (
          <div className="available-today">
            <img src="Images/check-mark.png" alt="" /> Available Now
          </div>
        ) : (
          <div className="available-today not-available-today">
            <img src="Images/not-available.jpg" alt="" /> Not Available
          </div>

        )}

        <button className="driver-card-button" onClick={onBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default DriverCard;
