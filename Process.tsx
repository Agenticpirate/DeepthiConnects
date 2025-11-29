import React from 'react';
import { Reveal } from './Reveal';

const Process: React.FC = () => {
  const resumeSteps = ["Discovery", "Strategy", "Draft & Review", "Final Assets"];
  const hiringSteps = ["Intake", "Sourcing", "Shortlist", "Onboarding"];

  return (
    <section id="process" className="py-20 bg-neo-blue border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <Reveal>
                <h2 className="text-4xl lg:text-6xl font-black uppercase inline-block px-4 py-2 border-4 border-transparent hover:border-black hover:bg-neo-white hover:shadow-neo hover:rotate-1 transition-all cursor-default duration-300">
                The Process
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Resume Process */}
            <div>
                <Reveal>
                    <h3 className="text-2xl font-black mb-8 uppercase bg-white border-2 border-black inline-block px-3 py-1 shadow-neo-sm hover:shadow-neo hover:bg-neo-purple hover:text-white hover:-translate-y-1 hover:-rotate-1 transition-all cursor-default">
                        Resume Revamp
                    </h3>
                </Reveal>
                <div className="space-y-4">
                    {resumeSteps.map((step, idx) => (
                        <Reveal key={idx} delay={idx * 150} width="100%">
                            <div className="flex items-center group">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl border-2 border-black flex-shrink-0 z-10 group-hover:bg-neo-purple transition-colors">
                                    {idx + 1}
                                </div>
                                <div className="bg-white border-2 border-black p-4 ml-[-2px] w-full font-bold uppercase shadow-neo-sm group-hover:translate-x-1 transition-transform">
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
                    <h3 className="text-2xl font-black mb-8 uppercase bg-neo-yellow border-2 border-black inline-block px-3 py-1 shadow-neo-sm hover:shadow-neo hover:bg-neo-green hover:-translate-y-1 hover:rotate-1 transition-all cursor-default">
                        Startup Hiring
                    </h3>
                </Reveal>
                <div className="space-y-4">
                    {hiringSteps.map((step, idx) => (
                        <Reveal key={idx} delay={200 + (idx * 150)} width="100%">
                            <div className="flex items-center group">
                                <div className="w-12 h-12 bg-neo-red text-white flex items-center justify-center font-black text-xl border-2 border-black flex-shrink-0 z-10 group-hover:bg-neo-black transition-colors">
                                    {idx + 1}
                                </div>
                                <div className="bg-white border-2 border-black p-4 ml-[-2px] w-full font-bold uppercase shadow-neo-sm group-hover:translate-x-1 transition-transform">
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