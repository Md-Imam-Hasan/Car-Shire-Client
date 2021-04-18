import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
  const location = useLocation()
  console.log(location);
  const { serviceTitle, description, price, imageURL, _id, status } = service;
  return (
    <div className='col-md-4 col-12'>
      <div className="card service-card">
        <div className="card-image">
          <img src={imageURL} alt="" className="img-fluid" />
          <div className="service-charge d-flex justify-content-center align-items-center">${price}</div>
          {
            location.pathname === '/dashboard/booking-list' ? <div className={`service-status d-flex justify-content-center align-items-center color-${status}`}>{status}</div> : null
          }
        </div>
        <div className="p-4 d-flex">
          <div className="me-3 d-flex justify-content-center">
            <div className="black-div"></div>
            <div className="color-div"></div>
          </div>
          <h6>{serviceTitle}</h6>
        </div>
        {
          location.pathname === "/" || location.pathname === "/home" ? <Link to={'/dashboard/place-order/' + _id}>
            <div className="service-details p-4">
              <div className="service-details-header mb-3">
                <div className="d-flex">
                  <div className="me-3 d-flex justify-content-center">
                    <div className="white-div"></div>
                    <div className="white-div"></div>
                  </div>
                  <h5>{serviceTitle}</h5>
                </div>
              </div>
              <div className="details-para mb-5">
                <p>{description}</p>
              </div>
              <button className="btn service-details-btn">Get Service</button>
            </div>
          </Link> : null
        }
      </div>
    </div>
  );
};

export default ServiceCard;