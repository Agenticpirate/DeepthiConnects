
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', hoverColor: 'hover:bg-neo-blue' },
    { name: 'ABOUT', href: '#about', hoverColor: 'hover:bg-neo-pink' },
    { name: 'SERVICES', href: '#services', hoverColor: 'hover:bg-neo-green' },
    { name: 'EXPERIENCE', href: '#experience', hoverColor: 'hover:bg-neo-purple' },
    { name: 'BLOG', href: '#blog', hoverColor: 'hover:bg-neo-yellow' },
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
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-4 border-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Professional D.C. Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="group flex items-center gap-2 md:gap-3 transition-all"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-neo-yellow flex items-center justify-center border-4 border-black transition-all group-hover:bg-black group-hover:shadow-neo-sm group-hover:-translate-y-0.5">
                <span className="text-black group-hover:text-white font-black text-xl md:text-2xl leading-none select-none tracking-tighter">
                  D<span className="text-neo-purple group-hover:text-neo-yellow">C</span>
                </span>
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-black group-hover:bg-white"></div>
                <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-black group-hover:bg-white"></div>
              </div>

              <div className="flex flex-col justify-center border-l-2 border-black pl-3 py-0.5 md:py-1">
                <span className="text-lg md:text-2xl font-black leading-none tracking-tighter uppercase text-black">
                  DEEPTHI <span className="text-neo-purple group-hover:text-neo-blue transition-colors">CONNECTS</span>
                </span>
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-gray-500 mt-0.5 md:mt-1 flex items-center gap-1.5 md:gap-2">
                  <span className="w-1.5 md:w-2 h-0.5 bg-neo-yellow"></span>
                  STRATEGIC HR PARTNER
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-black font-black px-3 py-1.5 border-4 border-black transition-all uppercase text-[11px] xl:text-xs tracking-widest cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 bg-white ${link.hoverColor}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center px-4 xl:px-6 py-2 border-4 border-black text-[11px] xl:text-xs font-black bg-neo-purple text-white hover:bg-black transition-all uppercase tracking-widest shadow-neo hover:shadow-none hover:translate-y-1"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 border-4 border-black bg-white hover:bg-neo-yellow focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Compact & Professional */}
      {isOpen && (
        <div className="lg:hidden border-t-4 border-black bg-white absolute top-full left-0 w-full shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4">
            {/* Navigation Grid - 2 columns for compact layout */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`flex items-center justify-center px-3 py-2.5 text-center text-xs font-black text-black border-2 border-black uppercase transition-all bg-white ${link.hoverColor} active:scale-95`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center px-4 py-3 border-2 border-black bg-neo-purple text-white font-black uppercase text-sm tracking-wider shadow-neo-sm active:shadow-none active:translate-y-0.5 transition-all"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
