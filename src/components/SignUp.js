import React from 'react';
import '../Styles/SignUp.css';
import logook from '../assets/Logok.png';
import {Link} from 'react-router-dom';
const SignUp=()=>{
  return(
    <div className="Login">
      <div className="loginWrapper">
          <div className="loginBox">
            <div className="Logos">    
              <img  className="img_1" src   ={logook}/>
              <p className="Name">Easy Buy</p>
            </div>
            <input placeholder="Name" className="loginInput" name="username"/>
            <input placeholder="Email" className="loginInput" name="username"/>
            <input placeholder="Password" className="loginInput" name="password"/>
            <input placeholder="Confirm Password" className="loginInput" name="password"/>
            <button className="loginButton"><a className="link">Sign Up</a></button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
          </div>
        </div>
    </div>
    )
}
export default SignUp;