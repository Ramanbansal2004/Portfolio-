import React,{ useState , useEffect ,useRef } from 'react';
import '../Styles/Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
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
      <div className="leftSide">
       <div className="Logos">    
        <img  className="img_1" src   ={logook}/>
       </div>
       <ul className="navlinks">
          <li>
           <NavLink to="/">Home</NavLink>
          </li>
          <li>
           <NavLink to="/events">Events</NavLink>
          </li>
          <li>
           <NavLink to="/learningSanskrit">Learning Sanskrit</NavLink>
          </li>
          <li>
           <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
           <NavLink to="/shaastraSetu">Shaastra Setu</NavLink>
          </li>
          <li>
           <NavLink to="/resources">Resources</NavLink>  
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <div className="LogAndMenu">
          <div>
            <Link to="/login">Login/SignUp</Link>
          </div>
        </div>
      </div>      
    </div>
    )
}
export default Navbar;