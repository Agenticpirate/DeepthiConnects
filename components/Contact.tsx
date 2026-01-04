import React, { useState } from 'react';
import { Mail, Linkedin, Send, Instagram, Copy, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Candidate looking for Resume help',
    message: ''
  });

  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('HR@deepthiconnects.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, role, message } = formData;
    
    const subject = `Inquiry from Website: ${role} - ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ARole: ${role}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    
    window.location.href = `mailto:HR@deepthiconnects.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-10 sm:py-20 bg-neo-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16">
          
          {/* Info */}
          <div>
            <Reveal>
                <h2 className="text-2xl sm:text-5xl lg:text-7xl font-black uppercase mb-3 sm:mb-8 leading-none">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-yellow to-neo-purple">Work</span> Together.
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-sm sm:text-xl mb-4 sm:mb-12 text-gray-300 font-medium">
                    Whether you need a career breakthrough or your next best hire, I'm ready to help.
                </p>
            </Reveal>

            {/* Social Links - Horizontal icons on mobile */}
            <div className="flex flex-wrap gap-2 sm:flex-col sm:space-y-6 sm:gap-0 mb-4 sm:mb-0">
                <Reveal delay={400}>
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <a href="mailto:HR@deepthiconnects.com" className="flex items-center gap-2 sm:gap-4 text-xs sm:text-xl font-bold hover:text-neo-yellow transition-colors group">
                            <div className="p-1.5 sm:p-3 bg-white text-black border-2 border-white rounded-none group-hover:bg-neo-yellow group-hover:border-neo-yellow group-hover:scale-110 transition-all">
                                <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
                            </div>
                            <span className="hidden sm:inline">HR@deepthiconnects.com</span>
                        </a>
                        <button 
                            onClick={handleCopyEmail}
                            className="p-1.5 sm:p-3 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:scale-110 transition-all shadow-neo-sm hover:translate-y-1 hover:shadow-none hidden sm:block"
                            title="Copy Email Address"
                            aria-label="Copy Email Address"
                        >
                            {emailCopied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-neo-green" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                    </div>
                </Reveal>
                <Reveal delay={500}>
                    <a href="https://www.linkedin.com/in/deepthiconnects/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-4 text-xs sm:text-xl font-bold hover:text-neo-blue transition-colors group w-fit">
                        <div className="p-1.5 sm:p-3 bg-[#0077b5] text-white border-2 border-[#0077b5] rounded-none group-hover:bg-[#0077b5] group-hover:border-white group-hover:scale-110 transition-all shadow-neo-sm group-hover:shadow-neo">
                            <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <span className="hidden sm:inline">Connect on LinkedIn</span>
                    </a>
                </Reveal>
                <Reveal delay={600}>
                    <a href="https://www.instagram.com/deepthi.connects/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-4 text-xs sm:text-xl font-bold hover:text-neo-purple transition-colors group w-fit">
                        <div className="p-1.5 sm:p-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white border-2 border-white rounded-none group-hover:scale-110 transition-all shadow-neo-sm group-hover:shadow-neo">
                            <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <span className="hidden sm:inline">DM on Instagram</span>
                    </a>
                </Reveal>
            </div>
            
            <Reveal delay={700}>
                <div className="mt-4 sm:mt-12 p-3 sm:p-6 border-2 border-gray-700 bg-gray-900 hidden sm:block">
                    <p className="text-[10px] sm:text-sm font-mono text-gray-400">
                        Your information is kept confidential and used only to respond to your inquiry. No spam. Ever.
                    </p>
                </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={400} className="h-full">
            <div className="bg-neo-white p-4 sm:p-8 border-2 sm:border-4 border-white text-black shadow-[4px_4px_0px_0px_#ffffff50] sm:shadow-[8px_8px_0px_0px_#ffffff50] h-full">
                <form className="space-y-3 sm:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-[10px] sm:text-sm font-black uppercase mb-1 sm:mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 sm:p-4 border-2 sm:border-4 border-black bg-white focus:outline-none focus:border-neo-purple focus:shadow-neo-sm focus:ring-0 font-bold transition-shadow text-sm sm:text-base" 
                            placeholder="Your Name" 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-[10px] sm:text-sm font-black uppercase mb-1 sm:mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 sm:p-4 border-2 sm:border-4 border-black bg-white focus:outline-none focus:border-neo-purple focus:shadow-neo-sm focus:ring-0 font-bold transition-shadow text-sm sm:text-base" 
                            placeholder="your@email.com" 
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] sm:text-sm font-black uppercase mb-1 sm:mb-2">Are you a...</label>
                        <div className="relative">
                            <select 
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full p-2 sm:p-4 border-2 sm:border-4 border-black bg-white appearance-none focus:outline-none focus:border-neo-purple font-bold transition-shadow focus:ring-0 text-xs sm:text-base"
                            >
                                <option>Candidate looking for Resume help</option>
                                <option>Founder / HR looking to hire</option>
                                <option>Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-4 text-black">
                                <svg className="fill-current h-3 w-3 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] sm:text-sm font-black uppercase mb-1 sm:mb-2">What do you need?</label>
                        <textarea 
                            rows={3} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 sm:p-4 border-2 sm:border-4 border-black bg-white focus:outline-none focus:border-neo-purple focus:shadow-neo-sm focus:ring-0 font-bold transition-shadow text-sm sm:text-base" 
                            placeholder="Tell me about your situation..."
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full py-2.5 sm:py-4 bg-neo-yellow border-2 sm:border-4 border-black font-black uppercase text-sm sm:text-xl hover:bg-neo-black hover:text-white hover:shadow-[8px_8px_0px_0px_#FFF] transition-all shadow-neo-sm sm:shadow-neo hover:translate-y-1 hover:shadow-none flex items-center justify-center gap-2">
                        Send Message <Send size={16} className="sm:w-5 sm:h-5" />
                    </button>
                </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
