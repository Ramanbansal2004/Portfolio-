import React,{ useState , useEffect ,useRef } from 'react';
import '../Styles/Navbar.css';

import { Link ,NavLink , useLocation} from 'react-router-dom'
import logook from '../assets/Logok.png';
const Navbar=({toggle})=>{
  const [openMenu,setMenu]=useState('');
  let navRef=useRef();
  useEffect(()=>{
    let handler=(e)=>{
      if(!navRef.current.contains(e.target)){
        setMenu('');
      }  
    }
    document.addEventListener("click",handler);
    return()=>{
      document.removeEventListener("click",handler);
    }
  })
  
  return(
    <div className="navbar" ref={navRef}  style={{ backgroundColor: "#f0f2f5" }}>
      <NavLink to="/"><img  className="img_1" src   ={logook}/></NavLink>
      <div className="Search">
        <input type="text" className="searchStyle" name="search" placeholder='Search..'/>
      </div>
      <Link to="/login">Login/SignUp</Link>
    </div>
    )
}
export default Navbar;