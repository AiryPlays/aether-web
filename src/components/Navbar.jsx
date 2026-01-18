import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AetherLogo = () => (
  <div className="w-8 h-8 text-white">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
        .stroke { stroke: currentColor; fill: none; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 100; stroke-dashoffset: 100; animation: draw 0.8s ease forwards; }
        .stroke.outer { animation-delay: 0.0s; }
        .stroke.tri { animation-delay: 0.8s; }
        .stroke.inner { animation-delay: 1.6s; }
        .fill { fill: currentColor; opacity: 0; animation: fillIn 0.8s ease forwards; animation-delay: 2.4s; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes fillIn { to { opacity: 1; } }
        `}
      </style>
      <circle className="stroke outer" cx="50" cy="50" r="36" pathLength="100" />
      <path className="stroke tri" d="M50 18 L20 74 L80 74 Z" pathLength="100" />
      <path className="stroke inner" d="M50 30 L32 62 L68 62 Z" pathLength="100" />
      <path className="fill" d="M50 18 L20 74 L80 74 Z" />
      <path className="fill" d="M50 30 L32 62 L68 62 Z" />
    </svg>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AetherLogo />
          <span className="text-xl font-bold text-white tracking-wide">
            Aether Group
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Home</Link>
          <a href="#companies" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Corporate</a>
          <Link to="/careers" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Careers</Link>
          <a href="#support-centre" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Support Centre</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
