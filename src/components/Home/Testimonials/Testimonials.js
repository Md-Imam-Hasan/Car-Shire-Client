import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css'

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    const url = `https://obscure-coast-14600.herokuapp.com/allReview`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFeedbacks(data))
  }, [])
  return (
    <section className='testimonial'>
      <div className="container">
        <h1 className="mb-5 text-center">What Our Client Say</h1>
        <div className="d-flex justify-content-center">
          {
            !feedbacks.length && <div class="spinner-border text-center text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          }
        </div>
        <div className="row mt-5">
          {
            feedbacks.map(feedback => <TestimonialCard feedback={feedback}></TestimonialCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;