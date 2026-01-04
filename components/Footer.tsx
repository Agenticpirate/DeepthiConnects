
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', href: '#home', color: 'bg-neo-blue' },
    { name: 'Services', href: '#services', color: 'bg-neo-green' },
    { name: 'Experience', href: '#experience', color: 'bg-neo-purple' },
    { name: 'Blog', href: '#blog', color: 'bg-neo-pink' },
    { name: 'Contact', href: '#contact', color: 'bg-neo-yellow' },
  ];

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
    <footer className="bg-white border-t-4 border-black py-8 md:py-12 bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout: Stacked & Compact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          
          {/* Logo & Description */}
          <div className="text-center md:text-left w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 transition-all mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-neo-yellow flex items-center justify-center border-2 md:border-4 border-black shadow-neo-sm">
                  <span className="text-black font-black text-sm md:text-xl leading-none select-none tracking-tighter">
                    DC
                  </span>
                </div>
                <div className="flex flex-col justify-center border-l-2 border-black pl-2 md:pl-3 py-0.5 md:py-1 text-left">
                  <span className="text-sm md:text-lg font-black leading-none tracking-tighter uppercase text-black">
                    DEEPTHI <span className="text-neo-purple">CONNECTS</span>
                  </span>
                  <span className="text-[6px] md:text-[8px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-gray-500 mt-0.5 md:mt-1">
                    STRATEGIC RECRUITMENT
                  </span>
                </div>
              </div>
              <p className="max-w-xs mx-auto md:mx-0 text-[10px] md:text-sm font-medium text-gray-600 leading-relaxed hidden md:block">
                  Empowering organizations with strategic HR solutions and people-first recruitment.
              </p>
          </div>

          {/* Navigation Links - Horizontal scroll on mobile */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex justify-start md:justify-center gap-2 md:gap-4 font-bold text-[10px] md:text-sm uppercase min-w-max md:min-w-0 md:flex-wrap">
                {footerLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href} 
                        onClick={(e) => handleScroll(e, link.href)} 
                        className={`px-2 py-1 md:px-3 md:py-1 border-2 border-black shadow-neo-sm transition-all hover:shadow-none hover:-translate-y-1 hover:-rotate-2 bg-white text-black whitespace-nowrap ${link.color.replace('bg-', 'hover:bg-')}`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-[9px] md:text-xs font-bold text-gray-400 text-center md:text-right w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-gray-200">
              &copy; {new Date().getFullYear()} Deepthi Lakkaraju
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
