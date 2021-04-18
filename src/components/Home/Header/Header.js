import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <NavBar></NavBar>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="text-white text-center moto">
          <h1 className='mt-5 h1'><b>THE BEST CAR REPAIR SERVICE</b><span className='span'></span></h1>
          <h2 className='mt-5 h2'><b>WE RAPAIR WITH LOVE SINCE 2001</b><span className='span'></span></h2>
        </div>
      </div>
    </div>
  );
};

export default Header;