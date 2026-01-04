import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';

function App() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden selection:bg-neo-yellow selection:text-black">
      <JsonLd />
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <WhyChoose />
      <Process />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;