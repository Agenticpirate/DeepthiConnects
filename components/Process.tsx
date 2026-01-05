import React from 'react';
import { Reveal } from './Reveal';
import { FileText, Search, ClipboardCheck, Rocket, MessageSquare, Users, ListChecks, PartyPopper } from 'lucide-react';

const Process: React.FC = () => {
  const resumeSteps = [
    { title: "Discovery", desc: "Understanding your goals", icon: <MessageSquare className="w-5 h-5" /> },
    { title: "Strategy", desc: "Crafting your narrative", icon: <FileText className="w-5 h-5" /> },
    { title: "Draft & Review", desc: "Perfecting every detail", icon: <ClipboardCheck className="w-5 h-5" /> },
    { title: "Final Assets", desc: "Ready to land your dream job", icon: <Rocket className="w-5 h-5" /> }
  ];
  
  const hiringSteps = [
    { title: "Intake", desc: "Define your ideal candidate", icon: <Search className="w-5 h-5" /> },
    { title: "Sourcing", desc: "Finding top talent", icon: <Users className="w-5 h-5" /> },
    { title: "Shortlist", desc: "Curated candidates", icon: <ListChecks className="w-5 h-5" /> },
    { title: "Onboarding", desc: "Seamless integration", icon: <PartyPopper className="w-5 h-5" /> }
  ];

  return (
    <section id="process" className="py-8 sm:py-16 lg:py-20 bg-neo-blue border-b-4 border-black relative overflow-hidden">
      {/* Background decorative elements - Desktop only */}
      <div className="hidden lg:block absolute top-8 left-8 w-16 h-16 bg-neo-yellow border-4 border-black rotate-12 shadow-neo"></div>
      <div className="hidden lg:block absolute bottom-8 right-8 w-14 h-14 bg-neo-pink border-4 border-black -rotate-6 shadow-neo"></div>
      <div className="hidden lg:block absolute top-1/2 right-16 w-6 h-6 bg-black rotate-45"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-16">
          <Reveal>
            <div className="inline-block relative">
              <div className="hidden lg:block absolute top-2 left-2 w-full h-full bg-neo-purple border-4 border-black"></div>
              <h2 className="relative text-xl sm:text-4xl lg:text-5xl font-black uppercase px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-2 sm:border-4 border-black bg-neo-white">
                The Process
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="hidden lg:block mt-4 text-base font-bold text-black/70 max-w-xl mx-auto">
              Two paths to success — whether you're job hunting or team building
            </p>
          </Reveal>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16">
          
          {/* Resume Process - Desktop */}
          <div>
            <Reveal>
              <div className="relative inline-block mb-8">
                <div className="absolute top-1 left-1 w-full h-full bg-black"></div>
                <h3 className="relative text-xl font-black uppercase bg-neo-purple text-white border-4 border-black px-5 py-2">
                  ✨ Resume Revamp
                </h3>
              </div>
            </Reveal>
            
            <div className="space-y-4">
              {resumeSteps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    {/* Number box */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute top-1 left-1 w-12 h-12 bg-neo-yellow border-3 border-black"></div>
                      <div className="relative w-12 h-12 bg-white border-3 border-black flex items-center justify-center font-black text-xl group-hover:bg-neo-purple group-hover:text-white transition-all duration-200">
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1 relative">
                      <div className="absolute top-1 left-1 w-full h-full bg-black"></div>
                      <div className="relative bg-white border-3 border-black p-4 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-neo-purple/15 border-2 border-black flex items-center justify-center flex-shrink-0">
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="font-black text-base uppercase leading-tight">{step.title}</h4>
                            <p className="text-gray-500 text-sm font-medium">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Hiring Process - Desktop */}
          <div>
            <Reveal delay={150}>
              <div className="relative inline-block mb-8">
                <div className="absolute top-1 left-1 w-full h-full bg-black"></div>
                <h3 className="relative text-xl font-black uppercase bg-neo-yellow text-black border-4 border-black px-5 py-2">
                  🚀 Startup Hiring
                </h3>
              </div>
            </Reveal>
            
            <div className="space-y-4">
              {hiringSteps.map((step, idx) => (
                <Reveal key={idx} delay={150 + idx * 80}>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    {/* Number box */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute top-1 left-1 w-12 h-12 bg-neo-red border-3 border-black"></div>
                      <div className="relative w-12 h-12 bg-white border-3 border-black flex items-center justify-center font-black text-xl group-hover:bg-neo-red group-hover:text-white transition-all duration-200">
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1 relative">
                      <div className="absolute top-1 left-1 w-full h-full bg-black"></div>
                      <div className="relative bg-white border-3 border-black p-4 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-neo-yellow/25 border-2 border-black flex items-center justify-center flex-shrink-0">
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="font-black text-base uppercase leading-tight">{step.title}</h4>
                            <p className="text-gray-500 text-sm font-medium">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
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
