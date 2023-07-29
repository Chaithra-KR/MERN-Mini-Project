import React from 'react';
import './Login.css';

const Login = () => {

        return (
          <div className='frame'>
          <form>
            <h2>Admin Login!</h2>
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                
              </ul>
            </fieldset>
            <button>Login</button>
          </form>
          </div>
        );
    
}

export default Login;
