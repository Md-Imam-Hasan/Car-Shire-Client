import React from 'react';
import './Admin.css'
import { Route, Switch } from 'react-router';
import Sidebar from '../SideBar/SideBar';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import TopBar from '../TopBar/TopBar';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Review from '../Review/Review';
import BookingList from '../BookingList/BookingList';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
  return (
    <div className='row admin'>
      <div className="col-sm-3 col-4 dark-bg p-0 text-light">
        <Sidebar></Sidebar>
      </div>
      <div className="col-sm-9 col-8 p-0">
        <TopBar></TopBar>
        <div className="container">
          <Switch>
            <Route path='/dashboard/add-services'>
              <AddServices />
            </Route>
            <Route path='/dashboard/make-admin'>
              <MakeAdmin />
            </Route>
            <Route path='/dashboard/place-order/:id'>
              <PlaceOrder />
            </Route>
            <Route path='/dashboard/review'>
              <Review />
            </Route>
            <Route path='/dashboard/booking-list'>
              <BookingList />
            </Route>
            <Route path='/dashboard/order-list'>
              <OrderList />
            </Route>
            {/* <Route path='/admin/manage-books'>
              <ManageBooks></ManageBooks>
            </Route> */}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;