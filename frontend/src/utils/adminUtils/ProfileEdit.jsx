import React, { Fragment } from 'react';
import AdminNavbar from '../../components/Admin-side/AdminNavbar/AdminNavbar';
import EditUser from '../../components/Admin-side/EditUser/EditUser';

const ProfileEdit = () => {
  return (
    <div>
      <Fragment>
        <AdminNavbar/>
        <EditUser/>
      </Fragment>
    </div>
  );
}

export default ProfileEdit;
