import React from 'react';

const SupportCentre = () => {
  return (
    <section id="support-centre" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Centre</h2>
          <p className="text-slate-400 max-w-2xl">
            Need help with appeals, applications, or general questions? Visit our support centre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-white font-semibold mb-2">Appeals</div>
            <p className="text-slate-400 text-sm mb-4">Submit or check the status of an appeal.</p>
            <a href="#" className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-white">Open Appeals</a>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-white font-semibold mb-2">Contact Us</div>
            <p className="text-slate-400 text-sm mb-4">Reach out for support or general enquiries.</p>
            <a href="#" className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-white">Contact Support</a>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-white font-semibold mb-2">Community</div>
            <p className="text-slate-400 text-sm mb-4">Join our Discord for updates and assistance.</p>
            <a href="https://discord.gg/z4RMzBnw" className="inline-block px-4 py-2 rounded-full bg-[#5865F2] text-white font-medium hover:opacity-90">Join Discord</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCentre;

