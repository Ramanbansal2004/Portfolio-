import React from 'react';
import '../Styles/SignUp.css';

const SignUp=()=>{
  return(
    <div className="sign-up" >
      <div className="sign-up_container">
      <div className="heading">SIGN UP AS NEW USER</div>
      <div className="content">
        <form>
          <div className="field">
            <label   for ="name">Name</label>
            <input type="text" name="name" id="name" required="required" className="utextfield" />
          </div>
          <div className="field">
             <label for ="email">Email</label>    
            <input type="email" name="email" id="email" required="required" className="utextfield" />          </div>
          <div className="field">
            <label for ="password"> Set Password</label>
            <input type="password" name="password" id="password" required="required" className="utextfield" />
          </div>    
        
          <input type="submit" name="commit" value="SUBMIT" className="submit_button" data-disable-with="SUBMIT" />
        </form>
      </div>        
      </div>

      
      
    </div>
    )
}
export default SignUp;