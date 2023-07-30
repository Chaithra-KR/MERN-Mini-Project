import React, { Fragment } from 'react';
import UserManaging from '../../components/Admin-side/userManagement/UserManaging';
import AdminNavbar from '../../components/Admin-side/AdminNavbar/AdminNavbar';


const UserManagement = () => {
  return (
    <Fragment>
      <AdminNavbar/>
      <UserManaging/>
    </Fragment>
  );
}

export default UserManagement;
