import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function Login(props) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: userName,
      password: password,
    };

    axios.post(`https://mudapp.herokuapp.com/api/login/`, {...user})
      .then(res => {
        console.log(res);
        console.log(res.data);
        props.history.push('/gamemap')
    })

  }

  console.log(userName, password)

  return (
    <div className="register">
        <form className="register_form" onSubmit={handleSubmit}>
            <h2>Welcome</h2>
            <div className="input">
              <input className="input-content" 
              type="text" 
              name="username" required 
              placeholder="Username" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}/>
            </div>

            <div className="input">
              <input className="input-content" 
              type="password" 
              name="password" required 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <p>Don't have an account? <Link to="/" className="link-wrapper"><span className="redirect_link">Sign up</span></Link></p>
            <div className="button_wrapper">
              <button className="register_button" type="submit">Start</button>
            </div> 
        </form>
    </div>
  );
}

export default Login;