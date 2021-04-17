import React from 'react';
import Services from '../../SharedComponents/Services/Services';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import Testimonials from '../Testimonials/Testimonials';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />
      <ChooseUs />
      <Services />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};

export default HomePage;