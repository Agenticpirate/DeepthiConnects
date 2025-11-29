
import React, { useEffect, useRef, useState } from 'react';
import { ExperienceItem, SkillItem } from '../types';
import { Reveal } from './Reveal';

// Subcomponent for Animated Skill Bar
const AnimatedSkillBar = ({ percentage }: { percentage: number }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setWidth(percentage), 200); // Slight delay for effect
                observer.unobserve(entry.target);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div className="w-full h-6 bg-white border-2 border-black overflow-hidden" ref={ref}>
            <div 
                className="h-full bg-neo-blue border-r-2 border-black transition-all duration-1000 ease-out" 
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
      theme: "group-hover:bg-neo-blue"
    },
    {
      role: "Talent Acquisition Specialist",
      company: "Axelon Staffing Services",
      description: ["Specialized in high-volume IT staffing.", "Improved candidate sourcing strategies."],
      theme: "group-hover:bg-neo-pink"
    },
    {
      role: "Talent Acquisition Associate",
      company: "Accenture Solutions",
      description: ["Supported large-scale recruitment drives.", "Handled onboarding and documentation compliance."],
      theme: "group-hover:bg-neo-purple"
    },
    {
      role: "Recruiting Coordinator",
      company: "GlobalLogic Technologies",
      description: ["Coordinated interviews and candidate pipelines.", "Ensured seamless candidate experience."],
      theme: "group-hover:bg-neo-green"
    }
  ];

  const skillCategories = [
    {
      category: "Recruitment",
      skills: [
        { name: "Full Cycle Recruitment", percentage: 70 },
        { name: "Strategic Sourcing", percentage: 80 },
        { name: "Interviewing & Assessment", percentage: 90 },
      ]
    },
    {
      category: "Leadership",
      skills: [
        { name: "Team Leadership", percentage: 80 },
        { name: "Stakeholder Coord.", percentage: 70 },
      ]
    }
  ];

  const techStack = [
    { name: 'SAP Fieldglass', color: 'hover:bg-neo-blue' },
    { name: 'Beeline', color: 'hover:bg-neo-pink' },
    { name: 'VNDLY', color: 'hover:bg-neo-green' },
    { name: 'Excel', color: 'hover:bg-neo-yellow' },
    { name: 'Google Workspace', color: 'hover:bg-neo-red' }
  ];

  return (
    <section id="experience" className="py-20 bg-neo-yellow border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
            <Reveal>
                <h2 className="text-4xl lg:text-6xl font-black uppercase inline-block px-4 py-2 bg-white border-4 border-black shadow-neo hover:bg-neo-green hover:shadow-neo-lg hover:-rotate-1 transition-all cursor-default">
                    Experience & Skills
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Timeline */}
          <div>
            <Reveal>
                <h3 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black pb-2 inline-block hover:bg-neo-blue hover:text-white px-1 transition-colors">
                    Career History
                </h3>
            </Reveal>
            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                    <div className="bg-white border-4 border-black p-5 shadow-neo hover:translate-x-2 hover:shadow-neo-lg transition-all duration-200 relative group">
                        {/* Colored Accent Line */}
                        <div className={`absolute top-0 left-0 w-2 h-full bg-neo-black border-r-2 border-black ${exp.theme} transition-colors`}></div>
                        
                        <div className="pl-4">
                            <h4 className="text-xl font-black uppercase group-hover:text-neo-blue transition-colors">{exp.role}</h4>
                            <p className="text-lg font-bold text-gray-700 mb-2">{exp.company}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-sm font-medium">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <Reveal delay={200}>
                <h3 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black pb-2 inline-block hover:bg-neo-pink hover:text-white px-1 transition-colors">
                    Skill Meters
                </h3>
            </Reveal>
            
            {skillCategories.map((cat, idx) => (
                <div key={idx} className="mb-6">
                    <Reveal delay={300 + (idx * 100)}>
                        <h4 className="font-bold text-lg mb-3 bg-black text-white px-2 inline-block transform -rotate-1 hover:rotate-1 hover:bg-neo-purple hover:scale-105 transition-all cursor-default">
                            {cat.category}
                        </h4>
                        <div className="space-y-3">
                            {cat.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div className="flex justify-between mb-1 font-bold text-sm">
                                        <span>{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <AnimatedSkillBar percentage={skill.percentage} />
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            ))}

            <Reveal delay={500}>
                <div className="bg-white border-4 border-black p-6 mt-6 shadow-neo-sm hover:shadow-neo transition-shadow">
                    <h4 className="font-bold text-lg mb-4 uppercase inline-block border-b-4 border-neo-yellow">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, i) => (
                            <span 
                                key={tech.name} 
                                className={`px-3 py-1 border-2 border-black bg-gray-100 text-sm font-bold ${tech.color} hover:text-black hover:border-black hover:-translate-y-1 hover:shadow-neo-sm transition-all cursor-default`}
                            >
                                {tech.name}
                            </span>
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
