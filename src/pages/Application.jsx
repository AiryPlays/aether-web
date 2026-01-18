import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { companies } from '../data/careers.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Application = () => {
  const { companyId, positionId } = useParams();
  const company = companies.find((c) => c.id === companyId);
  const position = company?.positions.find((p) => p.id === positionId);

  const QUESTIONS = [
    { key: 'robloxUsername', label: 'Please enter your ROBLOX username:' },
    { key: 'timeZone', label: 'Please enter your time zone:', hint: 'e.g. EST, GMT+3' },
    { key: 'email', label: 'Please enter your email address:', hint: 'Any valid email address is accepted, including personal, business or Roblox-specific.' },
    { key: 'experience', label: 'What experience do you have?', hint: 'Provide details for all relevant experience.', textarea: true },
    { key: 'standOut', label: 'What makes you stand out from other applicants?', hint: 'For this question, you should try to write at least 4 or more sentences, and you should use correct spelling, grammar and punctuation in your answer.', textarea: true },
    { key: 'interest', label: 'Why are you interested in a career at Ryanair?', hint: 'For this question, you should try to write at least 4 or more sentences, and you should use correct spelling, grammar and punctuation in your answer.', textarea: true },
    { key: 'additional', label: "Is there anything else that you'd like to share with us?", hint: 'Write N/A if you have nothing further to mention.', textarea: true }
  ];

  const [form, setForm] = useState(Object.fromEntries(QUESTIONS.map((q) => [q.key, ''])));
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const payload = {
        content: `New application for ${company?.name} - ${position?.title}`,
        embeds: [
          {
            title: 'Application Details',
            fields: [
              { name: 'ROBLOX Username', value: form.robloxUsername || 'N/A', inline: true },
              { name: 'Time Zone', value: form.timeZone || 'N/A', inline: true },
              { name: 'Email Address', value: form.email || 'N/A', inline: true },
              { name: 'Experience', value: form.experience || 'N/A', inline: false },
              { name: 'What Makes You Stand Out', value: form.standOut || 'N/A', inline: false },
              { name: 'Interest in Ryanair', value: form.interest || 'N/A', inline: false },
              { name: 'Additional Information', value: form.additional || 'N/A', inline: false }
            ],
            color: 5814783
          }
        ]
      };

      if (!WEBHOOK_URL) {
        throw new Error('Missing webhook URL. Set VITE_DISCORD_WEBHOOK_URL in .env');
      }

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error(`Webhook error: ${res.status}`);
      setFeedback({ type: 'success', message: 'Application submitted successfully.' });
      setForm(Object.fromEntries(QUESTIONS.map((q) => [q.key, ''])));
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold">{company ? company.name : 'Company'}</h1>
              <h2 className="text-lg text-white font-medium mt-1">{position ? position.title : 'Position'}</h2>
              {position?.summary && (
                <p className="text-slate-400 text-sm mt-2">{position.summary}</p>
              )}
            </div>
            <Link to={`/careers/${companyId}`} className="text-sm text-slate-400 hover:text-white">Back</Link>
          </div>

          <form onSubmit={submit}>
            <div className="max-h-[70vh] overflow-y-auto space-y-4 pr-1">
              {QUESTIONS.map((q) => (
                <div key={q.key}>
                  <label className="block text-sm text-slate-300 mb-1">{q.label}</label>
                  {q.hint && <div className="text-slate-400 text-xs italic mb-2">{q.hint}</div>}
                  {q.textarea ? (
                    <textarea
                      rows="4"
                      className="w-full rounded-lg bg-slate-800 border border-slate-700 p-2 text-white"
                      value={form[q.key]}
                      onChange={(e) => setForm({ ...form, [q.key]: e.target.value })}
                      required
                    />
                  ) : (
                    <input
                      type={q.key === 'email' ? 'email' : 'text'}
                      className="w-full rounded-lg bg-slate-800 border border-slate-700 p-2 text-white"
                      value={form[q.key]}
                      onChange={(e) => setForm({ ...form, [q.key]: e.target.value })}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
            {feedback && (
              <div className={`text-sm mt-3 ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{feedback.message}</div>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <Link to={`/careers/${companyId}`} className="px-4 py-2 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800">Cancel</Link>
              <button type="submit" disabled={submitting} className="px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-white">
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Application;

