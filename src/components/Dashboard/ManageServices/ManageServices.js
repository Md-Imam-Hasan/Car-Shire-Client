import React, { useEffect, useState } from 'react';
import ServiceCard from '../../SharedComponents/ServiceCard/ServiceCard';

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = 'https://obscure-coast-14600.herokuapp.com/allService';
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        {
          !services.length && <div class="spinner-border text-center text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
      </div>
      <div className="row">
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default ManageServices;