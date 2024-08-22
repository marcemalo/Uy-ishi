import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import log from '../../img/logo.svg'


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
          
              if(response.status === 200){
                Toastify({
                  text: "User registered sucssesufully",
                  duration: 3000,
                  destination: "https://github.com/apvarun/toastify-js",
                  newWindow: true,
                  close: true,
                  gravity: "top", // `top` or `bottom`
                  position: "left", // `left`, `center` or `right`
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                  style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                  },
                  onClick: function(){} // Callback after click
                }).showToast();
                 navigate("/")
              }
            const data = await response.json();
    };

    return (
        <div className='login-form'>
            <img src={log} alt="" />
            <form onSubmit={handleSubmit}>
                <div className='form-login'>
                    <label htmlFor='username'>Username:</label>
                    <input className='input'
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}  
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input className='input'
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}   
                    />
                </div>
                <button className='button' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;