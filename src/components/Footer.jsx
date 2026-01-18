import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Aether Group</h3>
            <p className="text-slate-500 text-sm">Revolutionizing Roblox Roleplay</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          Aether 2025 © Aether Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
