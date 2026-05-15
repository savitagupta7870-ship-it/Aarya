import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Send, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { uiSounds } from '../lib/sounds';

export default function ReviewsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uiSounds.success();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tighter uppercase mb-6">
            Client <span className="text-neon-yellow">Reviews</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            See what other creators are saying about their boost in CTR and brand growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-32"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold font-display uppercase tracking-tight mb-4">Drop a Review</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none focus:border-neon-yellow transition-all" placeholder="Alex Rivers" />
                            </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Your Role / Channel</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-neon-yellow transition-all" placeholder="e.g. Gaming Creator" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Star Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.button
                                    key={star}
                                    type="button"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + star * 0.05 }}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.8 }}
                                    onClick={() => {
                                        uiSounds.success();
                                        setRating(star);
                                    }}
                                    onMouseEnter={() => {
                                        uiSounds.hover();
                                        setHoverRating(star);
                                    }}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="p-1 transition-all"
                                >
                                    <Star 
                                        className={`w-8 h-8 transition-all duration-300 ${
                                            star <= (hoverRating || rating) 
                                            ? 'fill-neon-yellow text-neon-yellow drop-shadow-[0_0_12px_rgba(255,230,0,0.6)]' 
                                            : 'text-white/10'
                                        }`} 
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Your Experience</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/20" />
                            <textarea 
                                required
                                rows={4} 
                                className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none focus:border-neon-yellow transition-all resize-none" 
                                placeholder="How did my work help your channel?"
                            ></textarea>
                        </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    onMouseEnter={uiSounds.hover}
                    className="w-full py-4 bg-neon-yellow text-black font-bold rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,230,0,0.2)] hover:shadow-[0_0_40px_rgba(255,230,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Post Review <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-neon-yellow text-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display uppercase mb-4">Review Submitted</h3>
                  <p className="text-white/50 mb-8">
                    Your feedback means a lot! It will appear on the page after a quick moderation check.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-neon-yellow font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Submit another review
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:border-neon-yellow/30 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-4 h-4 ${idx < review.rating ? 'fill-neon-yellow text-neon-yellow' : 'text-white/10'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed italic mb-8">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full border border-white/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm">{review.name}</h4>
                      <p className="text-white/40 text-xs">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Some dummy ones for visual growth */}
              {[4, 5, 6].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: num * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl opacity-60 filter blur-[1px] hover:blur-0 hover:opacity-100 transition-all cursor-default"
                >
                   <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed italic mb-8">
                    "I've been working with this designer for over 6 months now. The consistency and quality is unmatched. My revenue has doubled since we updated our thumbnails."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">JD</div>
                    <div>
                      <h4 className="font-bold text-sm">Josh Digital</h4>
                      <p className="text-white/40 text-xs">Tech Reviewer</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
