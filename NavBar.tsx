import React, { useState } from 'react';
import { Menu, X, ArrowRight, Users } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', hoverColor: 'hover:bg-neo-blue' },
    { name: 'About', href: '#about', hoverColor: 'hover:bg-neo-pink' },
    { name: 'Services', href: '#services', hoverColor: 'hover:bg-neo-green' },
    { name: 'Experience', href: '#experience', hoverColor: 'hover:bg-neo-purple' },
    { name: 'FAQ', href: '#faq', hoverColor: 'hover:bg-neo-red' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="group flex items-center gap-2 font-black text-xl md:text-2xl tracking-tighter uppercase border-2 border-black bg-neo-yellow px-3 py-1 shadow-neo-sm transform hover:-translate-y-0.5 transition-transform"
            >
              <div className="bg-black text-white p-1 rounded-sm group-hover:bg-neo-purple group-hover:text-black transition-colors">
                 <Users className="w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
              </div>
              <span>DeepthiConnects<span className="text-neo-purple group-hover:text-black transition-colors">.Com</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-black font-bold px-3 py-1 transition-all uppercase text-sm tracking-wide border-2 border-transparent hover:border-black hover:text-black hover:shadow-neo-sm hover:-translate-y-1 hover:-rotate-2 ${link.hoverColor}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center px-6 py-2 border-2 border-black text-sm font-bold bg-neo-purple text-white hover:bg-neo-green hover:text-black hover:shadow-neo hover:-translate-y-1 hover:-translate-x-1 transition-all shadow-neo-sm group"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 border-2 border-black bg-white hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`block px-3 py-4 text-base font-bold text-black border-b-2 border-black last:border-b-0 uppercase transition-colors ${link.hoverColor}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center mt-4 px-5 py-3 border-2 border-black bg-neo-purple text-white font-bold shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-neo-green hover:text-black transition-colors"
            >
              Book Strategy Call <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;