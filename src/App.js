import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/Home/HomePage/HomePage';
import Login from './components/Login/Login';
import NavBar from './components/Home/Navbar/Navbar';
import Admin from './components/Dashboard/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    success: false
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <NavBar></NavBar>
            <Login />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Admin />
          </PrivateRoute>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
