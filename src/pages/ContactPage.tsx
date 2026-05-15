import { motion } from 'motion/react';
import { Mail, Send, Instagram, Twitter, Youtube, MessageSquare, CheckCircle2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { uiSounds } from '../lib/sounds';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState('Thumbnail');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uiSounds.success();
    setSubmitted(true);
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'aaryaamv777@gmail.com', href: 'mailto:aaryaamv777@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@aarya_thumbnails', href: '#' },
    { icon: Twitter, label: 'Twitter', value: '@aaryadesign', href: '#' },
    { icon: Youtube, label: 'YouTube', value: 'Aarya Design', href: '#' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tighter uppercase mb-6">
            Let's <span className="text-neon-yellow">Connect</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to blow up your CTR? Fill out your requirements below or reach out via socials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-bold font-display uppercase tracking-tight">Direct Contact</h2>
            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={uiSounds.hover}
                  onClick={uiSounds.click}
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-neon-yellow transition-all group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow group-hover:text-black transition-colors">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">{method.label}</p>
                    <p className="text-lg font-medium">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Requirements Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h2 className="text-2xl font-bold font-display uppercase tracking-tight mb-8">Project Requirements</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Full Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                      <input required type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Project Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Thumbnail', 'Banner', 'Branding', 'Other'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onMouseEnter={uiSounds.hover}
                          onClick={() => {
                            uiSounds.click();
                            setSelectedType(type);
                          }}
                          className={`py-3 px-4 border rounded-xl text-sm font-medium transition-all ${
                            selectedType === type
                              ? 'bg-neon-yellow border-neon-yellow text-black'
                              : 'bg-white/5 border-white/10 text-white/60 hover:border-neon-yellow hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Project Requirements & Details</label>
                    <textarea 
                      required
                      rows={5} 
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all resize-none" 
                      placeholder="Tell me about your video, niche, and styling preferences..."
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Budget & Pricing</label>
                    <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-xl text-center">
                      <p className="text-neon-yellow font-bold tracking-tight italic">Pricing discussed on DM / Project Scope</p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    onMouseEnter={uiSounds.hover}
                    className="w-full py-5 bg-neon-yellow text-black font-bold rounded-xl text-lg flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,230,0,0.2)] hover:shadow-[0_0_40px_rgba(255,230,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Send Project Brief <Send className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-neon-yellow text-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,230,0,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold font-display uppercase">Message Received</h3>
                  <p className="text-white/50 max-w-sm mx-auto">
                    Thanks for the briefing! I'll review your requirements and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    onMouseEnter={uiSounds.hover}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-all"
                  >
                    Send Another Brief
                  </button>
                </motion.div>
              )}
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-yellow/10 blur-[80px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-yellow/10 blur-[80px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
