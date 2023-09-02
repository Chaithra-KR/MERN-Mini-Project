import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/User_auth";
import {UserAPI} from '../../../API';
import Axios from 'axios';
import './Navbar.css';


const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cookies, setCookies, removeCookies] = useCookies(["jwt"]);

  const User = useSelector((state) => state.user.userToken);
  const [userData, setUserData] = useState({});
  const [name,setName] = useState("no User")

  // Navigate to the login page
  const handleLoginClick = () => {  
    navigate('/login');
  };


  useEffect(() => {
    Axios.get(`${UserAPI}profile`, { withCredentials: true })
      .then((response) => {
        setUserData(response.data.user);
        setName(response.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Logout = () => {
    removeCookies("jwt");
    dispatch(userActions.userLogout());
    navigate("/");
  };

  return (
    <div>
      <header className='navbar'>
        <div className='navbar__title navbar__item'>Blossoms</div>
        <div className='navbar__item'>
          { User? 
          (<scan>
          <a style={{color:"white"}} onClick={()=>{navigate("/profile")}}>hai,{},My Profile</a>
          <a className='navbar__item' onClick={Logout}>Logout</a>
          </scan>
          )
          :
          (<a onClick={handleLoginClick}>Hello, SignUp</a>)}
          </div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
    </div>
  );
}

export default Navbar;

