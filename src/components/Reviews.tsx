import { motion } from 'motion/react';
import { TESTIMONIALS, FAQ_ITEMS } from '../constants';
import { Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { uiSounds } from '../lib/sounds';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-neon-yellow tracking-[0.2em] uppercase mb-4">Reviews</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tight">VOICES OF TRUST</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative hover:border-neon-yellow/50 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed italic mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            to="/reviews" 
            onMouseEnter={uiSounds.hover}
            onClick={uiSounds.click}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-neon-yellow transition-all group"
          >
            <span className="font-bold">Worked with me? Leave a review</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-neon-yellow tracking-[0.2em] uppercase mb-4">Questions</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight">OFTEN ASKED</h3>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div 
              key={i}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === i ? 'border-neon-yellow/50 bg-white/5' : 'border-white/10'
              }`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onMouseEnter={uiSounds.hover}
                onClick={() => {
                  uiSounds.click();
                  setOpenIndex(openIndex === i ? null : i);
                }}
              >
                <span className="font-bold text-lg">{item.question}</span>
                {openIndex === i ? <ChevronUp className="text-neon-yellow" /> : <ChevronDown />}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-white/50 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
