import React from 'react';
import person1 from '../../../images/person1.jpg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css'
const feedbacks = [
  {
    name: "John Doe",
    image: person1,
    discription: "We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.",
    rate: 5
  },
  {
    name: "John Doe",
    image: person1,
    discription: "We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.",
    rate: 5
  },
  {
    name: "John Doe",
    image: person1,
    discription: "We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.",
    rate: 5
  }
]

const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className="container">
        <h1 className="mb-5 text-center">What Our Client Say</h1>
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