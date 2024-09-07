import React ,{useState} from "react";
import { NavLink ,useLocation} from 'react-router-dom'

import "../Styles/Footer.css";

const Footer = () => {
  const [FootBg, setFootBg] = React.useState("pink");
  const location = useLocation();
 React.useEffect(()=> {
   if (window.location.pathname === "/") {
      setFootBg("white");
    } else {
      setFootBg('#ffacac')
    }
  }, [location]);
  
  
  return (
    <div style={{ backgroundColor: FootBg }} className="social-media">
      
      <div className="left">
        <div className="upper">
        <NavLink to="/Team"><p>Meet the Team</p></NavLink>
        </div>
       
        
      </div>
      <div className="right">
        <h1> GET IN TOUCH</h1>

        <div className="Under-two">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <br></br>

        <p>
          {" "}
          <i class="fa-solid fa-envelope"></i>
          /r_bansal@me.iitr.ac.in
        </p>

        <br></br>
        <p>
          {" "}
          <i className="fa-brands fa-facebook" style={{ color: "#2f56f4" }} />
          Raman Bansal
        </p>
        <br></br>
        <p>
          <i class="fa-brands fa-instagram" style={{ color: "purple" }}></i>
          @7452raman
        </p>
        <br></br>
        <p>
          {" "}
          <i class="fa-brands fa-linkedin" style={{ color: "blue" }}></i>
          Raman Bansal
        </p>
        <br></br>
        <p>
          {" "}
          <i class="fa-brands fa-x-twitter"></i>
          @Raman
        </p>
        <br></br>

        <p>
          {" "}
          <i class="fa-brands fa-youtube" style={{ color: "red" }}></i>
          @r_bansal
        </p>
      </div>
    </div>
  );
};

export default Footer;
