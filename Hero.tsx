
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Linkedin, FileText, Rocket, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  const marqueeText = "STRATEGIC TALENT SOURCING • RESUME EXPERT • STARTUP HR SOLUTIONS • HIRING & SCALING • ";
  const marqueeItems = Array(4).fill(marqueeText);

  // Animation logic for the role text cycling
  const roles = [
    "Recruitment Lead & Resume Strategist",
    "Strategic Talent Sourcing Expert",
    "Startup HR Solutions Partner",
    "ATS Optimized Resume Writer",
    "LinkedIn Branding Specialist"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsRoleVisible(true);
      }, 500); // Wait for fade out
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="relative w-full bg-neo-white border-b-4 border-black overflow-hidden flex flex-col bg-pro-grid">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 flex-grow">
        
        {/* Left Content */}
        <div className="px-6 py-12 lg:py-20 flex flex-col justify-center border-r-0 lg:border-r-4 border-black relative z-10">
          
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { text: 'Resume Expert', color: 'hover:bg-neo-green', rotate: 'hover:-rotate-2' },
                { text: 'Startup HR Partner', color: 'hover:bg-neo-yellow', rotate: 'hover:rotate-2' },
                { text: 'Strategic Talent Sourcing', color: 'hover:bg-neo-blue', rotate: 'hover:-rotate-1' }
              ].map((tag) => (
                <span 
                  key={tag.text} 
                  className={`px-3 py-1 bg-white border-2 border-black text-xs font-bold uppercase tracking-wider shadow-neo-sm transition-all duration-200 cursor-default hover:shadow-neo hover:-translate-y-1 ${tag.color} ${tag.rotate}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-none mb-5 text-black">
              HIRE SMARTER.<br />
              <span className="bg-neo-yellow px-2 inline-block transform -rotate-1">GET HIRED</span><br />
              FASTER.
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-lg font-medium text-gray-800 mb-6 max-w-lg leading-relaxed border-l-4 border-neo-purple pl-4">
              Strategic HR, recruitment, and resume solutions by <span className="font-bold underline decoration-4 decoration-neo-purple">Deepthi Lakkaraju</span>.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-6 py-3 bg-neo-purple text-white border-2 border-black font-bold text-lg transition-all duration-200 shadow-neo flex items-center justify-center gap-2 hover:bg-neo-pink hover:text-white hover:shadow-neo-lg hover:-translate-y-1 hover:-translate-x-1"
              >
                Get My Resume Revamped <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-6 py-3 bg-white text-black border-2 border-black font-bold text-lg transition-all duration-200 shadow-neo flex items-center justify-center hover:bg-neo-blue hover:shadow-neo-lg hover:-translate-y-1 hover:scale-[1.05]"
              >
                Hire Talent for My Startup
              </a>
            </div>

            <div 
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border-2 border-black p-2 w-fit shadow-neo-sm transition-all duration-200 hover:bg-neo-yellow hover:text-black hover:shadow-neo hover:-translate-y-1 hover:rotate-2 cursor-default group"
            >
              <CheckCircle2 className="text-black group-hover:text-black transition-colors" size={16} />
              Trusted by professionals across IT, non-IT & niche roles.
            </div>
          </Reveal>
        </div>

        {/* Right Visual */}
        <div className="relative bg-neo-blue border-t-4 lg:border-t-0 border-black flex items-center justify-center p-8 lg:p-0 min-h-[450px]">
          {/* Abstract Geometric Composition */}
          <div className="relative w-72 h-auto lg:w-[420px] animate-float">
             {/* Back Square */}
             <div className="absolute top-5 left-5 w-full h-full bg-neo-purple border-4 border-black"></div>
             {/* Middle Square */}
             <div className="absolute top-0 left-0 w-full h-full bg-neo-yellow border-4 border-black transform -translate-x-3 -translate-y-3"></div>
             {/* Front Content Container */}
             <div className="relative bg-white border-4 border-black transform -translate-x-6 -translate-y-6 flex flex-col items-center justify-center p-6 text-center shadow-neo-lg">
                
                {/* Profile Image Circle */}
                <div className="w-36 h-36 lg:w-40 lg:h-40 bg-neo-white rounded-full border-4 border-black mb-4 overflow-hidden relative shadow-neo-sm flex items-center justify-center">
                    <img 
                        src="https://i.ibb.co/0pztFrCq/image.png" 
                        onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; 
                            e.currentTarget.onerror = null;
                        }}
                        className="w-full h-full object-cover object-top"
                        alt="Deepthi Lakkaraju"
                    />
                </div>
                
                {/* Name with "Strike" Effect */}
                <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter relative inline-block z-10 mb-2">
                  <span className="relative z-10">Deepthi</span>
                  <br />
                  <span className="relative z-10">Lakkaraju</span>
                  {/* The "Strike" / Highlighter Effect */}
                  <span className="absolute left-0 bottom-2 w-full h-4 bg-neo-green -z-0 transform -rotate-1 opacity-80"></span>
                  <span className="absolute left-0 top-6 w-full h-4 bg-neo-pink -z-0 transform rotate-1 opacity-60"></span>
                </h3>
                
                {/* Animated Role Text */}
                <div className="h-8 flex items-center justify-center w-full mt-1 overflow-hidden px-2 mb-6">
                    <p className={`text-xs lg:text-sm font-black uppercase tracking-wide text-gray-700 transition-all duration-500 transform ${isRoleVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {roles[roleIndex]}
                    </p>
                </div>

                {/* Icons Row - Replaces old lines */}
                <div className="flex gap-4 justify-center w-full">
                    <a href="https://www.linkedin.com/in/deepthiconnects/" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black rounded-full bg-white hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 hover:shadow-neo-sm group" title="LinkedIn">
                        <Linkedin size={20} className="stroke-[2.5px]" />
                    </a>
                    <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="p-3 border-2 border-black rounded-full bg-white hover:bg-neo-green hover:text-black transition-all hover:-translate-y-1 hover:shadow-neo-sm group" title="Services / Resume">
                        <FileText size={20} className="stroke-[2.5px]" />
                    </a>
                    <a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className="p-3 border-2 border-black rounded-full bg-white hover:bg-neo-red hover:text-white transition-all hover:-translate-y-1 hover:shadow-neo-sm group" title="Startup Experience">
                        <Rocket size={20} className="stroke-[2.5px]" />
                    </a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="p-3 border-2 border-black rounded-full bg-white hover:bg-neo-yellow hover:text-black transition-all hover:-translate-y-1 hover:shadow-neo-sm group" title="Contact Me">
                        <Mail size={20} className="stroke-[2.5px]" />
                    </a>
                </div>
             </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute bottom-4 right-4 grid grid-cols-4 gap-1 opacity-50">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Marquee Band */}
      <div className="w-full bg-black text-white border-t-4 border-black py-2 overflow-hidden">
        <div className="marquee-container">
            <div className="marquee-content">
                {marqueeItems.map((text, i) => (
                    <span key={i} className="text-lg font-bold uppercase tracking-widest whitespace-nowrap">
                        {text}
                    </span>
                ))}
            </div>
            {/* Duplicated for seamless loop */}
            <div className="marquee-content" aria-hidden="true">
                 {marqueeItems.map((text, i) => (
                    <span key={i} className="text-lg font-bold uppercase tracking-widest whitespace-nowrap">
                        {text}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
