import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { companies } from '../data/careers.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const CareersCompany = () => {
  const { companyId } = useParams();
  const company = companies.find((c) => c.id === companyId);
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">{company ? company.name : 'Company'}</h1>
            <Link to="/careers" className="text-sm text-slate-400 hover:text-white">Back to Careers</Link>
          </div>

          <div className="space-y-4">
            {company?.positions.map((p) => (
              <div key={p.id} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center text-slate-400 text-xs mb-2 gap-2">
                  <ClockIcon />
                  <span>Posted: {p.posted}</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                    <p className="text-slate-300 text-sm mt-1 line-clamp-2">{p.summary}</p>
                    <button className="text-slate-400 text-xs mt-2 hover:text-slate-200">Show more</button>
                  </div>
                  <button
                    onClick={() => navigate(`/careers/${companyId}/${p.id}`)}
                    className="shrink-0 inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full font-medium hover:bg-white"
                  >
                    Apply Now <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
  </div>
);
};

export default CareersCompany;
