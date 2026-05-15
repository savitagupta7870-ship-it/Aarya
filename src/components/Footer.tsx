import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { uiSounds } from '../lib/sounds';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-neon-yellow rounded-lg flex items-center justify-center">
                <span className="text-black font-bold font-display">A</span>
              </div>
              <span className="text-xl font-bold font-display tracking-tighter text-white">AARYA<span className="text-neon-yellow">.</span></span>
            </div>
          </Link>

          <div className="flex gap-10">
             <Link 
               to="/portfolio" 
               onMouseEnter={uiSounds.hover}
               onClick={uiSounds.click}
               className="text-sm text-white/40 hover:text-white transition-colors"
             >
               Portfolio
             </Link>
             <Link 
               to="/reviews" 
               onMouseEnter={uiSounds.hover}
               onClick={uiSounds.click}
               className="text-sm text-white/40 hover:text-white transition-colors"
             >
               Reviews
             </Link>
             <a 
               href="/#process" 
               onMouseEnter={uiSounds.hover}
               onClick={uiSounds.click}
               className="text-sm text-white/40 hover:text-white transition-colors"
             >
               Process
             </a>
             <Link 
               to="/contact" 
               onMouseEnter={uiSounds.hover}
               onClick={uiSounds.click}
               className="text-sm text-white/40 hover:text-white transition-colors"
             >
               Hire Me
             </Link>
          </div>

          <div className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Aarya Creative. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
