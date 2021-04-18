import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className='container'>
          <Link className="navbar-brand text-center" to="/">
            <h3 className='m-0 brand-color website-name'>CARSHIRE</h3>
            <small className='business'>CAR REPAIR SERVICE</small>
          </Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ms-auto navbar-nav">
              <li className="nav-item me-5">
                <Link className="nav-link" to="/home"><b>Home</b></Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/dashboard"><b>Dashboard</b></Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to=""><b>Deals</b></Link>
              </li>
            </ul>
            {!loggedInUser?.success ? <Link to='/login'>
              <button className='btn btn-outline-danger ms-md-5'>Login</button>
            </Link> : <p className="mt-3 text-danger text-uppercase"><b>{loggedInUser.userName}</b></p>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;