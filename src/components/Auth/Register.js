import React from 'react';
import './Auth.css';

function Register() {
  return (
    <div className="register">
        <form className="register_form">
            <div><input type="text" name="username" required placeholder="Username"/></div>
            <div><input type="password" name="password" required placeholder="Password"/></div>
            <input type="password" name="password" required placeholder="Confirm Password"/>
        </form>
    </div>
  );
}

export default Register;