import { useEffect, useState, useRef } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Suppliers from './sections/Suppliers';
import Contact from './sections/Contact';
import QuoteForm from './sections/QuoteForm';
import Footer from './sections/Footer';
import './App.css';


function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white overflow-x-hidden">
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Suppliers />
        <Contact />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;