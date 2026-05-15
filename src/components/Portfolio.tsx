import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS, STATS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { uiSounds } from '../lib/sounds';
import { Link } from 'react-router-dom';

export function FeaturedWork({ title = "SELECTED PROJECTS" }: { title?: string }) {
  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-neon-yellow tracking-[0.2em] uppercase mb-4">Samples</h2>
            <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tight overflow-hidden flex flex-wrap">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.03,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  whileHover={{ 
                    color: ["#ffffff", "#faff00", "#ff00ff", "#00ffff", "#ffffff"],
                    textShadow: "0 0 8px rgba(250, 255, 0, 0.5)",
                    transition: { duration: 0.4 }
                  }}
                  onMouseEnter={() => {
                    if (char !== " ") uiSounds.hover();
                  }}
                  className="inline-block cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h3>
          </div>
          <p className="text-white/40 max-w-sm md:text-right">
            A small collection of high-performing thumbnails that generated millions of views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="aspect-video overflow-hidden rounded-2xl relative mb-6">
        <Link 
          to="/portfolio" 
          className="block w-full h-full"
          onMouseEnter={uiSounds.hover}
          onClick={uiSounds.click}
        >
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
             <div className="p-4 bg-neon-yellow text-black rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <ExternalLink className="w-6 h-6" />
             </div>
          </div>
        </Link>

        {/* Stats Badge */}
        {project.stats && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-neon-yellow text-black text-xs font-bold rounded-full">
            {project.stats}
          </div>
        )}
        
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
           {project.category}
        </div>
      </div>

      <div className="px-1">
        <h4 className="text-xl font-bold font-display mb-2 group-hover:text-neon-yellow transition-colors">{project.title}</h4>
        <p className="text-white/40 text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-black relative">
      <div className="absolute inset-0 bg-glow-orb opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-bold font-display text-neon-yellow mb-2 tracking-tighter">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
