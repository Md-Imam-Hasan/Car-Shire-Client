import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faList,
  faPlus,
  faThLarge,
  faShoppingCart,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch('https://obscure-coast-14600.herokuapp.com/admin?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser])
  return (
    <div className='side-bar'>
      <Link className="d-flex justify-content-center" to="/">
        <img src={logo} alt="" className="img-fluid logo my-3" />
      </Link>
      {
        isAdmin ? <div>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to={"/dashboard/order-list"}>
            <FontAwesomeIcon icon={faList} className=' icon' />
            <h6>&nbsp; Order List</h6>
          </NavLink>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/add-services">
            <FontAwesomeIcon icon={faPlus} className=' icon' />
            <h6>&nbsp; Add Services</h6>
          </NavLink>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/make-admin">
            <FontAwesomeIcon icon={faUserPlus} className=' icon' />
            <h6>&nbsp; Make Admin</h6>
          </NavLink>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/manage-services">
            <FontAwesomeIcon icon={faThLarge} className=' icon' />
            <h6>&nbsp; Manage Services</h6>
          </NavLink>
        </div> : <div>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/place-order">
            <FontAwesomeIcon icon={faShoppingCart} className=' icon' />
            <h6>&nbsp; Place Order</h6>
          </NavLink>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/booking-list">
            <FontAwesomeIcon icon={faList} className=' icon' />
            <h6>&nbsp; Booking List</h6>
          </NavLink>
          <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/review">
            <FontAwesomeIcon icon={faCommentAlt} className=' icon' />
            <h6>&nbsp; Review</h6>
          </NavLink>
        </div>
      }

    </div>
  );
};

export default Sidebar;