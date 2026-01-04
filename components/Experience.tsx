
import React, { useEffect, useRef, useState } from 'react';
import { ExperienceItem, SkillItem } from '../types';
import { Reveal } from './Reveal';

const AnimatedSkillBar = ({ percentage, color }: { percentage: number, color: string }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setWidth(percentage), 200);
                observer.unobserve(entry.target);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div className="w-full h-3 sm:h-5 bg-white border-2 border-black overflow-hidden" ref={ref}>
            <div 
                className={`h-full border-r-2 border-black transition-all duration-1000 ease-out ${color}`}
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Recruitment Coordinator & Team Lead",
      company: "Forefront",
      description: ["Led recruitment team operations.", "Managed full-cycle hiring processes for key accounts."],
      theme: "bg-neo-blue"
    },
    {
      role: "Talent Acquisition Specialist",
      company: "Axelon Staffing Services",
      description: ["Specialized in high-volume IT staffing.", "Improved candidate sourcing strategies."],
      theme: "bg-neo-pink"
    },
    {
      role: "Talent Acquisition Associate",
      company: "Accenture Solutions",
      description: ["Supported large-scale recruitment drives.", "Handled onboarding and documentation compliance."],
      theme: "bg-neo-purple"
    },
    {
      role: "Recruiting Coordinator",
      company: "GlobalLogic Technologies",
      description: ["Coordinated interviews and candidate pipelines.", "Ensured seamless candidate experience."],
      theme: "bg-neo-yellow"
    }
  ];

  const skillCategories = [
    {
      category: "Core Mastery",
      skills: [
        { name: "Strategic Sourcing", percentage: 95, color: 'bg-neo-blue' },
        { name: "Full Cycle Recruitment", percentage: 88, color: 'bg-neo-pink' },
        { name: "Stakeholder Management", percentage: 92, color: 'bg-neo-yellow' },
      ]
    },
    {
      category: "Advanced Skills",
      skills: [
        { name: "ATS Optimization", percentage: 96, color: 'bg-neo-purple' },
        { name: "Candidate Experience", percentage: 94, color: 'bg-neo-red' },
      ]
    }
  ];

  const techStack = ['SAP Fieldglass', 'Beeline', 'VNDLY', 'Excel', 'Google Workspace', 'LinkedIn Recruiter', 'Zoho CRM'];

  return (
    <section id="experience" className="py-8 sm:py-20 bg-neo-yellow border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-5 sm:mb-16">
            <Reveal>
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase inline-block px-2 sm:px-4 py-1 sm:py-2 bg-white border-2 sm:border-4 border-black shadow-neo-sm sm:shadow-neo hover:shadow-none hover:-rotate-1 transition-all cursor-pointer text-black">
                    Expertise Matrix
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 xl:gap-20">
          
          {/* Timeline - Career History */}
          <div className="space-y-3 sm:space-y-6">
            <Reveal>
                <h3 className="text-xs sm:text-xl font-black mb-2 sm:mb-4 uppercase inline-block bg-neo-blue text-black border-2 border-black px-2 py-0.5 sm:py-1 shadow-neo-sm">
                    Career History
                </h3>
            </Reveal>
            {/* Mobile: 2-column grid, Desktop: single column */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-4">
              {experiences.map((exp, idx) => (
                <Reveal key={idx} delay={idx * 100} width="100%">
                    <div className="bg-white border-2 sm:border-4 border-black p-2 sm:p-5 shadow-neo-sm sm:shadow-neo hover:translate-x-1 hover:shadow-none transition-all duration-200 relative group cursor-pointer text-black h-full">
                        <div className={`absolute top-0 left-0 w-1 sm:w-2 h-full border-r-2 border-black ${exp.theme}`}></div>
                        <div className="pl-2 sm:pl-4">
                            <h4 className="text-[10px] sm:text-lg font-black uppercase leading-tight group-hover:text-neo-purple transition-colors">{exp.role}</h4>
                            <p className="text-[8px] sm:text-sm font-bold text-black/60 mb-0.5 sm:mb-2 uppercase tracking-tighter">{exp.company}</p>
                            <ul className="list-disc pl-2.5 sm:pl-4 space-y-0 sm:space-y-1 hidden sm:block">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-[11px] sm:text-[13px] font-bold leading-tight">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Proficiency Dashboards */}
          <div className="space-y-4 sm:space-y-10">
            <div className="space-y-3 sm:space-y-6">
                <Reveal>
                    <h3 className="text-xs sm:text-xl font-black mb-2 sm:mb-4 uppercase inline-block bg-neo-pink text-white border-2 border-black px-2 py-0.5 sm:py-1 shadow-neo-sm">
                        Skill Proficiency
                    </h3>
                </Reveal>
                
                {/* Mobile: Side by side skill categories */}
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-6">
                  {skillCategories.map((cat, idx) => (
                      <div key={idx} className="bg-white border-2 sm:border-4 border-black p-2 sm:p-5 shadow-neo-sm sm:shadow-neo text-black">
                          <h4 className="font-black text-[8px] sm:text-xs mb-2 sm:mb-6 uppercase tracking-wider sm:tracking-widest border-b-2 border-black pb-1 sm:pb-2">
                              {cat.category}
                          </h4>
                          <div className="space-y-2 sm:space-y-5">
                              {cat.skills.map((skill, sIdx) => (
                                  <div key={sIdx}>
                                      <div className="flex justify-between mb-0.5 sm:mb-1.5 font-black text-[7px] sm:text-[10px] uppercase tracking-tighter">
                                          <span className="truncate pr-1">{skill.name}</span>
                                          <span className="bg-black text-white px-1 py-0.5 text-[6px] sm:text-[10px]">{skill.percentage}%</span>
                                      </div>
                                      <AnimatedSkillBar percentage={skill.percentage} color={skill.color} />
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}
                </div>
            </div>

            {/* Tech Stack - Professional Tag Cloud */}
            <Reveal delay={500} width="100%">
                <div className="bg-black text-white border-2 sm:border-4 border-black p-3 sm:p-6 shadow-neo-sm">
                    <h4 className="font-black text-[8px] sm:text-xs mb-2 sm:mb-6 uppercase tracking-wider sm:tracking-widest border-b border-gray-700 pb-1 sm:pb-2 flex items-center gap-1.5 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neo-green rounded-full"></div>
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2.5">
                        {techStack.map((tech) => (
                            <div 
                                key={tech} 
                                className="px-1.5 sm:px-3 py-0.5 sm:py-1.5 border border-gray-600 sm:border-2 text-[7px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest transition-all duration-200 bg-gray-900 hover:bg-neo-yellow hover:text-black hover:border-black hover:-translate-y-1 cursor-crosshair"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
