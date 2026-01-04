
import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Reveal } from './Reveal';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: (FAQItem & { hoverColor: string })[] = [
    {
      question: "What makes your resumes ATS friendly?",
      answer: "I use clean formatting, standard headings, and role-specific keyword optimization that parsing software can easily read. No graphics or tables that confuse the bots.",
      hoverColor: "hover:bg-neo-blue"
    },
    {
      question: "Do you work with both IT and non-IT professionals?",
      answer: "Yes, I have extensive experience recruiting for technical roles (Developers, QA) as well as non-IT roles (Sales, Ops, Admin).",
      hoverColor: "hover:bg-neo-pink"
    },
    {
      question: "How do you support early stage startups?",
      answer: "I act as an extension of your team, handling everything from writing job descriptions to conducting initial screens. Contact me to build your first hiring pipeline.",
      hoverColor: "hover:bg-neo-green"
    },
    {
      question: "Can you help with HR documentation for small teams?",
      answer: "Absolutely. I provide compliant templates for offer letters, contracts, and policies tailored for Indian SMEs and startups.",
      hoverColor: "hover:bg-neo-yellow"
    },
    {
      question: "How long does a resume project usually take?",
      answer: "Typically 3-5 business days after the strategy call. I prioritize quality and collaboration over rushing.",
      hoverColor: "hover:bg-neo-purple"
    }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="faq" className="py-8 sm:py-20 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-12">
            <Reveal>
                <h2 className="text-lg sm:text-4xl lg:text-5xl font-black uppercase inline-block px-2 sm:px-6 py-1 sm:py-3 border-2 sm:border-4 border-black bg-neo-yellow shadow-neo-sm sm:shadow-neo hover:-rotate-1 hover:shadow-none transition-all cursor-pointer duration-300">
                    Frequently Asked
                </h2>
            </Reveal>
        </div>

        <div className="space-y-2 sm:space-y-6">
            {faqs.map((faq, idx) => (
                <Reveal key={idx} delay={idx * 100} width="100%">
                    <article 
                        className={`group border-2 sm:border-4 border-black bg-white shadow-neo-sm sm:shadow-neo transition-all duration-200 cursor-pointer ${openIndex === idx ? faq.hoverColor.replace('hover:', '') : ''} ${faq.hoverColor}`}
                        onClick={() => toggleFAQ(idx)}
                    >
                        {/* Question Header */}
                        <div className="p-2 sm:p-6 flex items-start justify-between gap-2">
                            <h3 className="text-[11px] sm:text-xl font-black flex items-start group-hover:text-black transition-colors uppercase tracking-tight leading-tight flex-1">
                                <span className={`text-black mr-1.5 sm:mr-4 text-xs sm:text-2xl leading-none bg-neo-yellow border-2 sm:border-4 border-black w-5 h-5 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-none transition-all duration-300 ${openIndex === idx ? 'rotate-12 bg-white' : 'group-hover:bg-white group-hover:rotate-12'}`}>?</span>
                                <span className="pt-0.5 sm:pt-0">{faq.question}</span>
                            </h3>
                            <div className={`flex-shrink-0 w-5 h-5 sm:w-8 sm:h-8 border-2 border-black bg-white flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-neo-yellow' : ''}`}>
                                <ChevronDown className="w-3 h-3 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        
                        {/* Answer - Collapsible */}
                        <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="font-medium text-gray-700 text-[10px] sm:text-base px-2 pb-2 sm:px-6 sm:pb-6 pl-8 sm:pl-20 border-l-2 sm:border-l-4 border-black/30 ml-2 sm:ml-6 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </article>
                </Reveal>
            ))}
        </div>
        
        <div className="mt-5 sm:mt-16 text-center">
            <Reveal delay={500}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="inline-block border-b-2 sm:border-b-8 border-neo-yellow hover:bg-neo-yellow hover:px-2 sm:hover:px-4 py-0.5 sm:py-1 text-[10px] sm:text-2xl font-black uppercase tracking-tighter transition-all duration-200 hover:-rotate-1"
                >
                    Have another question? Ask me directly.
                </a>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
