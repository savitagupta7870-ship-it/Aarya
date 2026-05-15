import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Mail, Send, Instagram, Twitter, Youtube } from 'lucide-react';
import { uiSounds } from '../lib/sounds';

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-neon-yellow tracking-[0.2em] uppercase mb-4">About me</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tight">HOW I WORK</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-12" />
          
          {PROCESS_STEPS.map((step, i) => {
            const Icon = (LucideIcons as any)[step.icon] || LucideIcons.HelpCircle;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0 group hover:border-neon-yellow transition-all duration-300">
                   <Icon className="w-8 h-8 text-neon-yellow group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-center lg:text-left">
                  <span className="text-neon-yellow font-display font-bold text-sm mb-2 block">STEP {step.id}</span>
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
           <h2 className="text-sm font-bold text-neon-yellow tracking-[0.2em] uppercase mb-4">Contact</h2>
           <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8">READY TO GO VIRAL?</h3>
           <p className="text-white/50 text-lg mb-12 max-w-md">
             Join the ranks of elite creators today. Tell me about your project and let's build something unforgettable.
           </p>

           <div className="space-y-6">
             <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:border-neon-yellow transition-all">
                  <Mail className="w-5 h-5 text-neon-yellow" />
                </div>
                <div>
                   <span className="text-xs text-white/40 uppercase block tracking-widest">Email Me</span>
                   <span className="font-medium">aarya@creative.com</span>
                </div>
             </div>
             
             <div className="flex gap-4 pt-6">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/aaryaamv6?igsh=MWhzd20wZTVyajV4bQ==' },
                  { icon: Youtube, href: 'https://youtube.com/@aaryaamv-q9c?si=sNut3GR1oWQXbw-f' }
                ].map((social, i) => (
                   <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: '#FFE600' }}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/60 transition-all"
                   >
                      <social.icon className="w-5 h-5" />
                   </motion.a>
                ))}
             </div>
           </div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass p-10 rounded-[40px] border-white/5 relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-yellow/10 blur-[60px] rounded-full" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all" />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-white/40">Service Type</label>
               <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all appearance-none cursor-pointer">
                  <option className="bg-black">Gaming Thumbnail</option>
                  <option className="bg-black">Business Branding</option>
                  <option className="bg-black">Full-Channel Package</option>
               </select>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
               <textarea rows={4} placeholder="Describe your project goals..." className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              onMouseEnter={uiSounds.hover}
              onClick={(e) => {
                e.preventDefault();
                uiSounds.success();
                alert('Message sent! (SFX Demo)');
              }}
              className="w-full py-5 bg-neon-yellow text-black font-bold rounded-xl text-lg flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,230,0,0.2)] hover:shadow-[0_0_40px_rgba(255,230,0,0.4)] transition-all"
            >
               Launch Project <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
