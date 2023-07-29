import React, { useState } from 'react';
import './Profile.css';


const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

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
                        Change pic
                    </label>
                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                </div>
                <h3 class="profile-name">username</h3>
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
