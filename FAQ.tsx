
import React from 'react';
import { FAQItem } from '../types';
import { Reveal } from './Reveal';

const FAQ: React.FC = () => {
  const faqs: (FAQItem & { color: string })[] = [
    {
      question: "What makes your resumes ATS friendly?",
      answer: "I use clean formatting, standard headings, and role-specific keyword optimization that parsing software can easily read. No graphics or tables that confuse the bots.",
      color: "hover:bg-neo-blue"
    },
    {
      question: "Do you work with both IT and non-IT professionals?",
      answer: "Yes, I have extensive experience recruiting for technical roles (Developers, QA) as well as non-IT roles (Sales, Ops, Admin).",
      color: "hover:bg-neo-pink"
    },
    {
      question: "How do you support early stage startups?",
      answer: "I act as an extension of your team, handling everything from writing job descriptions to conducting initial screens. Contact me to build your first hiring pipeline.",
      color: "hover:bg-neo-green"
    },
    {
      question: "Can you help with HR documentation for small teams?",
      answer: "Absolutely. I provide compliant templates for offer letters, contracts, and policies tailored for Indian SMEs and startups.",
      color: "hover:bg-neo-yellow"
    },
    {
      question: "How long does a resume project usually take?",
      answer: "Typically 3-5 business days after the strategy call. I prioritize quality and collaboration over rushing.",
      color: "hover:bg-neo-purple"
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
    <section id="faq" className="py-20 bg-white border-b-4 border-black bg-pro-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <Reveal>
                <h2 className="text-4xl lg:text-5xl font-black uppercase inline-block px-4 py-2 border-4 border-transparent hover:border-black hover:bg-neo-yellow hover:shadow-neo hover:-rotate-1 transition-all cursor-default duration-300">
                    Frequently Asked
                </h2>
            </Reveal>
        </div>

        <div className="space-y-6">
            {faqs.map((faq, idx) => (
                <Reveal key={idx} delay={idx * 100} width="100%">
                    <article className={`group border-2 border-black bg-neo-white p-6 shadow-neo transition-all duration-200 hover:-translate-y-1 hover:shadow-neo-lg ${faq.color}`}>
                        <h3 className="text-xl font-bold mb-3 flex items-start group-hover:text-black transition-colors">
                            <span className="text-black mr-3 text-2xl leading-none bg-neo-yellow border-2 border-black w-8 h-8 flex items-center justify-center rounded-none group-hover:bg-white group-hover:rotate-12 transition-all duration-300">?</span>
                            {faq.question}
                        </h3>
                        <p className="font-medium text-gray-800 pl-11 border-l-4 border-black group-hover:border-black/50 transition-colors">
                            {faq.answer}
                        </p>
                    </article>
                </Reveal>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <Reveal delay={500}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="inline-block border-b-4 border-neo-yellow hover:bg-neo-yellow hover:px-2 text-xl font-bold transition-all duration-200 hover:-rotate-1"
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