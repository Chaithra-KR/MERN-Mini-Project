import React from 'react';
import './EditUser.css'

const EditUser = () => {
    
    return (
      <div className='frame'>
      <form>
            <h2>Edit Profile</h2>
            <fieldset>
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
              </ul>
            </fieldset>
            <button>Submit</button>
          </form>
      </div>
    );
}

export default EditUser;
