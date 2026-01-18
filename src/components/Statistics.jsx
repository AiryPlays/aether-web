import React from 'react';

const stats = [
  { label: "Website Users", value: "6,723", desc: "Using Aether applications and appeal website" },
  { label: "Applications Submitted", value: "5,430", desc: "Applications submitted across all companies" },
  { label: "Applications Under Review", value: "9", desc: "Applications that are currently being processed" },
  { label: "Contact Requests", value: "997", desc: "Total support and appeal requests received" },
];

const Statistics = () => {
  return (
    <section id="stats" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our statistics across the board</h2>
          <p className="text-slate-400">
            Aether Group is proud to showcase key statistics that highlight our impact and reach within the Roblox community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
