import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Statistics from '../components/Statistics';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Companies />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Home;
