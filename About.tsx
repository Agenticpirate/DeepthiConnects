
import React from 'react';
import { Mail, Globe, Award, Briefcase } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Content Text */}
          <div className="lg:col-span-7">
            <Reveal>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase inline-block px-4 py-2 border-4 border-transparent hover:border-black hover:bg-neo-blue hover:shadow-neo hover:rotate-1 transition-all cursor-default duration-300">
                Who is <span className="text-inherit">Deepthi?</span>
                </h2>
            </Reveal>
            
            <Reveal delay={200}>
                <div className="prose prose-lg text-black font-medium mb-8">
                <p className="mb-4">
                    I am a dynamic, people-first Recruitment and HR professional with 4+ years of experience across IT, non-IT, and niche sectors.
                </p>
                <p className="mb-4">
                    My journey spans from being a Recruitment Coordinator to a Team Lead, giving me a 360-degree view of the hiring landscape. I've worked with global giants like Accenture and GlobalLogic, as well as agile staffing firms.
                </p>
                <p>
                    Whether it's finding that "purple squirrel" candidate for a startup or crafting a resume that beats the ATS bots, I focus on outcome-driven results without the corporate fluff.
                </p>
                </div>
            </Reveal>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
               {[
                 { title: "High Volume Hiring", icon: <Briefcase className="w-6 h-6 mb-2"/>, hoverColor: "hover:bg-neo-blue" },
                 { title: "Candidate Experience", icon: <Award className="w-6 h-6 mb-2"/>, hoverColor: "hover:bg-neo-pink" },
                 { title: "Workflow Optimization", icon: <Globe className="w-6 h-6 mb-2"/>, hoverColor: "hover:bg-neo-green" }
               ].map((item, idx) => (
                 <Reveal key={idx} delay={300 + (idx * 100)} width="100%">
                    <div className={`border-2 border-black p-4 bg-neo-white ${item.hoverColor} transition-colors shadow-neo-sm h-full hover:-translate-y-1 hover:shadow-neo duration-200 group`}>
                        <div className="group-hover:scale-110 transition-transform duration-200 origin-left">
                            {item.icon}
                        </div>
                        <h4 className="font-bold text-sm uppercase">{item.title}</h4>
                    </div>
                 </Reveal>
               ))}
            </div>

            {/* Education Block */}
            <Reveal delay={600}>
                <div className="border-4 border-black bg-neo-blue p-6 shadow-neo relative">
                <div className="absolute -top-4 left-4 bg-black text-white px-2 py-1 font-bold text-sm uppercase">Education</div>
                <ul className="space-y-4 mt-2">
                    <li className="flex justify-between items-start border-b-2 border-black border-dashed pb-2">
                        <div>
                            <span className="font-bold block text-lg">MBA - Finance & HR</span>
                            <span className="text-sm">Loyola Academy</span>
                        </div>
                        <span className="font-black text-xl">CGPA 7.48</span>
                    </li>
                    <li className="flex justify-between items-start">
                        <div>
                            <span className="font-bold block text-lg">B.Com (Computers)</span>
                            <span className="text-sm">Jagruthi Degree & PG College</span>
                        </div>
                        <span className="font-black text-xl">74%</span>
                    </li>
                </ul>
                </div>
            </Reveal>
          </div>

          {/* Right: Brutalist Info Card */}
          <div className="lg:col-span-5">
            <Reveal delay={400} className="h-full">
                <div className="bg-neo-yellow border-4 border-black p-6 shadow-neo-lg h-full relative hover:rotate-1 transition-transform duration-300">
                <div className="absolute top-4 right-4">
                    <div className="w-4 h-4 rounded-full border-2 border-black bg-red-500 inline-block mr-1"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-black bg-yellow-500 inline-block mr-1"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-black bg-green-500 inline-block"></div>
                </div>
                
                <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-2">THE DOSSIER</h3>
                
                <div className="space-y-6 font-bold font-mono">
                    <div>
                    <label className="block text-xs uppercase text-gray-700 mb-1">Name</label>
                    <div className="bg-white border-2 border-black p-2">Deepthi Lakkaraju</div>
                    </div>
                    
                    <div>
                    <label className="block text-xs uppercase text-gray-700 mb-1">Contact</label>
                    <div className="bg-white border-2 border-black p-2 break-words">
                        <div className="flex items-center gap-2"><Mail size={14}/> HR@deepthiconnects.com</div>
                    </div>
                    </div>

                    <div>
                    <label className="block text-xs uppercase text-gray-700 mb-1">Languages</label>
                    <div className="flex gap-2">
                        {['English', 'Telugu', 'Hindi'].map(l => (
                            <span key={l} className="bg-neo-purple text-white px-2 py-1 border-2 border-black text-sm">{l}</span>
                        ))}
                    </div>
                    </div>

                    <div>
                    <label className="block text-xs uppercase text-gray-700 mb-1">Nationality</label>
                    <div className="bg-white border-2 border-black p-2">Indian</div>
                    </div>

                    <div>
                    <label className="block text-xs uppercase text-gray-700 mb-1">Specialty</label>
                    <div className="bg-white border-2 border-black p-2">
                        Recruitment, Talent Sourcing, Startup HR
                    </div>
                    </div>
                </div>
                </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;