
import React from 'react';
import { Users } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', href: '#home', color: 'hover:bg-neo-blue' },
    { name: 'Services', href: '#services', color: 'hover:bg-neo-green' },
    { name: 'Experience', href: '#experience', color: 'hover:bg-neo-purple' },
    { name: 'Contact', href: '#contact', color: 'hover:bg-neo-yellow' },
    { name: 'Blog', href: '#blog', color: 'hover:bg-neo-pink' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#blog') return; // Placeholder for blog link
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white border-t-4 border-black py-12 bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
            <h3 className="flex items-center justify-center md:justify-start gap-2 font-black text-2xl uppercase tracking-tighter mb-2 group cursor-default">
                <div className="bg-black text-white p-1 rounded-sm group-hover:bg-neo-purple group-hover:text-black transition-colors">
                    <Users className="w-5 h-5 stroke-[3px]" />
                </div>
                <span>DeepthiConnects<span className="text-neo-purple group-hover:text-black transition-colors">.Com</span></span>
            </h3>
            <p className="max-w-sm text-sm font-medium text-gray-600">
                Empowering organizations with strategic HR solutions, talent acquisition expertise, and people-first recruitment.
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 font-bold text-sm uppercase">
            {footerLinks.map((link) => (
                <a 
                    key={link.name}
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href)} 
                    className={`px-3 py-1 border-2 border-transparent hover:border-black transition-all hover:shadow-neo-sm hover:-translate-y-1 hover:-rotate-2 ${link.color}`}
                >
                    {link.name}
                </a>
            ))}
        </div>

        <div className="text-xs font-bold text-gray-400">
            &copy; {new Date().getFullYear()} Deepthi Lakkaraju.
        </div>

      </div>
    </footer>
  );
};

export default Footer;