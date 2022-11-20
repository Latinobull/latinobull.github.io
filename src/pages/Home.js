import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
