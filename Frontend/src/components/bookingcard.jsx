import React from 'react'
import '../css/bookingcard.css'

const BookingCard = () => {
  return (
    <>
      <div className="booking-card">
        <h2>Book Ride Now</h2>
        <form className="form">
            <div className="from booking-card-section">
                <label>From</label>
                <input type="text" placeholder='Starting Destination'/>
            </div>
            <div className="to booking-card-section">
                <label>To</label>
                <input type="text" placeholder='Final Destination'/>
            </div>
            <div className="date booking-card-section">
                <label>Date</label>
                <input type="date" placeholder='Starting Destination'/>
            </div>
            <div className="search booking-card-button">
                <button>Search</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default BookingCard
