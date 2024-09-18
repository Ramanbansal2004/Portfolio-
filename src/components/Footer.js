import React from "react";
import { NavLink} from 'react-router-dom'

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f0f2f5" }} className="social-media">
      
      <div className="left">
        <div className="upper">
        <NavLink to="/Team"><p>About me</p></NavLink>
        </div>
       
        
      </div>
      <div className="right">
        <h6> GET IN TOUCH</h6>

        <div className="Under-two">
        </div>
        <br></br>
        <div className="icons">
          <i class="fa-solid fa-envelope"/>
          <i className="fa-brands fa-facebook" style={{ color: "#2f56f4" }} />
          <i class="fa-brands fa-instagram" style={{ color: "purple" }}></i>
          <i class="fa-brands fa-linkedin" style={{ color: "blue" }}></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-youtube" style={{ color: "red" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
