import React, { Fragment } from 'react';
import Login from '../../components/Admin-side/Login/Login';
import Navbar from '../../components/User-side/Navbar/Navbar';

const AdminLogin = () => {
  return (
        <Fragment>
            <Navbar/>
            <Login/>
        </Fragment>
  );
}

export default AdminLogin;
