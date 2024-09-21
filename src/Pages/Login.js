import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Login.css';
import logook from '../assets/Logok.png';
const Login=()=>{
  const [addStyle,setStyle]=useState('member');
    
  
  return(
    <div className="Login">
      <div className="loginWrapper">
          <div className="loginBox">
            <div className="Logos">    
              <img  className="img_1" src   ={logook}/>
              <p className="Name">Easy Buy</p>
            </div>
            <input placeholder="Email" className="loginInput" name="username"/>
            <input placeholder="Password" className="loginInput" name="password"/>
            <button className="loginButton"><a className="link">Log In</a></button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <div className="ForgotPassword">
              <p>Forgot Password?</p>
              <Link to="/signup"><p>Sign Up</p></Link>
            </div>
          </div>
        </div>
    </div>
    )
}
export default Login;