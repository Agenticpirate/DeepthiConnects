
import React from 'react';
import { Reveal } from './Reveal';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <Reveal>
                <h2 className="text-4xl lg:text-6xl font-black uppercase inline-block px-4 py-2 border-4 border-transparent hover:border-black hover:bg-neo-red hover:text-white hover:shadow-neo hover:-rotate-1 transition-all cursor-default duration-300">
                    Why Choose Deepthi?
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* For Candidates */}
            <Reveal width="100%">
                <div className="border-4 border-black p-0 bg-neo-white h-full hover:shadow-neo transition-shadow">
                    <div className="bg-black text-white p-4 font-black text-2xl uppercase text-center border-b-4 border-black">
                        For Candidates
                    </div>
                    <div className="p-8 space-y-4">
                        <p className="font-medium text-lg">
                            You are not just a keyword. I build personalized strategies, not generic templates.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-2xl mr-2 leading-none">✅</span>
                                <span className="font-bold">ATS-aligned formatting that actually parses.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-2 leading-none">✅</span>
                                <span className="font-bold">Clear storytelling for career gaps or switches.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Reveal>

            {/* For Founders */}
            <Reveal width="100%" delay={200}>
                <div className="border-4 border-black p-0 bg-neo-white h-full hover:shadow-neo transition-shadow">
                    <div className="bg-neo-blue text-black p-4 font-black text-2xl uppercase text-center border-b-4 border-black">
                        For Founders & HR
                    </div>
                    <div className="p-8 space-y-4">
                        <p className="font-medium text-lg">
                            Fortune 500 process discipline with Startup agility.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-2xl mr-2 leading-none">✅</span>
                                <span className="font-bold">Handle high volume while maintaining quality.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-2 leading-none">✅</span>
                                <span className="font-bold">Reduced time-to-hire through efficient screening.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Reveal>

        </div>

        {/* Proof Points */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={400} width="100%">
                <div className="bg-white border-2 border-black p-4 text-center font-bold shadow-neo-sm transition-all duration-200 hover:bg-neo-green hover:shadow-neo hover:-translate-y-1 hover:rotate-1 cursor-default">
                    "Reduced time to hire by streamlining interview coordination."
                </div>
            </Reveal>
            <Reveal delay={600} width="100%">
                <div className="bg-white border-2 border-black p-4 text-center font-bold shadow-neo-sm transition-all duration-200 hover:bg-neo-purple hover:text-white hover:shadow-neo hover:-translate-y-1 hover:-rotate-1 cursor-default">
                    "Managed multi-role pipelines across IT, non-IT & niche positions."
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;