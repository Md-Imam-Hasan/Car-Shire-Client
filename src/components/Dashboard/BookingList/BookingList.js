import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceCard from '../../SharedComponents/ServiceCard/ServiceCard'

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [bookingList, setBookingList] = useState([])
  useEffect(() => {
    setBookingList([]);
    const url = `https://obscure-coast-14600.herokuapp.com/orders?email=${loggedInUser.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setBookingList(data))
  }, [])
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        {
          !bookingList.length && <div class="spinner-border text-center text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
      </div>
      <div className="row">
        {
          bookingList.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default BookingList;