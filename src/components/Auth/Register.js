import React, {useState} from 'react';
import './Auth.css';

function Register() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div className="register">
        <form className="register_form">
            <h2>Welcome</h2>
            <div className="input"><input className="input-content" type="text" name="username" required placeholder="Username"/></div>
            <div className="input"><input className="input-content" type="password" name="password" required placeholder="Password"/></div>
            <div className="input"><input className="input-content" type="password" name="password" required placeholder="Confirm Password"/></div>
            <p>Already have an account? <span className="redirect_link">Sign in</span></p>
            <div className="button_wrapper">
              <button className="register_button" type="submit">Start</button>
            </div> 
        </form>
    </div>
  );
}

export default Register;