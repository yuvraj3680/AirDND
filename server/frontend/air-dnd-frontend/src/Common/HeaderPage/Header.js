
import React from "react";
import menuData from "../../Utils/Nav.json"; // Import the JSON data
import "./Header.css";
import { IoMdMenu } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
const Header = ({onlinkChange}) => {
  console.log("functionCalled")
  const renderSubMenu = (subMenu) => {
    return (
      <ul>
        {subMenu.map((item) => (
          <li key={item.label}>
            <a onClick={()=>onlinkChange(item.navValue)} >{item.label}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header>
      <nav>
        <ul>
          <li className="icons-img-menu">
          <a href="#">
                  <IoMdMenu className="menuIcon" />
                </a>
          </li>
          <li className="icons-img-menu"><a href="#">
                   <img
                    src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/06/logo-white-boutiqe.svg"
                    alt="logo"
                  /> </a></li>
          {menuData.menu.map((item) => (
            <li key={item.label} className="item-links">
              {item.label}
              <RiArrowDownSLine />
              {renderSubMenu(item.subMenu)}
            </li>
          ))}
          <button>Book Now</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

