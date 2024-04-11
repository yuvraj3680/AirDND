import React, { useState } from "react";
import "./MainFrame.css";
import Home from "../../User/HomePage/Home"
import Header from "../HeaderPage/Header";
import AddHotel from "../../Vendor/AddHotel";

import Login from "../LoginPage/Login";
const MainFrame = () => {
  const views = [ <Home/>,<Login/>,<AddHotel/>];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const handleLinkChange = (pageno) => {
    console.log(pageno);
    setCurrentViewIndex(pageno);
  };

  return (
    <>
      <div className="headerdiv">
       
        
      </div>
      <div>{views[currentViewIndex]}</div>
    </>
  );
};

export default MainFrame;
