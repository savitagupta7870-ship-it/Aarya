import { Project, Testimonial, Stat, FAQItem, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Gaming thumbnail',
    description: 'High-CTR thumbnail for a global gaming challenge.',
    thumbnail: 'https://i.ibb.co/cq0CRdz/thumbnail.jpg',
    category: 'Gaming',
    stats: '+15.4% CTR'
  },
  {
    id: '2',
    title: 'Anime style thumbnail',
    description: 'Clean, authoritative design for a major finance channel.',
    thumbnail: 'https://i.ibb.co/mVmnSGfS/maxresdefault-1.webp',
    category: 'Anime',
    stats: '2.4M Views'
  },
  {
    id: '3',
    title: 'Esports Tournament Reveal',
    description: 'Glow-heavy cinematic reveal for a Pro League event.',
    thumbnail: 'https://i.ibb.co/XxNSfsQV/MOTION-LED-BACKGROUND-MLBB.jpg',
    category: 'Esports',
    stats: 'Top 1% CTR'
  },
  {
    id: '4',
    title: 'Esports gfx , points table , winner posters etc.',
    description: 'Soft, engaging lifestyle thumbnail for daily vloggers.',
    thumbnail: 'https://i.ibb.co/Z9RmKv5/alya.jpg',
    category: 'Vlog',
    stats: 'Viral Potential'
  },
  {
    id: '5',
    title: 'Logo,banner,header',
    description: 'Detailed tech breakdown with explosive visual elements.',
    thumbnail: 'https://i.ibb.co/KjxXzYSr/Whats-App-Image-2026-04-27-at-9-02-45-PM.jpg',
    category: 'Tech',
    stats: '800k Views'
  },
  {
    id: '6',
    title: 'video editing (Any type) gaming,edits,etc.',
    description: 'High-end anime music videos and gaming montages with advanced AE effects.',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    category: 'Editing',
    stats: '+25% Retention'
  }
];

export const STATS: Stat[] = [
  { label: 'Total Views Generated', value: '500', suffix: 'M+' },
  { label: 'Years of Experience', value: '6', suffix: '+' },
  { label: 'Projects Completed', value: '1.2', suffix: 'k' },
  { label: 'CTR Increase %', value: '45', suffix: '%' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Gaming Creator',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    content: 'Sinko is the GOAT. My CTR jumped from 4% to 12% in the first month. Absolutely elite work.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Business Consultant',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    content: 'Professional, fast, and incredibly intuitive. They understand brand identity better than anyone I\'ve worked with.',
    rating: 5
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Esports Manager',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    content: 'The cinematic style is exactly what our organization needed. Each thumbnail feels like a movie poster.',
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is your turnaround time?',
    answer: 'Standard delivery is within 24-48 hours. Expedited delivery (under 12 hours) is available for priority clients.'
  },
  {
    question: 'How many revisions do you offer?',
    answer: 'I offer unlimited revisions until you are 100% satisfied with the result. Your success is my priority.'
  },
  {
    question: 'Which niches do you support?',
    answer: 'I specialize in Gaming, Business, Tech, Lifestyle, and Esports, but I can adapt to any niche with a clear creative brief.'
  },
  {
    question: 'Do you provide the source files?',
    answer: 'Yes, fully layered .PSD files are included in the Premium and ELITE packages.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Brief',
    description: 'We discuss your video goals, target audience, and core message to define the creative direction.',
    icon: 'MessageSquareText'
  },
  {
    id: 2,
    title: 'Concept Design',
    description: 'I create multiple rough concepts focusing on composition, lighting, and CTR psychology.',
    icon: 'Layers'
  },
  {
    id: 3,
    title: 'The Polish',
    description: 'I apply high-end color grading, glow effects, and typography to create a masterpiece.',
    icon: 'Sparkles'
  },
  {
    id: 4,
    title: 'Final Delivery',
    description: 'You receive high-resolution files optimized for YouTube, along with A/B testing variations.',
    icon: 'CheckCircle2'
  }
];
