import React from "react";
import { NavLink} from 'react-router-dom'
import { Link} from 'react-router-dom'
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
        <h4> GET IN TOUCH</h4>

        <div className="Under-two">
        </div>
        <br></br>
        <div className="icons">
          <Link to="https://www.facebook.com/raman.bansal.54738943"><i className="fa-brands fa-facebook" style={{ color: "#2f56f4" }} /></Link>
          <Link to="https://www.instagram.com/7452raman/"><i class="fa-brands fa-instagram" style={{ color: "purple" }}></i></Link>
          <Link to="https://x.com/Raman96738889"><i class="fa-brands fa-x-twitter"></i></Link>
          <Link to="https://youtube.com/channel/UCJJA1y9zKal0MRCULtO_YFw"><i class="fa-brands fa-youtube" style={{ color: "red" }}></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
