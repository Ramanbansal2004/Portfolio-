import React,{ useState , useEffect ,useRef } from 'react';
import '../Styles/Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Link ,NavLink , useLocation} from 'react-router-dom'
import IIT from '../assets/IIT.png';
import SLogo from '../assets/SLogo.png';
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
    <div className="navbar" ref={navRef}  style={{ backgroundColor: "white" }}>
      <div className="leftSide">
       <div className="Logos">    
        <img  className="img_1" src   ={IIT}/>
        <div className="v"></div>
        <img  className="img_2" src={SLogo}/>
       </div>
      </div>
      <div className="rightSide">
        <div className="LogAndMenu">
          <div className="login">
            <Link to="/login">Login/SignUp</Link>
          </div>
          <div className="icon">
            <FontAwesomeIcon id={openMenu ? 'opened' : 'closed'} icon={ faAngleDoubleUp } size="xl" onClick={()=>{setMenu(!openMenu)}}/>
            <FontAwesomeIcon id={openMenu ? 'closed' : 'opened'} icon={ faAngleDoubleDown } size="xl" onClick={()=>{setMenu(!openMenu)}}/>            
          </div>
        </div>
        
        <div className="vertical"></div>
        <ul className="navlinks"  id={openMenu ? 'open' : 'close'} style={{ backgroundColor: "white"}}>
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
    </div>
    )
}
export default Navbar;