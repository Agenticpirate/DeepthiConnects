import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, FileText, Rocket, Mail, Award, Users, Briefcase } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  const marqueeText = "STRATEGIC TALENT SOURCING • RESUME EXPERT • STARTUP HR SOLUTIONS • HIRING & SCALING • ";
  const marqueeItems = Array(4).fill(marqueeText);

  const roles = [
    "Recruitment Lead",
    "Resume Strategist",
    "Startup HR Partner",
    "Sourcing Expert"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Role Switcher - faster timing (4 seconds instead of 9)
    const roleInterval = setInterval(() => {
      setIsRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsRoleVisible(true);
      }, 300);
    }, 4000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(roleInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { count: '5+', label: 'YEARS EXP', icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'bg-neo-yellow' },
    { count: '500+', label: 'PLACED', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'bg-neo-blue' },
    { count: '50+', label: 'CLIENTS', icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'bg-neo-pink' }
  ];

  return (
    <section id="home" className="relative w-full bg-neo-white border-b-4 border-black overflow-hidden flex flex-col bg-pro-grid min-h-[auto] lg:min-h-[850px]">

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 flex-grow w-full relative">
        
        {/* LEFT CONTENT COLUMN */}
        <div className="px-3 sm:px-6 lg:px-12 py-3 sm:py-8 lg:py-12 flex flex-col justify-center border-r-0 lg:border-r-4 border-black relative z-20">
          
          {/* Mobile: Content + Profile side by side */}
          <div className="flex gap-2 lg:gap-0 lg:block items-start">
            {/* Main Content */}
            <div className="flex-1">
              {/* Animated Tags */}
              <Reveal>
                <div className="flex flex-wrap gap-1 lg:gap-3 mb-2 sm:mb-8">
                  {[
                    { text: 'Resume Expert', hoverColor: 'hover:bg-neo-yellow' },
                    { text: 'Recruitment Strategist', hoverColor: 'hover:bg-neo-purple' },
                    { text: 'HR Partner', hoverColor: 'hover:bg-neo-blue' }
                  ].map((tag, i) => (
                    <span 
                      key={tag.text} 
                      className={`px-1.5 py-0.5 lg:px-5 lg:py-2 border-2 lg:border-4 border-black text-[7px] lg:text-sm font-black uppercase tracking-wide lg:tracking-widest shadow-neo-sm hover:-translate-y-1 hover:shadow-none transition-all cursor-pointer bg-white ${tag.hoverColor}`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-[22px] sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-2 sm:mb-8 text-black tracking-tighter uppercase">
                  <span className="block">HIRE SMARTER.</span>
                  <span className="block"><span className="bg-neo-yellow px-1 sm:px-3 py-0.5 sm:py-1 inline-block -rotate-2">GET HIRED</span> FASTER.</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-[9px] sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-10 max-w-xl leading-snug border-l-2 sm:border-l-8 border-black pl-2 sm:pl-6">
                  Strategic HR, recruitment, and resume solutions that deliver results. <span className="text-neo-purple font-black">Let's build your success story together.</span>
                </p>
              </Reveal>
            </div>

            {/* Mobile Profile Card - Neo Brutalist Style */}
            <div className="lg:hidden flex-shrink-0 w-[105px] flex flex-col items-center">
              <Reveal delay={150}>
                <div className="relative bg-white border-2 border-black p-1.5 shadow-neo-sm overflow-hidden">
                  {/* Minimal dot grid pattern - more visible */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 1px, transparent 1px)',
                    backgroundSize: '6px 6px'
                  }}></div>
                  
                  {/* Profile image container */}
                  <div className="relative mb-1.5 z-10">
                    {/* Yellow offset shadow */}
                    <div className="absolute top-1 left-1 w-full h-full bg-neo-yellow border-2 border-black"></div>
                    {/* Profile image */}
                    <div className="w-[90px] h-[90px] bg-white border-2 border-black overflow-hidden relative">
                      <img 
                        src="https://i.ibb.co/0pztFrCq/image.png" 
                        className="w-full h-full object-cover object-top"
                        alt="Deepthi Lakkaraju"
                      />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <div className="text-center border-t-2 border-black pt-1 relative z-10 bg-white">
                    <h3 className="text-[8px] font-black uppercase tracking-tight leading-none">Deepthi</h3>
                    <h3 className="text-[8px] font-black uppercase tracking-tight leading-none">Lakkaraju</h3>
                  </div>
                  
                  {/* Role ticker */}
                  <div className="mt-1 bg-neo-purple border-2 border-black px-1 py-0.5 relative z-10">
                    <p className={`text-[5px] font-black uppercase tracking-wide text-white text-center whitespace-nowrap transition-all duration-300 transform ${isRoleVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}>
                      {roles[roleIndex]}
                    </p>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neo-yellow border-2 border-black z-20"></div>
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-neo-blue border-2 border-black z-20"></div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <div className="flex flex-row gap-2 sm:gap-5 mb-3 sm:mb-14">
              <a 
                href="#contact" 
                onClick={(e) => handleScrollToSection(e, '#contact')}
                className="group relative inline-flex items-center justify-center px-2 sm:px-10 py-1.5 sm:py-5 bg-neo-purple text-white border-2 sm:border-4 border-black font-black text-[8px] sm:text-base uppercase tracking-tight transition-all shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                Upgrade Resume <ArrowRight className="w-2.5 h-2.5 sm:w-5 sm:h-5 ml-1 sm:ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleScrollToSection(e, '#services')}
                className="group relative inline-flex items-center justify-center px-2 sm:px-10 py-1.5 sm:py-5 bg-white text-black border-2 sm:border-4 border-black font-black text-[8px] sm:text-base uppercase tracking-tight transition-all shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-neo-yellow"
              >
                Hire Talent
              </a>
            </div>

            {/* Micro Stats Row */}
            <div className="flex flex-wrap gap-2 sm:gap-8">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-4 group cursor-default">
                  <div className={`w-7 h-7 sm:w-12 sm:h-12 ${badge.color} border-2 sm:border-4 border-black flex items-center justify-center shadow-neo-sm group-hover:rotate-6 transition-transform`}>
                    {badge.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-2xl font-black leading-none">{badge.count}</span>
                    <span className="text-[6px] sm:text-[10px] font-black text-gray-500 uppercase tracking-wide sm:tracking-widest">{badge.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

        {/* RIGHT VISUAL COLUMN - Desktop only */}
        <div className="relative bg-neo-blue border-t-4 lg:border-t-0 border-black hidden lg:flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-hidden">
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 grid grid-cols-4 gap-1 sm:gap-1.5">
            {Array(16).fill(null).map((_, i) => (
              <div key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-teal-700"></div>
            ))}
          </div>

          <div className="relative w-full max-w-[450px] xl:max-w-[480px] flex items-center justify-center">
            <div className="absolute top-5 left-5 w-full h-full bg-neo-purple border-[6px] border-black"></div>
            <div className="relative w-full bg-white border-[6px] border-black p-10 text-center flex flex-col items-center">
              <div className="relative mb-8 group">
                <div className="absolute top-3 left-3 w-full h-full bg-neo-yellow rounded-full border-[5px] border-black"></div>
                <div className="w-44 h-44 xl:w-48 xl:h-48 bg-neo-white rounded-full border-[5px] border-black overflow-hidden relative">
                  <img 
                    src="https://i.ibb.co/0pztFrCq/image.png" 
                    className="w-full h-full object-cover object-top"
                    alt="Deepthi Lakkaraju"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-[0.9]">Deepthi</h3>
                <h3 className="text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-[0.9]">Lakkaraju</h3>
              </div>

              <div className="bg-neo-yellow border-[3px] border-black px-4 py-2 mb-6 w-[260px]">
                <div className="h-5 flex items-center justify-center overflow-hidden">
                  <p className={`text-xs font-black uppercase tracking-[0.15em] text-black whitespace-nowrap transition-all duration-300 transform ${isRoleVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    {roles[roleIndex]}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center w-full">
                {[
                  { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/deepthiconnects/', color: 'bg-neo-blue', ic: 'text-white' },
                  { icon: <FileText className="w-6 h-6" />, href: '#services', color: 'bg-neo-purple', ic: 'text-white' },
                  { icon: <Rocket className="w-6 h-6" />, href: '#experience', color: 'bg-neo-red', ic: 'text-white' },
                  { icon: <Mail className="w-6 h-6" />, href: '#contact', color: 'bg-neo-yellow', ic: 'text-black' }
                ].map((btn, i) => (
                  <a 
                    key={i} 
                    href={btn.href} 
                    onClick={btn.href.startsWith('#') ? (e) => handleScrollToSection(e, btn.href) : undefined}
                    className={`w-14 h-14 rounded-full border-[3px] border-black flex items-center justify-center transition-all hover:scale-110 ${btn.color} ${btn.ic}`}
                  >
                    {btn.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Marquee - Smaller on mobile */}
      <div className="w-full bg-black text-white border-y-2 sm:border-y-4 border-black py-2 sm:py-5 overflow-hidden mt-auto relative z-30">
        <div className="marquee-container">
            <div className="marquee-content will-change-transform">
                {marqueeItems.map((text, i) => (
                    <span key={i} className="text-[10px] sm:text-lg lg:text-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] whitespace-nowrap">
                        {text}
                    </span>
                ))}
            </div>
            <div className="marquee-content will-change-transform" aria-hidden="true">
                 {marqueeItems.map((text, i) => (
                    <span key={i} className="text-[10px] sm:text-lg lg:text-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] whitespace-nowrap">
                        {text}
                    </span>
                ))}
            </div>
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Hero;
