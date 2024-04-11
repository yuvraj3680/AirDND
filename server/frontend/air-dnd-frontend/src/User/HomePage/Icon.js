import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Icon = () => {
  return (
    <div class="demo-directional">
      <div class="nav">
        <ul>
          <li class="show-demo">
            <a href="#">
              <i className="fa">
                <FontAwesomeIcon icon={faCog} size="3x" />
              </i>
              <span>Demos</span>
            </a>
          </li>
          <li class="buy-now">
           
            <i class="fa fa-cart-shopping buy-now"></i>

            <span>Buy Now</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Icon;
