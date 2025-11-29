
import React from 'react';
import { FileText, Linkedin, Rocket, Scale, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const Services: React.FC = () => {
  const services: (ServiceItem & { hoverColor: string })[] = [
    {
      title: "Professional Resume Building",
      icon: <FileText size={32} />,
      features: [
        "ATS-friendly, keyword-optimized",
        "Tailored to roles and industries",
        "Focus on achievements & impact",
        "SEO optimized for recruiters"
      ],
      microLine: "Perfect for job seekers and career switchers.",
      hoverColor: "group-hover:bg-neo-blue"
    },
    {
      title: "LinkedIn Profile Optimization",
      icon: <Linkedin size={32} />,
      features: [
        "Headline & About section rewrite",
        "Experience & Featured restructuring",
        "Recruiter-friendly branding",
        "Content & networking strategy"
      ],
      microLine: "Turn your LinkedIn into a 24/7 recruiter magnet.",
      hoverColor: "group-hover:bg-neo-pink"
    },
    {
      title: "Startup Recruitment Support",
      icon: <Rocket size={32} />,
      features: [
        "Talent sourcing (IT, Non-IT, Niche)",
        "Freelance, contract & core hires",
        "Role definition & interview flow",
        "Onboarding process design"
      ],
      microLine: "Ideal for founders hiring their first 5-50 employees.",
      hoverColor: "group-hover:bg-neo-green"
    },
    {
      title: "HR Doc & Compliance",
      icon: <Scale size={32} />,
      features: [
        "Offer letters & contracts",
        "HR policies & handbooks",
        "PF/ESI registration support",
        "Labor law compliance basics"
      ],
      microLine: "Keep your HR stack clean, compliant, organized.",
      hoverColor: "group-hover:bg-neo-red"
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
    <section id="services" className="py-20 bg-neo-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
            <Reveal>
                <h2 className="text-4xl lg:text-6xl font-black uppercase mb-4 inline-block px-4 py-2 border-4 border-transparent hover:border-black hover:bg-neo-green hover:shadow-neo hover:-rotate-1 transition-all cursor-default duration-300">
                Core Services
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-xl font-medium max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-neo-sm hover:bg-neo-yellow hover:shadow-neo hover:-translate-y-1 transition-all duration-300 cursor-default">
                    No fluff. Just results. Whether you are hiring or getting hired.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
                <div 
                    className="group relative bg-white border-4 border-black p-6 hover:shadow-neo hover:-translate-y-2 transition-all duration-200 flex flex-col h-full"
                >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-5 border-b-2 border-black pb-3">
                    <h3 className="text-2xl font-bold uppercase leading-tight pr-4">{service.title}</h3>
                    <div className={`p-3 bg-neo-yellow border-2 border-black shadow-neo-sm ${service.hoverColor} group-hover:text-white transition-colors group-hover:rotate-6 transform duration-300`}>
                        {service.icon}
                    </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-2 h-2 bg-black flex-shrink-0 group-hover:bg-neo-purple transition-colors"></span>
                        <span className="font-medium text-gray-800">{feature}</span>
                    </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="mt-auto">
                    <p className="text-sm font-bold bg-gray-100 border-2 border-black p-2 mb-2 group-hover:bg-neo-yellow transition-colors">
                        {service.microLine}
                    </p>
                </div>
                </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <Reveal delay={600}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="block px-8 py-4 bg-neo-blue text-black border-2 border-black font-bold text-lg hover:bg-neo-purple hover:text-white hover:shadow-neo hover:-skew-x-6 transition-all shadow-neo-sm text-center"
                >
                    View Packages & Pricing
                </a>
            </Reveal>
            <Reveal delay={700}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="block px-8 py-4 bg-white text-black border-2 border-black font-bold text-lg hover:bg-neo-red hover:text-white hover:shadow-neo hover:rotate-2 transition-all shadow-neo-sm flex items-center justify-center gap-2"
                >
                    Request Custom Solution <ArrowRight size={20}/>
                </a>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Services;