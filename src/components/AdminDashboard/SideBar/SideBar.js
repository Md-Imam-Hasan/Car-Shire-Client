import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faList,
  faPlus,
  faThLarge
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';

// <FontAwesomeIcon icon={faUserPlus} />

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <Link className="d-flex justify-content-center" to="/">
        <img src={logo} alt="" className="img-fluid logo my-3" />
      </Link>
      <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to={"/dashboard/order-list" || "/admin"}>
        <FontAwesomeIcon icon={faList} className=' icon' />
        <h6>&nbsp; Order List</h6>
      </NavLink>
      <NavLink activeClassName='active' className=' admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/add-services">
        <FontAwesomeIcon icon={faPlus} className=' icon' />
        <h6>&nbsp; Add Services</h6>
      </NavLink>
      <NavLink activeClassName='active' className=' admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/make-admin">
        <FontAwesomeIcon icon={faUserPlus} className=' icon' />
        <h6>&nbsp; Make Admin</h6>
      </NavLink>
      <NavLink activeClassName='active' className='admin-option d-flex px-3 px-sm-5 py-3' to="/dashboard/manage-services">
        <FontAwesomeIcon icon={faThLarge} className=' icon' />
        <h6>&nbsp; Manage Services</h6>
      </NavLink>
    </div>
  );
};

export default Sidebar;