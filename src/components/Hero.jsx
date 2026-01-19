import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1hioc1ur21h3j1pmcvoifo61q7h1c.png" 
          alt="Ryanair 737 - Polish livery" 
          className="w-full h-full object-cover"
        />
        {/* Dark Blue/Slate Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-slate-200 text-xs font-semibold tracking-wider mb-6">
            EST. 2023
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <br />
            Aether Group
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
            Discover how our ecosystem of companies is revolutionizing the Roblox roleplay community through innovation, creativity, and technological excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-3.5 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              Work With Us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-slate-600 text-white rounded-lg font-semibold hover:bg-white/5 hover:border-slate-500 transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center">
        <span className="text-slate-400 text-xs font-medium tracking-wide block mb-2">Scroll to explore</span>
        <svg className="w-5 h-5 text-slate-400 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
