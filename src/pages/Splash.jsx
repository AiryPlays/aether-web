import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => navigate('/home'), 3600);
    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="w-[256px] h-[256px] text-white">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <style>
            {`
            .stroke { stroke: currentColor; fill: none; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 100; stroke-dashoffset: 100; animation: draw 0.9s ease forwards; }
            .stroke.outer { animation-delay: 0.0s; }
            .stroke.tri { animation-delay: 0.9s; }
            .stroke.inner { animation-delay: 1.8s; }
            .fill { fill: currentColor; opacity: 0; animation: fillIn 0.9s ease forwards; animation-delay: 2.7s; }
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
    </div>
  );
};

export default Splash;
