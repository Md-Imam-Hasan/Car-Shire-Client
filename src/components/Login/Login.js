import React, { useContext } from 'react';
import './Login.css';
import GoogleIcon from '../../images/googleicon.png'
import { handleGoogleSignIn, initializeFirebase } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

initializeFirebase();

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        setLoggedInUser(res);
        history.replace(from);
      })
  }

  return (
    <div className="login">
      <div className='d-flex justify-content-center '>
        <div className='text-center login-card card p-5'>
          <div className="d-flex justify-content-center my-4">
            <Link className="navbar-brand text-center" to="/">
              <h3 className='m-0 brand-color website-name'>CARSHIRE</h3>
              <small className='business text-dark'>CAR REPAIR SERVICE</small>
            </Link>
          </div>
          <h2 className='my-4'>Login With</h2>
          <button className='btn btn-block btn-customise d-flex justify-content-center align-items-center mb-4 mx-4' onClick={googleSignIn}> <img src={GoogleIcon} alt="" /> Continue with Google </button>
        </div>
      </div>
      <div className="bg-lines">
        <div className="bg-line-color-1"></div>
        <div className="bg-line-black"></div>
        <div className="bg-line-color-2"></div>
      </div>
    </div>
  );
};

export default Login;