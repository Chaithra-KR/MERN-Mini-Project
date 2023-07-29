import React, { Fragment } from 'react';
import Navbar from '../../components/User-side/Navbar/Navbar';
import Profile from '../../components/User-side/Profile/Profile';


const UserProfile = () => {
  return (
        <Fragment>
            <Navbar/>
            <Profile/>
        </Fragment>
  );
}

export default UserProfile;
