/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Hero';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="relative overflow-x-hidden selection:bg-neon-yellow selection:text-black min-h-screen flex flex-col">
        {/* Dynamic Background Noise/Texture */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <Navbar />
        
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Glow Elements */}
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-neon-yellow/5 blur-[200px] -z-10 rounded-full" />
        <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-neon-yellow/5 blur-[150px] -z-10 rounded-full" />
      </div>
    </Router>
  );
}
