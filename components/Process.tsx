import React from 'react';
import { Reveal } from './Reveal';
import { FileText, Search, ClipboardCheck, Rocket, MessageSquare, Users, ListChecks, PartyPopper } from 'lucide-react';

const Process: React.FC = () => {
  const resumeSteps = [
    { title: "Discovery", desc: "Understanding your goals", icon: <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6" /> },
    { title: "Strategy", desc: "Crafting your narrative", icon: <FileText className="w-5 h-5 lg:w-6 lg:h-6" /> },
    { title: "Draft & Review", desc: "Perfecting every detail", icon: <ClipboardCheck className="w-5 h-5 lg:w-6 lg:h-6" /> },
    { title: "Final Assets", desc: "Ready to land your dream job", icon: <Rocket className="w-5 h-5 lg:w-6 lg:h-6" /> }
  ];
  
  const hiringSteps = [
    { title: "Intake", desc: "Define your ideal candidate", icon: <Search className="w-5 h-5 lg:w-6 lg:h-6" /> },
    { title: "Sourcing", desc: "Finding top talent", icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" /> },
    { title: "Shortlist", desc: "Curated candidates", icon: <ListChecks className="w-5 h-5 lg:w-6 lg:h-6" /> },
    { title: "Onboarding", desc: "Seamless integration", icon: <PartyPopper className="w-5 h-5 lg:w-6 lg:h-6" /> }
  ];

  return (
    <section id="process" className="py-8 sm:py-16 lg:py-24 bg-neo-blue border-b-4 border-black relative overflow-hidden">
      {/* Background decorative elements - Desktop only */}
      <div className="hidden lg:block absolute top-10 left-10 w-20 h-20 bg-neo-yellow border-4 border-black rotate-12"></div>
      <div className="hidden lg:block absolute bottom-10 right-10 w-16 h-16 bg-neo-pink border-4 border-black -rotate-6"></div>
      <div className="hidden lg:block absolute top-1/2 right-20 w-8 h-8 bg-black rotate-45"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-20">
          <Reveal>
            <div className="inline-block relative">
              <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full bg-neo-purple border-4 border-black"></div>
              <h2 className="relative text-xl sm:text-4xl lg:text-7xl font-black uppercase px-3 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 border-2 sm:border-4 border-black bg-neo-white shadow-neo-sm lg:shadow-neo">
                The Process
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="hidden lg:block mt-6 text-lg font-bold text-black/80 max-w-2xl mx-auto">
              Two paths to success — whether you're job hunting or team building
            </p>
          </Reveal>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12">
          
          {/* Resume Process - Desktop */}
          <div className="relative">
            <Reveal>
              <div className="relative inline-block mb-10">
                <div className="absolute -top-2 -left-2 w-full h-full bg-black"></div>
                <h3 className="relative text-2xl font-black uppercase bg-neo-purple text-white border-4 border-black px-6 py-3">
                  ✨ Resume Revamp
                </h3>
              </div>
            </Reveal>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-black"></div>
              
              <div className="space-y-6">
                {resumeSteps.map((step, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="flex items-start gap-6 group cursor-pointer">
                      {/* Number circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="absolute top-1 left-1 w-16 h-16 bg-neo-yellow border-4 border-black rounded-full"></div>
                        <div className="relative w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center font-black text-2xl group-hover:bg-neo-purple group-hover:text-white transition-all duration-300 group-hover:-translate-y-1">
                          {idx + 1}
                        </div>
                      </div>
                      
                      {/* Content card */}
                      <div className="flex-1 relative">
                        <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
                        <div className="relative bg-white border-4 border-black p-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-neo-purple/20 border-2 border-black flex items-center justify-center">
                              {step.icon}
                            </div>
                            <h4 className="font-black text-xl uppercase">{step.title}</h4>
                          </div>
                          <p className="text-gray-600 font-medium">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Hiring Process - Desktop */}
          <div className="relative">
            <Reveal delay={200}>
              <div className="relative inline-block mb-10">
                <div className="absolute -top-2 -left-2 w-full h-full bg-black"></div>
                <h3 className="relative text-2xl font-black uppercase bg-neo-yellow text-black border-4 border-black px-6 py-3">
                  🚀 Startup Hiring
                </h3>
              </div>
            </Reveal>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-black"></div>
              
              <div className="space-y-6">
                {hiringSteps.map((step, idx) => (
                  <Reveal key={idx} delay={200 + idx * 100}>
                    <div className="flex items-start gap-6 group cursor-pointer">
                      {/* Number circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="absolute top-1 left-1 w-16 h-16 bg-neo-red border-4 border-black rounded-full"></div>
                        <div className="relative w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center font-black text-2xl group-hover:bg-neo-red group-hover:text-white transition-all duration-300 group-hover:-translate-y-1">
                          {idx + 1}
                        </div>
                      </div>
                      
                      {/* Content card */}
                      <div className="flex-1 relative">
                        <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
                        <div className="relative bg-white border-4 border-black p-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-neo-yellow/30 border-2 border-black flex items-center justify-center">
                              {step.icon}
                            </div>
                            <h4 className="font-black text-xl uppercase">{step.title}</h4>
                          </div>
                          <p className="text-gray-600 font-medium">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Keep compact */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {/* Resume Process - Mobile */}
          <div>
            <Reveal>
              <h3 className="text-[10px] sm:text-base font-black mb-2 sm:mb-4 uppercase bg-neo-purple text-white border-2 border-black inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 shadow-neo-sm">
                Resume Revamp
              </h3>
            </Reveal>
            <div className="space-y-1.5 sm:space-y-3">
              {resumeSteps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 100} width="100%">
                  <div className="flex items-center group">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center font-black text-[10px] sm:text-sm border-2 border-black flex-shrink-0 z-10">
                      {idx + 1}
                    </div>
                    <div className="bg-white border-2 border-black p-1.5 sm:p-2 ml-[-2px] w-full font-bold uppercase text-[8px] sm:text-xs shadow-neo-sm">
                      {step.title}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Hiring Process - Mobile */}
          <div>
            <Reveal delay={200}>
              <h3 className="text-[10px] sm:text-base font-black mb-2 sm:mb-4 uppercase bg-neo-yellow text-black border-2 border-black inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 shadow-neo-sm">
                Startup Hiring
              </h3>
            </Reveal>
            <div className="space-y-1.5 sm:space-y-3">
              {hiringSteps.map((step, idx) => (
                <Reveal key={idx} delay={200 + idx * 100} width="100%">
                  <div className="flex items-center group">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 bg-neo-red text-white flex items-center justify-center font-black text-[10px] sm:text-sm border-2 border-black flex-shrink-0 z-10">
                      {idx + 1}
                    </div>
                    <div className="bg-white border-2 border-black p-1.5 sm:p-2 ml-[-2px] w-full font-bold uppercase text-[8px] sm:text-xs shadow-neo-sm">
                      {step.title}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
