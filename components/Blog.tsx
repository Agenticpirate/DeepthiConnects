import React from 'react';
import { ArrowRight, Linkedin, BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-12 md:py-20 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
            <div className="inline-block mb-6 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black uppercase px-3 py-1.5 md:px-4 md:py-2 border-2 md:border-4 border-black bg-neo-pink text-white shadow-neo-sm md:shadow-neo hover:shadow-none hover:rotate-2 transition-all cursor-pointer">
                    <BookOpen className="inline-block mr-1.5 md:mr-3 w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12" />
                    Insights & Blog
                </h2>
            </div>
        </Reveal>

        <Reveal delay={200}>
            <div className="max-w-3xl mx-auto bg-neo-yellow border-2 md:border-4 border-black p-4 md:p-8 lg:p-12 shadow-neo-sm md:shadow-neo-lg relative hover:rotate-1 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-neo-blue border-2 md:border-4 border-black p-1.5 md:p-3 rounded-full shadow-neo-sm md:shadow-neo animate-bounce">
                    <span className="font-black text-[8px] md:text-xs uppercase">Coming Soon</span>
                </div>
                
                <h3 className="text-base md:text-2xl lg:text-4xl font-black uppercase mb-3 md:mb-6 leading-tight">
                    Decoding Recruitment <br className="hidden md:block"/>& Startup Culture
                </h3>
                
                <div className="text-xs md:text-base lg:text-lg font-medium mb-4 md:mb-8 border-l-2 md:border-l-4 border-black pl-3 md:pl-4 text-left bg-white/50 p-2 md:p-4 border-2 border-r-0 border-t-0 border-b-0">
                    <p className="mb-1.5 md:mb-2 font-bold text-[11px] md:text-base">Currently brewing articles on:</p>
                    <ul className="list-disc list-inside space-y-0.5 md:space-y-1 text-[10px] md:text-sm lg:text-base">
                        <li>Resume hacks that beat the ATS</li>
                        <li>HR for early-stage startups</li>
                        <li>Salary negotiation in India</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                    <span className="font-bold uppercase text-[10px] md:text-sm">In the meantime:</span>
                    <a 
                        href="https://www.linkedin.com/in/deepthiconnects/recent-activity/all/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-white text-black border-2 border-black font-bold uppercase text-[10px] md:text-sm hover:bg-neo-blue hover:shadow-none hover:-translate-y-1 shadow-neo-sm md:shadow-neo transition-all"
                    >
                        <Linkedin size={14} className="md:w-5 md:h-5 text-[#0077b5]" /> 
                        <span>Read on LinkedIn</span> 
                        <ArrowRight size={14} className="md:w-5 md:h-5" />
                    </a>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;