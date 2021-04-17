import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/allService';
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])
  return (
    <section className='services my-5'>
      <div className="container">
        <h1 className='text-center mb-5'>Our Services</h1>
        <div className="row">
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;