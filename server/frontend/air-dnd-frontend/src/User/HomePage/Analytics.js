import "./Home.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Analytics = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <div
        id="showForm"
        style={{ display: showForm ? "block" : "none", backgroundColor: "red" }}
      >
        <span>Room</span>
        <span>Adult</span>
        <span>Children </span>
      </div>
      <form
        action="https://nuss.uxper.co/boutique-hotel/"
        method="GET"
        style={{ height: "50vh", width: "100%" }}
      >
        <div>
          <div className="form-container">
            <div style={{ padding: "10px", margin: "10px" }}>
              <label className="text-uppercase">Check in - Check out</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                className="datepicker"
                onClick={() => setShowForm(true)} // Show form on click
              />
            </div>

            <div style={{ padding: "10px", margin: "10px" }}>
              <div>
                <label className="text-uppercase">Rooms / guests</label>
              </div>

              
              <div className="text-black d-flex form-toggel">
                <div>
                  <span>{rooms} Room ,</span>
                </div>
                <div>
                  <span>{adult} Adult ,</span>
                </div>
                <div>
                  <span>{children} Children</span>
                </div>
              </div>
              {/* <button type="button" id="toggleForm" onClick={toggleForm}>Toggle Form</button> */}
            </div>

            <div className="check-button" style={{ height: "120px" }}>
              <span className="text-uppercase">Cheeck Availability</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Analytics;














