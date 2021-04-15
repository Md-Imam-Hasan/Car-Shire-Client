import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/Home/HomePage/HomePage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    success: false
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
