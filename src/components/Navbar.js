import React,{ useState , useEffect ,useRef } from 'react';
import '../Styles/Navbar.css';

import { Link ,NavLink , useLocation} from 'react-router-dom'
import logook from '../assets/Logok.png';
const Navbar=()=>{
  return(
    <div className="navbar">
      <NavLink to="/"><img  className="img_1" src   ={logook}/></NavLink>
      <div className="Search">
        <input type="text" className="searchStyle" name="search" placeholder='Search..'/>
      </div>
      <div className="right">
        <Link to="/" className="gap"><i class="fa-solid fa-cart-shopping"></i></Link>
        <Link to="/login" className="gap">Login/SignUp</Link>
      </div>
    </div>
    )
}
export default Navbar;