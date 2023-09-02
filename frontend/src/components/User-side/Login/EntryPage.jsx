import React, {useState,useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserAPI } from "../../../API";
import { userActions } from "../../../store/User_auth";
import Axios from "axios";
import "./EntryPage.css";

const EntryPage = () => {
  const [currentView, setCurrentView] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [validForm, setValidForm] = useState("");

  const [selectedImage, setSelectedImage] = useState([]);

  const [Password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const [Error, setError] = useState("");
  const [Username, setUsername] = useState("");

  const [Email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState();

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Form handlers
  const emailHandler = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setValidEmail(isValidEmail(emailValue));
    setValidForm(Password.trim() !== "" && isValidEmail(emailValue));
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setValidPassword(event.target.value.trim() !== "");
    setValidForm(event.target.value.trim() !== "");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const imageHandler = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  // Register to login
  const submitHandlerRegister = (event) => {
    event.preventDefault();
     Axios.post(`${UserAPI}register`, {
      Email,
      Password,
      Username
    }).then((response) => {
      const result = response.data.signup;
      if (result.status) {
        navigate("/login");
      } else {
        setError(result.message);
      }
    });
  };

  // Login to home
  const submitHandlerLogin = (event) => {
    event.preventDefault();
    if (validForm) {
      Axios.post(`${UserAPI}login`, { Email, Password }, { withCredentials: true }).then((response) => {
        const result = response.data.signup;
        if (result.status) {
          console.log(console.cookies);
          dispatch(userActions.userLogin({ name: result.name, token: result.token }));
          navigate("/");
        } else {
          setError(result.message);
        }
      });
    }
  };

 
  useEffect(() => {
    setCurrentView(location.pathname === "/register");
  }, [location]);

  const handleRegisterClick = () => {
    navigate('/register')
  };

  const handleLoginClick = () => {
    navigate('/login')
    setCurrentView(false)
  };



  return (
    <section id="entry-page">
      {currentView ? (
        <form onSubmit={submitHandlerRegister}>
        <h2>Sign Up!</h2>
        <fieldset> 
          <legend>Create Account</legend>
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input type="text" value={Username} onChange={usernameHandler} id="username" required/>
            </li>
            {/* <li>
              <label htmlFor="profilePic">Image :</label>
              <input type="file" accept="image/*" onChange={imageHandler} id="profilePic" required/>
            </li> */}
            <li>
              <label htmlFor="email">Email:</label>
              <input type="email" value={Email} onChange={emailHandler} id="email" required/>
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" value={Password} onChange={passwordHandler} id="password" required/>
            </li>
          </ul>
        </fieldset>
        <button type="submit" disabled={!validForm}>Submit</button>
        <button type="button" onClick={handleLoginClick}>Have an Account?</button>
      </form>
      ) : (
        <form onSubmit={submitHandlerLogin}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" value={Email} onChange={emailHandler} id="email" required/><br />
                  {!validEmail && (
                  <p style={{ color: "red" ,fontSize:"12px"}}>Enter a valid Email!</p>
                )}
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" value={Password} onChange={passwordHandler} id="password" required/><br />
                  {!validPassword && (
                  <p style={{ color: "red", fontSize:"12px"}}>Enter a valid password!</p>
                )}
                </li>
              </ul>
            </fieldset>
            <button type="submit" disabled={!validForm}>Login</button>
            <button type="button" onClick={handleRegisterClick}>Create an Account</button>
          </form>
      )}
    </section>
  );
};

export default EntryPage;
