import React from 'react';
import Header from '../components/Home/header';
import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import Highlights from '../components/Home/Highlights';


const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <Hero />
      <Highlights />
      <Footer />
    </div>
    </>
  );
};

export default Home;