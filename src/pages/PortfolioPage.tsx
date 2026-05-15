import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { FeaturedWork } from '../components/Portfolio';
import { useEffect } from 'react';

export default function PortfolioPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tighter uppercase mb-6">
            Creative <span className="text-neon-yellow">Archive</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl">
            A comprehensive look at my visual engineering. From high-CTR thumbnails to full brand identities.
          </p>
        </motion.div>

        {/* Using FeaturedWork but with a specific title for this page */}
        <FeaturedWork title="FULL COLLECTION" />
      </div>

      {/* Additional grid if needed, but FeaturedWork already shows PROJECTS. 
          If PROJECTS is just "featured" and user wants ALL work, we might need a separate structure.
          However, usually in these apps, PROJECTS *is* the full list.
      */}
    </div>
  );
}
