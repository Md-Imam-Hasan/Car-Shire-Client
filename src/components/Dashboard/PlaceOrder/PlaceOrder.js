import React, { useContext, useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { UserContext } from '../../../App';
import { useParams } from 'react-router';
import SimpleCardForm from './SimpleCardForm';
import './PlaceOrder.css'

const stripePromise = loadStripe('pk_test_51IeKr8ApY1WzqxQsPnsfVP7aEldqnlxwthaWn7ToI95ReZep9gNLyoXTQxcvnhGYUzBfSNcJwlxYbeRD8LkfT2mI00NwcJUxIS');

const PlaceOrder = () => {
  const [service, setService] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { id } = useParams();
  console.log(service);

  const handlePayment = paymentId => {
    const orderDetails = {
      ...loggedInUser,
      ...service,
      paymentId,
      orderTime: new Date(),
      status: "Pending"
    }
    console.log(orderDetails)

    fetch('https://obscure-coast-14600.herokuapp.com/addOrder', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Your Order Placed Successfully');
        }
      })
  }

  useEffect(() => {
    const url = `https://obscure-coast-14600.herokuapp.com/service/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, [id])
  return (
    <div className="place-order mt-5">
      <div className="col-sm-6 my-4  col-12">
        <input type="text" className='form-control' defaultValue={loggedInUser.userName} placeholder='Your Name' />
      </div>
      <div className="col-sm-6 my-4  col-12">
        <input type="email" className='form-control' defaultValue={loggedInUser.email} placeholder='Enter Email' />
      </div>
      <div className="col-sm-6  my-4 col-12">
        <input type="text" className='form-control' defaultValue={service.serviceTitle} placeholder='Service' />
      </div>
      <div className="col-sm-6  my-4 col-12">
        <Elements stripe={stripePromise}>
          <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
      </div>


    </div >
  );
};

export default PlaceOrder;