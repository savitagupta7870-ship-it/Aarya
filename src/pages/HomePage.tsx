import { Hero } from '../components/Hero';
import { FeaturedWork, Stats } from '../components/Portfolio';
import { Testimonials, FAQ } from '../components/Reviews';
import { Process, ContactForm } from '../components/Contact';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* About / Brand Intro Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto"
           >
             <h2 className="text-3xl md:text-5xl font-bold font-display leading-[1.1] mb-8">
               DESIGNED TO <span className="text-neon-yellow">CATCH EYES</span>. <br /> ENGINEERED TO <span className="text-neon-yellow">DRIVE CLICKS</span>.
             </h2>
             <p className="text-white/50 text-lg md:text-xl leading-relaxed">
               In an era of 3-second attention spans, your thumbnail is your first and last chance. 
               I combine high-end digital art with data-driven psychology to ensure your content wins the click, every single time.
             </p>
           </motion.div>
        </div>
      </section>

      <Stats />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
