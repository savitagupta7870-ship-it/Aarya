import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { uiSounds } from '../lib/sounds';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-neon-yellow rounded-lg flex items-center justify-center">
              <span className="text-black font-bold font-display">A</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tighter text-white">AARYA<span className="text-neon-yellow">.</span></span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  to={link.href}
                  onMouseEnter={uiSounds.hover}
                  onClick={uiSounds.click}
                  className={`text-sm font-medium transition-colors relative group ${
                    location.pathname === link.href ? 'text-neon-yellow' : 'text-white/70 hover:text-neon-yellow'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-yellow transition-all group-hover:w-full ${
                    location.pathname === link.href ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              ) : (
                <a
                  href={link.href}
                  onMouseEnter={uiSounds.hover}
                  onClick={uiSounds.click}
                  className="text-sm font-medium text-white/70 hover:text-neon-yellow transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-yellow transition-all group-hover:w-full" />
                </a>
              )}
            </motion.div>
          ))}
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={uiSounds.hover}
              onClick={uiSounds.click}
              className="px-6 py-2 bg-neon-yellow text-black text-sm font-bold rounded-full shadow-[0_0_20px_rgba(255,230,0,0.3)] hover:shadow-[0_0_30px_rgba(255,230,0,0.5)] transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.name}
                to={link.href}
                onMouseEnter={uiSounds.hover}
                onClick={() => {
                  uiSounds.click();
                  setIsOpen(false);
                }}
                className={`text-lg font-medium ${
                  location.pathname === link.href ? 'text-neon-yellow' : 'text-white/80 hover:text-neon-yellow'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={uiSounds.hover}
                onClick={() => {
                  uiSounds.click();
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-white/80 hover:text-neon-yellow"
              >
                {link.name}
              </a>
            )
          ))}
          <Link to="/contact">
            <button 
              className="w-full py-4 bg-neon-yellow text-black font-bold rounded-xl"
              onMouseEnter={uiSounds.hover}
              onClick={() => {
                uiSounds.click();
                setIsOpen(false);
              }}
            >
              Get Started
            </button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-yellow/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-yellow/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          {/* Main RGB Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full blur-[40px] opacity-20 animate-pulse" />
          
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center p-1 group">
            {/* Rotating RGB Border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute w-[200%] h-[200%] z-0"
              style={{
                background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"
              }}
            />
            
            {/* Inner Content Wrapper */}
            <Link to="/portfolio" className="relative w-full h-full rounded-full bg-[#050505] p-1.5 z-10 flex items-center justify-center cursor-pointer" onMouseEnter={uiSounds.hover} onClick={uiSounds.click}>
              <img 
                src="https://i.ibb.co/27ft0GN0/Whats-App-Image-2026-04-27-at-9-02-44-PM.jpg" 
                alt="Aarya Profile" 
                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          <Link to="/portfolio" className="block" onClick={uiSounds.click} onMouseEnter={uiSounds.hover}>
            <motion.div 
              animate={{ 
                backgroundColor: ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FF0000"],
                boxShadow: [
                  "0 0 15px #FF0000",
                  "0 0 15px #FFFF00", 
                  "0 0 15px #00FF00",
                  "0 0 15px #00FFFF",
                  "0 0 15px #0000FF",
                  "0 0 15px #FF00FF",
                  "0 0 15px #FF0000"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1 -right-1 p-3 rounded-full shadow-lg z-20 flex items-center justify-center border border-white/20"
            >
               <ArrowRight className="w-6 h-6 text-black" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold font-display tracking-tighter mb-6 uppercase"
        >
          Aarya <br /> 
          <span className="text-white">Visual</span> <span className="text-neon-yellow glow-yellow">Studio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Helping top creators dominate the feed with cinematic, high-converting thumbnails engineered to maximize CTR, attract millions of views, and turn casual viewers into loyal subscribers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/portfolio" onMouseEnter={uiSounds.hover} onClick={uiSounds.click}>
            <button className="px-10 py-5 bg-neon-yellow text-black font-bold rounded-full text-lg shadow-[0_0_40px_rgba(255,230,0,0.3)] hover:shadow-[0_0_60px_rgba(255,230,0,0.5)] transition-all flex items-center gap-2 group focus:outline-none">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="/reviews" onMouseEnter={uiSounds.hover} onClick={uiSounds.click}>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all flex items-center gap-2 focus:outline-none">
              Read Reviews
            </button>
          </Link>
        </motion.div>

        {/* Floating elements simulation */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-10 -left-20 w-32 h-32 glass rounded-2xl rotate-12 hidden lg:flex items-center justify-center border-neon-yellow/20"
        >
          <div className="text-neon-yellow font-bold text-2xl">+15%</div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 -right-10 w-24 h-24 glass rounded-full -rotate-12 hidden lg:flex items-center justify-center border-neon-yellow/20"
        >
          <div className="w-12 h-12 bg-neon-yellow rounded-full opacity-20 blur-lg animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
