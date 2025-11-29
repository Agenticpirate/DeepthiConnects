import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
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
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Sticky CTA for Mobile (Optional, enhances conversion) */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, '#contact')}
          className="block px-6 py-3 bg-neo-black text-white font-bold border-2 border-white shadow-lg uppercase text-sm hover:bg-neo-pink transition-colors animate-pulse-fast"
        >
            Book Call
        </a>
      </div>
    </main>
  );
}

export default App;