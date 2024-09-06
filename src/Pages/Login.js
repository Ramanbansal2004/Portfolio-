import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Login.css';
const Login=()=>{
  const [addStyle,setStyle]=useState('member');
    
  
  return(
    <div className="Login">
      <div className='login_container'>
              {/**section1**/}
      <div className="section_1">
        <div className="top_btn" id={addStyle ? 'member' : 'login'}
        onClick={()=>{setStyle('member')}}>
          MEMBER
        </div>
        <div className="seperator">
         </div>
         <div className='top_btn'id={addStyle ? 'login' : 'member'}
        onClick={()=>{setStyle(!addStyle)}}>
           USER
         </div>
      </div>
      {/**section2**/}
      <div className='section_2'>
        <form>
          <div className="field">
          <label className="labelfor"for="username">Username/Email</label>
          <input  name="email" id="username" required="required" className="utextfield" />            
          </div>
          <div className='field'>
          <label className="labelfor" for="password">Password</label>
          <input type="password" name="password" id="password" required="required" className="utextfield" />            
          </div>
          <div className="setAccount">
            <p >Don't have an account? <Link to ="/signup">SignUp</Link></p>
          </div>
      <input type="submit" name="commit" value="LOGIN" className="submit_button" data-disable-with="LOGIN" />

        </form>
      </div>
      </div>

    </div>
    )
}
export default Login;