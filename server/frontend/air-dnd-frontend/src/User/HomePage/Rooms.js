import React, { useState, useEffect } from "react";
import "./Rooms.css";
import Menu from "./CradRoom"; 


const Rooms = () => {
  const [menuData, setMenuData] = useState(Menu);
  


  console.log(Menu);
  
  const filterItem = (title) => {
    if (title === "all") {
      setMenuData(Menu); // Use CradRoom here
    } else {
      const updatedList = Menu.filter((item) => item.title.toLowerCase() === title.toLowerCase()); // Use CradRoom here
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <div className="room-heading">
        <h1>Rooms</h1>
      </div>
      <div className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filterItem("all")}>ALL</button>
          <button className="btn-group__item" onClick={() => filterItem("Double Room")}>DOUBLE ROOM</button>
          <button className="btn-group__item" onClick={() => filterItem("Single Room")}>SINGLE ROOM</button>
          <button className="btn-group__item" onClick={() => filterItem("Triple Room")}>TRIPLE ROOM</button>
          <button className="btn-group__item" onClick={() => filterItem("Junior Suite")}>JUNIOR SUITE</button>
        </div>  
      </div>

      <div className="room-details">
        {Array.isArray(menuData) && menuData.map((room, index) => (
          <div className="room-card col-6" key={index}>
            <div className="image-container">
              <img src={room.image} alt="Room" />
              <div className="room-price">
                <a href="#">
                  <span className="regular-price">{`$${room.price}`}</span>
                  <span className="suffix-price">/ Night</span>
                </a>
              </div>
            </div>
            <h2 className="room-title ps-5">{room.title}</h2>
            <div className="room-list">
              <ul className="room-features">
                {room.features.map((feature, index) => (
                  <li key={index}>
                    <i className={feature.icon}></i>{feature.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ps-5">
              <p>{room.description}</p>
              <a href="#">
                <h4>Room Detail</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rooms;
