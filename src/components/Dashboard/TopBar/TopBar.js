import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import './TopBar.css'

const TopBar = () => {
  const location = useLocation()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    fetch('https://obscure-coast-14600.herokuapp.com/admin?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser])
  return (
    <nav class="topBar navbar navbar-expand-lg dark-bg">
      <div class="container">
        <ul class="navbar-nav d-flex justify-content-between">
          <li className="nav-item me-5">
            {
              location.pathname === '/dashboard' && <Link className="nav-link mt-1 page-title" to="/dashboard/order-list">
                {
                  isAdmin ? <b>Order List</b> : <b>Booking List</b>}
              </Link>
            }
            {
              location.pathname === '/dashboard/order-list' && <Link className="nav-link mt-1 page-title" to="/dashboard/order-list"><b>Order List</b></Link>
            }
            {
              location.pathname === '/dashboard/add-services' && <Link className="nav-link mt-1 page-title" to="/dashboard/add-services"><b>Add Services</b></Link>
            }
            {
              location.pathname === '/dashboard/make-admin' && <Link className="nav-link mt-1 page-title" to="/dashboard/make-admin"><b>Make Admin</b></Link>
            }
            {
              location.pathname === '/dashboard/manage-services' && <Link className="nav-link mt-1 page-title" to="/dashboard/manage-services"><b>Manage Services</b></Link>
            }
            {
              location.pathname.slice(0, 22) === '/dashboard/place-order' && <Link className="nav-link mt-1 page-title" to="/dashboard/place-order"><b>Place Order</b></Link>
            }
            {
              location.pathname === '/dashboard/review' && <Link className="nav-link mt-1 page-title" to="/dashboard/review"><b>Review</b></Link>
            }
            {
              location.pathname === '/dashboard/booking-list' && <Link className="nav-link mt-1 page-title" to="/dashboard/booking-list"><b>Booking List</b></Link>
            }
          </li>
          {loggedInUser?.success && <p className="mt-3 text-danger text-uppercase"><b>{loggedInUser.userName}</b></p>}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;