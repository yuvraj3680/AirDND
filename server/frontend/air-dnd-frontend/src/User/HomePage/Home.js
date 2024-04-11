import React from "react";

import Analytics from "./Analytics";


import "./Home.css"; // Import CSS styles
import Icon from "./Icon";
import ProfilePage from "./Profile";
// import Profile from "./Profile";
import Rooms from "./Rooms";
import Header from "../../Common/HeaderPage/Header";

const Home = () => {
  return (
    <>
      
      <div className="slide-bg-wrap">
      <Header/>
        <div className="slide-content">
          <div className="content-flex">
            <div className="text-content">
              <h4 className="sub-title">Urban & Unique</h4>
              <h2 className="title">
                Unique <i>Boutique Hotel</i>
                <div>in Chicago
                
                </div>
              </h2>
             
            </div>
           
            <Icon />
           
            <Analytics />
            
          </div>
          

        </div>
      </div>
      {/* <Profile/> */}
      <Rooms/>
      <ProfilePage/>
    </>
  );
};

export default Home;
