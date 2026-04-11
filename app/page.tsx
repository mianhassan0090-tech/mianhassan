"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const whatsappNumber = "923297533990"; // Aapka WhatsApp Number
  
  // Form State for WhatsApp
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [activeTab, setActiveTab] = useState(0);

  // WhatsApp Redirect Logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Message Formatting
    const messageBody = `*New Inquiry from Website*%0A%0A` +
                        `*Name:* ${formData.name}%0A` +
                        `*Phone:* ${formData.phone}%0A` +
                        `*Email:* ${formData.email}%0A` +
                        `*Service:* ${formData.service}%0A` +
                        `*Project Details:* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${messageBody}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { title: "Website Development", desc: "Fast, modern, mobile-friendly websites tailored to your brand. Built to convert visitors into paying customers.", icon: "🌐" },
    { title: "Full Stack Development", desc: "Custom web applications with powerful backends. Scalable systems built with modern technology stack.", icon: "⚙️" },
    { title: "Web App Development", desc: "Interactive, feature-rich web apps & dashboards, booking systems, e-commerce, and more.", icon: "📱" },
    { title: "SEO & Digital Marketing", desc: "Get your business to the top of Google search results. More visibility, more traffic, more revenue.", icon: "🔍" },
    { title: "Google My Business Setup", desc: "Complete GMB optimization so local customers find you first. Reviews, photos, categories — all set up for you.", icon: "📍" },
    { title: "E-Commerce Development", desc: "Full online stores with product management, payment gateways, and admin dashboards. Built to sell.", icon: "🛒" },
    { title: "UI / UX Design", desc: "Clean, intuitive designs that look great and feel smooth. Figma mockups to pixel-perfect builds.", icon: "🎨" },
    { title: "Website Maintenance", desc: "Speed optimization, xbug fixes, updates, and security checks. I keep your site healthy and running.", icon: "🔧" },
  ];

  const processes = [
    { id: "01", title: "Discovery Call", desc: "We talk about your business, your goals, and what you need. I ask the right questions to understand exactly what will help you most." },
    { id: "02", title: "Proposal & Planning", desc: "I send you a clear proposal with timeline, cost, and exactly what you'll get. No hidden fees, no surprises." },
    { id: "03", title: "Design & Development", desc: "I build your project with regular updates so you're always in the loop. You can give feedback at every stage." },
    { id: "04", title: "Launch & Support", desc: "We launch together and I make sure everything works perfectly. Ongoing support available so you're never stuck." },
  ];

  const projects = [
    { title: "E-Commerce Platform", desc: "Complete online store with product management and payment gateway.", tags: ["NEXT.JS", "STRIPE"], icon: "🛍️" },
    { title: "Medical Booking System", desc: "Appointment system for clinics with real-time availability.", tags: ["REACT", "NODE.JS"], icon: "🏥" },
    { title: "Digital Agency Portfolio", desc: "High-performance site with advanced GSAP animations.", tags: ["UI/UX", "WEB"], icon: "✨" },
  ];

  const skillGroups = [
    {
      category: "FRONTEND",
      skills: [
        { name: "HTML", icon: "🏗️" }, { name: "CSS", icon: "🎨" }, { name: "JavaScript", icon: "⚡" }, 
        { name: "React.js", icon: "⚛️" }, { name: "Next.js", icon: "▲" }, { name: "Tailwind CSS", icon: "💨" }
      ]
    },
    {
      category: "BACKEND",
      skills: [
        { name: "Python", icon: "🐍" }, { name: "Node.js", icon: "🟢" }, { name: "Express", icon: "🚂" },
        { name: "MySQL", icon: "🗄️" }, { name: "MongoDB", icon: "🍃" }, { name: "REST APIs", icon: "🔌" }, { name: "PostgreSQL", icon: "🐘" }
      ]
    },
    {
      category: "AI & INTEGRATIONS",
      skills: [
        { name: "Claude API", icon: "🤖" }, { name: "OpenAI API", icon: "🧠" }, { name: "LangChain", icon: "🔗" },
        { name: "Prompt Engineering", icon: "✍️" }, { name: "AI Chatbots", icon: "💬" }, { name: "Cursor / Copilot", icon: "🚀" }
      ]
    },
    {
      category: "CMS & TOOLS",
      skills: [
        { name: "WordPress", icon: "📝" }, { name: "Webflow", icon: "🌊" }, { name: "Git", icon: "🌿" },
        { name: "VS Code", icon: "💻" }, { name: "Figma", icon: "🎯" }, { name: "Docker", icon: "🐳" }
      ]
    },
    {
      category: "MARKETING",
      skills: [
        { name: "SEO", icon: "🔍" }, { name: "Google Ads", icon: "📢" }, { name: "Google My Business", icon: "📍" },
        { name: "Analytics", icon: "📊" }, { name: "Meta Ads", icon: "📱" }
      ]
    },
    {
      category: "AUTOMATION",
      skills: [
        { name: "Python Scripts", icon: "🧬" }, { name: "n8n", icon: "⚙️" }, { name: "Zapier", icon: "⚡" },
        { name: "Make (Integromat)", icon: "🔄" }, { name: "Web Scraping", icon: "🕷️" }, { name: "Task Scheduling", icon: "⏰" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden relative font-sans scroll-smooth">
      
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-xl font-black tracking-tighter flex items-center gap-1 cursor-pointer">
              Hassan<span className="text-blue-500">.</span>
            </div>
            <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest text-zinc-400">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#process" className="hover:text-white transition">Process</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#skills" className="hover:text-white transition">Skills</a>
              <a href="#why-me" className="hover:text-white transition">Why Me</a>
            </div>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-[11px] font-bold hover:bg-blue-700 transition-all">Hire Me</a>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 pb-16 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[9px] uppercase tracking-widest font-bold text-blue-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Available for Projects
              </motion.div>
              <h1 className="text-5xl md:text-[70px] font-black tracking-tight leading-[1] mb-6">
                Building <br /> <span className="text-blue-500">Digital </span> <br /> Solutions That <br /> <span className="text-blue-500"> Actually Work </span>
              </h1>
              <p className="text-zinc-500 text-md md:text-lg max-w-md mb-10 font-medium">I'm Hassan. A Full Stack Developer & Digital Growth Specialist.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-blue-600 rounded-xl text-[12px] font-bold">View My Work</a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-[12px] font-bold">Let's Talk</a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <img src="/hassan.jpg" alt="Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-16 px-6 border-t border-white/5 bg-[#080808]/50">
          <div className="max-w-7xl mx-auto">
            <span className="text-blue-500 text-[9px] font-bold uppercase tracking-[0.3em]">WHAT I DO</span>
            <h2 className="text-4xl font-black tracking-tighter mt-2 italic mb-10">Services I Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-white/5 rounded-2xl overflow-hidden">
              {services.map((service, index) => (
                <div key={index} className="p-8 border border-white/5 bg-zinc-900/20 hover:bg-zinc-800/40 transition-all group">
                  <div className="text-2xl mb-4 bg-zinc-800/50 w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 group-hover:border-blue-500/30 transition-all">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section id="process" className="py-16 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <span className="text-blue-500 text-[9px] font-bold uppercase tracking-[0.3em]">WORKING METHOD</span>
            <h2 className="text-4xl font-black tracking-tighter mt-2 italic mb-12">Simple, Clear Process</h2>
            <div className="max-w-4xl">
              {processes.map((step, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[11px] font-bold text-blue-400 bg-zinc-900 group-hover:border-blue-500/50 transition-all">{step.id}</div>
                    {index !== processes.length - 1 && <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent my-2" />}
                  </div>
                  <div className="pb-10 pt-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-zinc-500 text-sm max-w-2xl">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-16 px-6 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <span className="text-blue-500 text-[9px] font-bold uppercase tracking-[0.3em]">MY PORTFOLIO</span>
            <h2 className="text-4xl font-black tracking-tighter mt-2 italic mb-10">Selected Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/20 transition-all">
                  <div className="aspect-[16/10] bg-zinc-900 flex items-center justify-center text-4xl border-b border-white/5 group-hover:scale-105 transition-transform">{project.icon}</div>
                  <div className="p-8">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="text-[7px] font-bold bg-white/5 px-2 py-1 rounded text-zinc-400 border border-white/5 uppercase">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-500 text-[12px]">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION (Tabs-style) --- */}
        <section id="skills" className="py-16 px-6 border-t border-white/5 bg-[#080808]/30">
          <div className="max-w-7xl mx-auto">
            <span className="text-blue-500 text-[9px] font-bold uppercase tracking-[0.3em]">TECH STACK</span>
            <h2 className="text-4xl font-black tracking-tighter mt-2 italic mb-10">Skills & Expertise</h2>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 border-b border-white/5 pb-4">
              {skillGroups.map((group, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`pb-2 text-[10px] font-bold tracking-widest uppercase transition-all border-b-2 ${
                    activeTab === idx 
                    ? 'text-blue-500 border-blue-500' 
                    : 'text-zinc-500 border-transparent hover:text-zinc-300'
                  }`}
                >
                  {group.category}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {skillGroups[activeTab].skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all cursor-default group">
                  <span className="text-xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-[12px] font-bold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- WHY ME SECTION --- */}
        <section id="why-me" className="py-16 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <span className="text-blue-500 text-[9px] font-bold uppercase tracking-[0.3em]">WHY CHOOSE ME</span>
            <h2 className="text-4xl font-black tracking-tighter mt-2 italic mb-10">What Sets Me Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Fast Delivery", desc: "Most projects delivered in 7-14 days. No waiting months.", icon: "⚡" },
                { title: "Clear Communication", desc: "You always know what's happening. Updates on WhatsApp.", icon: "💬" },
                { title: "Results Focused", desc: "I care about your business results. More customers = success.", icon: "🎯" },
                { title: "Ongoing Support", desc: "I don't disappear after launch. Continued support available.", icon: "🔧" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl hover:border-blue-500/20 transition-all">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- GET IN TOUCH SECTION --- */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em]">GET IN TOUCH</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8">Ready to Grow <br /> Your Business?</h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Tell me about your project and let's make it happen. I'll get back to you within 24 hours.
            </p>
            
            {/* Contact Form */}
            <div className="max-w-3xl mx-auto text-left bg-zinc-900/20 border border-white/5 p-8 md:p-12 rounded-[32px]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">Your Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Hassan" 
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">Phone / WhatsApp</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="text" 
                      placeholder="+92 300 0000000" 
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-white" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-white" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">What do you need?</label>
                  <div className="relative">
                    <select 
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none text-zinc-300 cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="">Select a service...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Web App Development">Web App Development</option>
                      <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">Tell me about your project</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Describe your business and what you're looking for..." 
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none text-white"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-8 text-center border-t border-white/5 text-zinc-600 text-[9px] font-bold uppercase tracking-[0.8em]">
            Built by Hassan • 2026
        </footer>
      </div>
    </main>
  );
}