import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymemtError, setPaymentError] = useState(null);
  const [paymemtSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null)
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className='btn pay-btn mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        paymemtError && <p className="text-danger">{paymemtError}</p>
      }
      {
        paymemtSuccess && <p className="text-success">Your Payment is Successfull</p>
      }
    </div>
  );
};

export default SimpleCardForm