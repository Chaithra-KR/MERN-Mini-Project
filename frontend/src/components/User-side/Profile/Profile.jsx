import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {UserAPI} from '../../../API';
import Axios from 'axios';
import './Profile.css';


const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();
    const User = useSelector((state) => state.user.userToken);
    const [userData, setUserData] = useState({});

    if (!User) {
        navigate('/')
    }

    useEffect(() => {
        Axios.get(`${UserAPI}profile`, { withCredentials: true })
          .then((response) => {
            setUserData(response.data.user);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

  return (
        <div className='hey'>
        <div class="profile-card">  
        <div class="profile-card-header">
            <div class="profile-image"></div>
            <div class="profile-info">
                <div className="upload-button">
                    <input type="file" id="fileInput" onChange={handleFileChange} />
                    <label htmlFor="fileInput" className='changePic'>
                        Change Profile Picture
                    </label>
                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                </div>
                <h3 class="profile-name">hai,{User ? userData.username : ""}</h3>
                <p class="profile-desc">this is you about bow!</p>
                <div class="profile-details">
                <label>Email:</label><span>helo@gmail</span><br />
                <label>DOB:</label><span>34/26/3009</span><br />
                <label>Gender:</label><span>female</span><br />
                </div>
            </div>
        </div>
        </div>
        </div>
  );
};

export default Profile;
