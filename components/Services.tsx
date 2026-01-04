
import React from 'react';
import { FileText, Linkedin, Rocket, Scale, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const Services: React.FC = () => {
  const services: (ServiceItem & { color: string })[] = [
    {
      title: "Resume Building",
      icon: <FileText className="w-3 h-3 sm:w-8 sm:h-8" />,
      features: [
        "ATS-friendly, keyword-optimized",
        "Tailored to roles and industries",
        "Focus on achievements & impact",
        "SEO optimized for recruiters"
      ],
      microLine: "Perfect for job seekers and career switchers.",
      color: "bg-neo-blue"
    },
    {
      title: "LinkedIn Optimization",
      icon: <Linkedin className="w-3 h-3 sm:w-8 sm:h-8" />,
      features: [
        "Headline & About section rewrite",
        "Experience & Featured restructuring",
        "Recruiter-friendly branding",
        "Content & networking strategy"
      ],
      microLine: "Turn your LinkedIn into a 24/7 recruiter magnet.",
      color: "bg-neo-pink"
    },
    {
      title: "Startup Recruitment",
      icon: <Rocket className="w-3 h-3 sm:w-8 sm:h-8" />,
      features: [
        "Talent sourcing (IT, Non-IT, Niche)",
        "Freelance, contract & core hires",
        "Role definition & interview flow",
        "Onboarding process design"
      ],
      microLine: "Ideal for founders hiring their first 5-50 employees.",
      color: "bg-neo-purple text-white"
    },
    {
      title: "HR Doc & Compliance",
      icon: <Scale className="w-3 h-3 sm:w-8 sm:h-8" />,
      features: [
        "Offer letters & contracts",
        "HR policies & handbooks",
        "PF/ESI registration support",
        "Labor law compliance basics"
      ],
      microLine: "Keep your HR stack clean, compliant, organized.",
      color: "bg-neo-red text-white"
    }
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
    <section id="services" className="py-8 sm:py-20 bg-neo-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-4 sm:mb-12 text-center">
            <Reveal>
                <h2 className="text-xl sm:text-4xl lg:text-6xl font-black uppercase mb-2 sm:mb-4 inline-block px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black bg-neo-purple text-black shadow-neo-sm sm:shadow-neo hover:-rotate-1 hover:shadow-none transition-all cursor-pointer duration-300">
                Core Services
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-[10px] sm:text-xl font-medium max-w-2xl mx-auto border-2 border-black p-1.5 sm:p-4 bg-neo-yellow shadow-neo-sm hover:-translate-y-1 hover:shadow-none transition-all duration-300 cursor-pointer">
                    No fluff. Just results. Whether you are hiring or getting hired.
                </p>
            </Reveal>
        </div>

        {/* Mobile: 2x2 grid, Desktop: 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
                <div 
                    className="group relative bg-white border-2 sm:border-4 border-black p-2 sm:p-6 shadow-neo-sm sm:shadow-neo hover:shadow-none hover:-translate-y-1 transition-all duration-200 flex flex-col h-full cursor-pointer"
                >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-1.5 sm:mb-5 border-b-2 border-black pb-1.5 sm:pb-3">
                    <h3 className="text-[10px] sm:text-2xl font-bold uppercase leading-tight pr-1 sm:pr-4">{service.title}</h3>
                    <div className={`p-1 sm:p-3 border-2 border-black shadow-neo-sm ${service.color} transition-colors transform duration-300 flex-shrink-0`}>
                        {service.icon}
                    </div>
                </div>

                {/* Features - Hidden on mobile, show on sm+ */}
                <ul className="hidden sm:block space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-2 h-2 bg-black flex-shrink-0 group-hover:bg-neo-purple transition-colors"></span>
                        <span className="font-medium text-gray-800 text-base">{feature}</span>
                    </li>
                    ))}
                </ul>

                {/* Mobile: Show only 2 features */}
                <ul className="sm:hidden space-y-0.5 mb-1.5 flex-grow">
                    {service.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="mr-1 mt-1 w-1 h-1 bg-black flex-shrink-0"></span>
                        <span className="font-medium text-gray-800 text-[8px] leading-tight">{feature}</span>
                    </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="mt-auto">
                    <p className="text-[7px] sm:text-sm font-bold bg-gray-100 border-2 border-black p-1 sm:p-2 group-hover:bg-neo-yellow transition-colors leading-tight">
                        {service.microLine}
                    </p>
                </div>
                </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 sm:mt-12 flex justify-center">
            <Reveal delay={600}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="inline-flex items-center gap-1 sm:gap-3 px-3 sm:px-12 py-2 sm:py-5 bg-neo-yellow text-black border-2 sm:border-4 border-black font-black text-xs sm:text-2xl uppercase tracking-tighter hover:bg-neo-purple hover:text-white hover:shadow-none hover:-translate-y-2 transition-all shadow-neo-sm sm:shadow-neo shadow-black group"
                >
                    Let's Connect <ArrowRight className="w-3 h-3 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
                </a>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Services;
