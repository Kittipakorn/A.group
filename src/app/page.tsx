"use client";
// pages/index.js
import { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Messenger from './components/messenger';
import Hero from './pages/hero';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
// import Testimonials from './pages/testimonials';
import Contact from './pages/contact';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <Messenger/>
      <Header />
      <Hero />
      <Services />
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer />
    </>
  );
}