import React from 'react';
import './Admin.css'
import { Route, Switch } from 'react-router';
import Sidebar from '../SideBar/SideBar';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Admin = () => {
  return (
    <div className='row admin'>
      <div className="col-sm-3 col-4 bg-dark p-0 text-light">
        <Sidebar></Sidebar>
      </div>
      <div className="col-sm-9 col-8 p-0">
        <div className="container">
          <Switch>
            <Route path='/dashboard/add-services'>
              <AddServices />
            </Route>
            <Route path='/dashboard/make-admin'>
              <MakeAdmin />
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