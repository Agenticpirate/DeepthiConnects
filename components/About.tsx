import React, { useState, useEffect } from 'react';
import { Mail, Globe, Award, Briefcase, Palette, Plane, Smile, Zap, Target, Search, BarChart3, Activity } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  const [pipelineProgress, setPipelineProgress] = useState([0, 0, 0]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setPipelineProgress([98, 85, 72]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-8 sm:py-16 md:py-24 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12">
          
          {/* Left: Content Text */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-8">
            <div className="space-y-3 sm:space-y-6">
              <Reveal>
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 uppercase inline-block px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black bg-neo-blue shadow-neo-sm sm:shadow-neo hover:rotate-1 hover:shadow-none transition-all cursor-pointer duration-200 text-black">
                  Who is <span className="text-inherit">Deepthi?</span>
                  </h2>
              </Reveal>
              
              <Reveal delay={200}>
                  <div className="prose text-black font-medium leading-relaxed text-[10px] sm:text-base sm:prose-lg">
                  <p className="mb-2 sm:mb-4">
                      I am a dynamic, people-first Recruitment and HR professional with 5+ years of experience across IT, non-IT, and niche sectors.
                  </p>
                  <p className="mb-2 sm:mb-4">
                      My journey spans from being a Recruitment Coordinator to a Team Lead, giving me a 360-degree view of the hiring landscape. I've worked with global giants like Accenture and GlobalLogic, as well as agile staffing firms.
                  </p>
                  <p>
                      Whether it's finding that "purple squirrel" candidate for a startup or crafting a resume that beats the ATS bots, I focus on outcome-driven results without the corporate fluff.
                  </p>
                  </div>
              </Reveal>
            </div>

            {/* Strengths Grid - Compact horizontal on mobile */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
               {[
                 { title: "High Volume Hiring", icon: <Briefcase className="w-3 h-3 sm:w-5 sm:h-5"/>, hoverColor: "hover:bg-neo-blue" },
                 { title: "Candidate Experience", icon: <Award className="w-3 h-3 sm:w-5 sm:h-5"/>, hoverColor: "hover:bg-neo-pink" },
                 { title: "Workflow Optimization", icon: <Globe className="w-3 h-3 sm:w-5 sm:h-5"/>, hoverColor: "hover:bg-neo-yellow" }
               ].map((item, idx) => (
                 <Reveal key={idx} delay={300 + (idx * 100)} width="100%">
                    <div className={`border-2 border-black p-1.5 sm:p-4 bg-white ${item.hoverColor} shadow-neo-sm h-full hover:translate-y-1 hover:shadow-none transition-all duration-200 group cursor-pointer text-black flex flex-col items-start gap-0.5 sm:gap-1`}>
                        <div className="group-hover:scale-95 transition-transform duration-200 origin-left">
                            {item.icon}
                        </div>
                        <h4 className="font-bold text-[7px] sm:text-[11px] uppercase tracking-wider leading-tight">{item.title}</h4>
                    </div>
                 </Reveal>
               ))}
            </div>

            {/* Education Block */}
            <Reveal delay={600}>
                <div className="border-2 sm:border-4 border-black bg-neo-blue p-3 sm:p-6 shadow-neo-sm sm:shadow-neo relative text-black">
                    <div className="absolute -top-2.5 sm:-top-4 left-2 sm:left-4 bg-black text-white px-1.5 sm:px-2 py-0.5 font-bold text-[8px] sm:text-[10px] uppercase tracking-widest">Education</div>
                    <ul className="space-y-2 sm:space-y-4 mt-1 sm:mt-2">
                        <li className="flex justify-between items-end border-b-2 border-black border-dashed pb-2 sm:pb-3">
                            <div>
                                <span className="font-black block text-[10px] sm:text-base md:text-lg uppercase leading-none">MBA - Finance & HR</span>
                                <span className="text-[8px] sm:text-xs font-bold text-black/70">Loyola Academy</span>
                            </div>
                            <span className="font-black text-sm sm:text-xl lg:text-2xl tracking-tighter">7.48</span>
                        </li>
                        <li className="flex justify-between items-end">
                            <div>
                                <span className="font-black block text-[10px] sm:text-base md:text-lg uppercase leading-none">B.Com (Computers)</span>
                                <span className="text-[8px] sm:text-xs font-bold text-black/70">Jagruthi Degree & PG College</span>
                            </div>
                            <span className="font-black text-sm sm:text-xl lg:text-2xl tracking-tighter">74%</span>
                        </li>
                    </ul>
                </div>
            </Reveal>
            
            {/* Hobbies Doodle */}
            <Reveal delay={400}>
                <div className="border-2 sm:border-4 border-black border-dashed bg-neo-yellow p-3 sm:p-6 transform md:rotate-1 shadow-neo-sm hover:rotate-0 transition-transform relative text-black">
                     <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-neo-pink border-2 border-black p-1 sm:p-2 rounded-full shadow-sm">
                        <Smile className="text-white w-3 h-3 sm:w-5 sm:h-5" />
                     </div>
                     <h3 className="font-black text-xs sm:text-lg uppercase mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                        <Palette className="w-3 h-3 sm:w-5 sm:h-5" /> The Human Side
                     </h3>
                     <p className="font-bold text-[9px] sm:text-sm mb-2 sm:mb-4 leading-relaxed">
                        Why is this site so colorful? Because professional doesn't have to be boring! When I'm not sourcing talent, I'm expressing myself through <span className="underline decoration-wavy decoration-neo-purple">watercolor painting</span> and exploring new places through <span className="underline decoration-wavy decoration-neo-blue">travel</span>.
                     </p>
                     <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white border-2 border-black text-[8px] sm:text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                            <Palette size={10} className="sm:w-3 sm:h-3"/> Watercolors
                        </span>
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white border-2 border-black text-[8px] sm:text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                            <Plane size={10} className="sm:w-3 sm:h-3"/> Travel
                        </span>
                     </div>
                </div>
            </Reveal>
          </div>

          {/* Right: Brutalist Info Card Cluster - Compact for Mobile */}
          <div className="lg:col-span-5 flex flex-col gap-2 sm:gap-3 md:gap-6 lg:pt-4">
            {/* Dossier Card */}
            <Reveal delay={400}>
                <div className="bg-neo-yellow border-2 md:border-4 border-black p-2 sm:p-3 md:p-6 shadow-neo-sm md:shadow-neo-lg relative hover:rotate-1 hover:shadow-none transition-all duration-300 cursor-pointer text-black">
                    <div className="absolute top-1.5 sm:top-2 md:top-4 right-1.5 sm:right-2 md:right-4 flex gap-0.5 sm:gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full border-2 border-black bg-red-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full border-2 border-black bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full border-2 border-black bg-green-500"></div>
                    </div>
                    
                    <h3 className="text-[10px] sm:text-sm md:text-xl font-black mb-2 sm:mb-3 md:mb-6 border-b-2 md:border-b-4 border-black pb-1 md:pb-2 uppercase tracking-tighter">THE DOSSIER</h3>
                    
                    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-1 gap-1.5 sm:gap-2 md:gap-5 font-bold font-mono">
                        <div>
                          <label className="block text-[6px] sm:text-[8px] md:text-[10px] uppercase text-black/60 mb-0.5">Name</label>
                          <div className="bg-white border-2 border-black p-1 sm:p-1.5 md:p-2 text-[7px] sm:text-xs md:text-sm truncate">Deepthi Lakkaraju</div>
                        </div>
                        
                        <div>
                          <label className="block text-[6px] sm:text-[8px] md:text-[10px] uppercase text-black/60 mb-0.5">Contact</label>
                          <div className="bg-white border-2 border-black p-1 sm:p-1.5 md:p-2 text-[6px] sm:text-[10px] md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-2">
                              <Mail size={8} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 flex-shrink-0"/> <span className="truncate">HR@deepthiconnects.com</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[6px] sm:text-[8px] md:text-[10px] uppercase text-black/60 mb-0.5">Languages</label>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                              {['English', 'Telugu'].map(l => (
                                  <span key={l} className="bg-neo-purple text-white px-1 sm:px-1.5 md:px-2 py-0.5 border-2 border-black text-[5px] sm:text-[8px] md:text-[10px]">{l}</span>
                              ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-[6px] sm:text-[8px] md:text-[10px] uppercase text-black/60 mb-0.5">Status</label>
                          <div className="bg-neo-green px-1 sm:px-1.5 md:px-2 py-0.5 border-2 border-black text-[5px] sm:text-[8px] md:text-[10px] inline-block uppercase">Ready '26</div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Strategic Impact & Global Status - Side by side */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6">
              {/* Strategic Impact Metrics */}
              <Reveal delay={500}>
                  <div className="bg-white border-2 md:border-4 border-black p-2 sm:p-2.5 md:p-5 shadow-neo-sm md:shadow-neo hover:-translate-x-1 transition-transform cursor-default text-black h-full">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-5">
                          <h4 className="font-black text-[7px] sm:text-[8px] md:text-xs uppercase tracking-wider md:tracking-widest flex items-center gap-0.5 sm:gap-1 md:gap-2">
                              <Activity className="text-neo-pink w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" /> Impact
                          </h4>
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2 md:space-y-4">
                          {[
                              { label: 'Sourcing', val: pipelineProgress[0], color: 'bg-neo-blue' },
                              { label: 'Conversions', val: pipelineProgress[1], color: 'bg-neo-pink' },
                              { label: 'Retention', val: pipelineProgress[2], color: 'bg-neo-red' }
                          ].map((item, i) => (
                              <div key={i}>
                                  <div className="flex justify-between text-[6px] sm:text-[7px] md:text-[9px] font-black uppercase mb-0.5">
                                      <span>{item.label}</span>
                                      <span>{item.val}%</span>
                                  </div>
                                  <div className="w-full h-1.5 sm:h-2 md:h-3.5 bg-gray-100 border md:border-2 border-black overflow-hidden">
                                      <div 
                                          className={`h-full border-r md:border-r-2 border-black transition-all duration-1000 ease-out ${item.color}`}
                                          style={{ width: `${item.val}%` }}
                                      ></div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </Reveal>

              {/* Global Status */}
              <Reveal delay={600}>
                  <div className="bg-black text-white border-2 md:border-4 border-black p-2 sm:p-2.5 md:p-5 shadow-neo-sm md:shadow-neo hover:translate-x-1 transition-all cursor-default h-full">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-4">
                          <h4 className="font-black text-[7px] sm:text-[8px] md:text-xs uppercase tracking-wider md:tracking-widest flex items-center gap-0.5 sm:gap-1 md:gap-2">
                              <Zap className="text-neo-yellow fill-neo-yellow w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" /> Status
                          </h4>
                          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 px-0.5 sm:px-1 md:px-2 py-0.5 md:py-1 bg-gray-800 border border-gray-600 rounded-sm">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-neo-green rounded-full animate-pulse-fast"></div>
                              <span className="text-[5px] sm:text-[7px] md:text-[9px] font-bold uppercase tracking-tighter">Active</span>
                          </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2 md:space-y-3">
                          <div className="flex justify-between items-center text-[6px] sm:text-[8px] md:text-[10px] font-bold border-b border-gray-800 pb-1 sm:pb-1.5 md:pb-2">
                              <span className="text-gray-400">Focus:</span>
                              <span className="text-neo-blue">Scale-up</span>
                          </div>
                          <div className="flex justify-between items-center text-[6px] sm:text-[8px] md:text-[10px] font-bold">
                              <span className="text-gray-400">Waitlist:</span>
                              <span className="text-neo-pink">Open</span>
                          </div>
                      </div>
                  </div>
              </Reveal>
            </div>

            {/* Stickers - Inline */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-start">
                <Reveal delay={800}>
                    <div className="bg-neo-yellow border-2 border-black p-1 sm:p-1.5 md:p-2 font-black text-[6px] sm:text-[8px] md:text-[9px] uppercase shadow-neo-sm transform -rotate-3 cursor-pointer hover:scale-105 transition-all text-black">
                        <Target className="inline-block mr-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5" /> ATS Pro
                    </div>
                </Reveal>
                <Reveal delay={900}>
                    <div className="bg-neo-pink text-white border-2 border-black p-1 sm:p-1.5 md:p-2 font-black text-[6px] sm:text-[8px] md:text-[9px] uppercase shadow-neo-sm transform rotate-2 cursor-pointer hover:scale-105 transition-all">
                        <Search className="inline-block mr-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5" /> Sourcing Expert
                    </div>
                </Reveal>
                <Reveal delay={1000}>
                    <div className="bg-neo-blue border-2 border-black p-1 sm:p-1.5 md:p-2 font-black text-[6px] sm:text-[8px] md:text-[9px] uppercase shadow-neo-sm cursor-pointer hover:scale-105 transition-all text-black">
                        <Smile className="inline-block mr-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5" /> People First
                    </div>
                </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
