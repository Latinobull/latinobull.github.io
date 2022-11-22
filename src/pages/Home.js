import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
