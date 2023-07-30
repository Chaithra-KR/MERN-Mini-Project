import React, { useState } from 'react';
import './EntryPage.css';


const EntryPage = () => {
  const [currentView, setCurrentView] = useState("signUp");

  const changeView = (view) => {
    setCurrentView(view);
  }

  const renderView = () => {
    switch (currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="gender">Gender :</label>
                  <input type="text" id="gender" required/>
                </li>
                <li>
                  <label htmlFor="dob">Date of Birth:</label>
                  <input type="date" id="dob" required/>
                </li>
                <li>
                  <label htmlFor="profilePic">Image :</label>
                  <input type="file" id="profilePic" required/>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={() => changeView("logIn")}>Have an Account?</button>
          </form>
        );
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
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
            <button type="button" onClick={() => changeView("signUp")}>Create an Account</button>
          </form>
        );
      
      default:
        break;
    }
  }

  return (
    <section id="entry-page">
      {renderView()}
    </section>
  );
}

export default EntryPage;
