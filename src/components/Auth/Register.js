import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: userName,
      password1: password,
      password2: passwordConfirm
    };

    axios
      .post(`https://mudapp-staging.herokuapp.com/api/registration/`, {
        ...user
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${res.data.key}`;
        props.history.push("/gamemap");
      });
  };

  


  console.log(userName, password, passwordConfirm);

  return (
    <div className='register'>
      <form className='register_form' onSubmit={handleSubmit}>
        <h2>Welcome</h2>
        <div className='input'>
          <input
            className='input-content'
            type='text'
            name='username'
            required
            placeholder='Username'
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>

        <div className='input'>
          <input
            className='input-content'
            type='password'
            name='password'
            required
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className='input'>
          <input
            className='input-content'
            type='password'
            name='password'
            required
            placeholder='Confirm Password'
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
        </div>

        <p>
          Already have an account?{" "}
          <Link to='/login' className='link-wrapper'>
            <span className='redirect_link'>Sign in</span>
          </Link>
        </p>
        <div className='button_wrapper'>
          <button className='register_button' type='submit'>
            Start
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
