import React from 'react';
import './ChooseUs.css';
import {
  faCogs,
  faTools,
  faBiohazard,
  faStickyNote
} from '@fortawesome/free-solid-svg-icons';
import FeatureCard from '../FeatureCard/FeatureCard';

const features = [
  {
    icon: faCogs,
    title: "Repair and Inspection",
    sub: "Customers car repairing"
  },
  {
    icon: faTools,
    title: "Racing and speed test",
    sub: "We improve your car quality"
  },
  {
    icon: faStickyNote,
    title: "Car security inspections",
    sub: "We care about your security"
  },
  {
    icon: faBiohazard,
    title: "Testing the car quality",
    sub: "Customers car quality test"
  }
]

const ChooseUs = () => {
  return (
    <section className='choose-us my-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-12">
            <div className="title-dialogue">
              <h2>Why you should choose us?</h2>
              <h4 className='brand-color'>Take a look at our quality features</h4>
            </div>
            <div >
              <p className="choose-us-discription mt-4 ">Our most popular service is our Virtual Receptionist. We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss that important call that could be the start of an exciting new business opportunity, so let us answer it for you.</p>
            </div>
          </div>
          <div className="col-md-7 col-12">
            <div className="d-flex justify-content-center">
              <div className="row">
                {
                  features.map(feature => <FeatureCard feature={feature}></FeatureCard>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;