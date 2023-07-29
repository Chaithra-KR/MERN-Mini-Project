import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header className='navbar'>
        <div className='navbar__title navbar__item'>Blossoms</div>
        <div className='navbar__item'>Login/Profile</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
    </div>
  );
}

export default Navbar;

