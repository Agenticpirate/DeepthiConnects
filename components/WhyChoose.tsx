
import React from 'react';
import { Reveal } from './Reveal';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-8 sm:py-20 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-12">
            <Reveal>
                <h2 className="text-lg sm:text-4xl lg:text-6xl font-black uppercase inline-block px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black bg-neo-red text-white shadow-neo-sm sm:shadow-neo hover:-rotate-1 hover:shadow-none transition-all cursor-pointer duration-300">
                    Why Choose Deepthi?
                </h2>
            </Reveal>
        </div>

        {/* Mobile: Side by side cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-12">
            
            {/* For Candidates */}
            <Reveal width="100%">
                <div className="border-2 sm:border-4 border-black p-0 bg-neo-white h-full hover:shadow-none shadow-neo-sm sm:shadow-neo transition-shadow cursor-pointer">
                    <div className="bg-black text-white p-1.5 sm:p-4 font-black text-[10px] sm:text-2xl uppercase text-center border-b-2 sm:border-b-4 border-black">
                        For Candidates
                    </div>
                    <div className="p-2 sm:p-8 space-y-1.5 sm:space-y-4">
                        <p className="font-medium text-[8px] sm:text-lg leading-tight">
                            You are not just a keyword. I build personalized strategies, not generic templates.
                        </p>
                        <ul className="space-y-1 sm:space-y-3">
                            <li className="flex items-start">
                                <span className="text-[10px] sm:text-2xl mr-1 sm:mr-2 leading-none">✅</span>
                                <span className="font-bold text-[7px] sm:text-base leading-tight">ATS-aligned formatting that actually parses.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[10px] sm:text-2xl mr-1 sm:mr-2 leading-none">✅</span>
                                <span className="font-bold text-[7px] sm:text-base leading-tight">Clear storytelling for career gaps or switches.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Reveal>

            {/* For Founders */}
            <Reveal width="100%" delay={200}>
                <div className="border-2 sm:border-4 border-black p-0 bg-neo-white h-full hover:shadow-none shadow-neo-sm sm:shadow-neo transition-shadow cursor-pointer">
                    <div className="bg-neo-blue text-black p-1.5 sm:p-4 font-black text-[10px] sm:text-2xl uppercase text-center border-b-2 sm:border-b-4 border-black">
                        For Founders & HR
                    </div>
                    <div className="p-2 sm:p-8 space-y-1.5 sm:space-y-4">
                        <p className="font-medium text-[8px] sm:text-lg leading-tight">
                            Fortune 500 process discipline with Startup agility.
                        </p>
                        <ul className="space-y-1 sm:space-y-3">
                            <li className="flex items-start">
                                <span className="text-[10px] sm:text-2xl mr-1 sm:mr-2 leading-none">✅</span>
                                <span className="font-bold text-[7px] sm:text-base leading-tight">Handle high volume while maintaining quality.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[10px] sm:text-2xl mr-1 sm:mr-2 leading-none">✅</span>
                                <span className="font-bold text-[7px] sm:text-base leading-tight">Reduced time-to-hire through efficient screening.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Reveal>

        </div>

        {/* Proof Points - Side by side on mobile */}
        <div className="mt-3 sm:mt-12 grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-6">
            <Reveal delay={400} width="100%">
                <div className="bg-neo-yellow border-2 border-black p-1.5 sm:p-4 text-center font-bold text-[7px] sm:text-base shadow-neo-sm transition-all duration-200 hover:shadow-none hover:-translate-y-1 hover:rotate-1 cursor-pointer leading-tight">
                    "Reduced time to hire by streamlining interview coordination."
                </div>
            </Reveal>
            <Reveal delay={600} width="100%">
                <div className="bg-neo-purple text-white border-2 border-black p-1.5 sm:p-4 text-center font-bold text-[7px] sm:text-base shadow-neo-sm transition-all duration-200 hover:shadow-none hover:-translate-y-1 hover:-rotate-1 cursor-pointer leading-tight">
                    "Managed multi-role pipelines across IT, non-IT & niche positions."
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
