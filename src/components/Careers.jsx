import React from 'react';
import { useNavigate } from 'react-router-dom';
import { companies, totalPositions } from '../data/careers.js';

const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
    <path d="M12 7v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 12h12M13 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 6l6 6-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Careers = () => {
  const navigate = useNavigate();
  

  return (
    <section id="careers" className="bg-slate-950">
      <div className="relative">
        <img
          src="https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1hioc1ur21h3j1pmcvoifo61q7h1c.png"
          alt="Aviation background"
          className="w-full h-[360px] object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="text-slate-400 tracking-[3px] mb-2">CAREERS</div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Open Positions</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Join our portfolio of companies shaping the future across media, education, and aviation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-semibold">All Positions</h2>
          <span className="text-xs bg-slate-800 text-slate-300 rounded-full px-3 py-1">
            {totalPositions} positions available
          </span>
        </div>

        <div className="space-y-6">
          {companies.map((c) => (
            <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => navigate(`/careers/${c.id}`)}
                className="w-full text-left px-4 py-4 text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
              >
                <span className="font-medium">{c.name}</span>
                <span className="flex items-center gap-3">
                  <span className="text-xs bg-slate-800 text-slate-300 rounded-full px-3 py-1">{c.positions.length} roles</span>
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    <span className="hidden sm:inline text-sm">View</span>
                    <ChevronRight />
                  </span>
                </span>
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
