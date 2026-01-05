
import React from 'react';
import { Reveal } from './Reveal';

const Process: React.FC = () => {
  const resumeSteps = ["Discovery", "Strategy", "Draft & Review", "Final Assets"];
  const hiringSteps = ["Intake", "Sourcing", "Shortlist", "Onboarding"];

  return (
    <section id="process" className="py-8 sm:py-20 bg-neo-blue border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-16">
            <Reveal>
                <h2 className="text-xl sm:text-4xl lg:text-6xl font-black uppercase inline-block px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black bg-neo-white shadow-neo-sm sm:shadow-neo hover:rotate-1 hover:shadow-none transition-all cursor-pointer duration-300">
                The Process
                </h2>
            </Reveal>
        </div>

        {/* Mobile: Side by side, Desktop: 2 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-16">
            
            {/* Resume Process */}
            <div>
                <Reveal>
                    <h3 className="text-[10px] sm:text-2xl font-black mb-2 sm:mb-8 uppercase bg-neo-purple text-white border-2 border-black inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 shadow-neo-sm hover:shadow-none hover:-translate-y-1 hover:-rotate-1 transition-all cursor-pointer">
                        Resume Revamp
                    </h3>
                </Reveal>
                <div className="space-y-1.5 sm:space-y-4">
                    {resumeSteps.map((step, idx) => (
                        <Reveal key={idx} delay={idx * 150} width="100%">
                            <div className="flex items-center group cursor-pointer">
                                <div className="w-5 h-5 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center font-black text-[10px] sm:text-xl border-2 border-black flex-shrink-0 z-10 group-hover:bg-neo-purple transition-colors">
                                    {idx + 1}
                                </div>
                                <div className="bg-white border-2 border-black p-1.5 sm:p-4 ml-[-2px] w-full font-bold uppercase text-[8px] sm:text-base shadow-neo-sm group-hover:translate-x-1 transition-transform">
                                    {step}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Hiring Process */}
            <div>
                <Reveal delay={200}>
                    <h3 className="text-[10px] sm:text-2xl font-black mb-2 sm:mb-8 uppercase bg-neo-yellow text-black border-2 border-black inline-block px-1.5 sm:px-3 py-0.5 sm:py-1 shadow-neo-sm hover:shadow-none hover:-translate-y-1 hover:rotate-1 transition-all cursor-pointer">
                        Startup Hiring
                    </h3>
                </Reveal>
                <div className="space-y-1.5 sm:space-y-4">
                    {hiringSteps.map((step, idx) => (
                        <Reveal key={idx} delay={200 + (idx * 150)} width="100%">
                            <div className="flex items-center group cursor-pointer">
                                <div className="w-5 h-5 sm:w-12 sm:h-12 bg-neo-red text-white flex items-center justify-center font-black text-[10px] sm:text-xl border-2 border-black flex-shrink-0 z-10 group-hover:bg-neo-black transition-colors">
                                    {idx + 1}
                                </div>
                                <div className="bg-white border-2 border-black p-1.5 sm:p-4 ml-[-2px] w-full font-bold uppercase text-[8px] sm:text-base shadow-neo-sm group-hover:translate-x-1 transition-transform">
                                    {step}
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
