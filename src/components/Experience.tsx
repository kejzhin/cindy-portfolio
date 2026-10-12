import React from 'react';
import { Calendar, PhoneIncoming, FileText, Send, Home } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  const getRoleIcon = (category: string) => {
    switch (category) {
      case 'healthcare':
        return <PhoneIncoming className="w-5 h-5 text-sky-600" />;
      case 'appointment':
        return <Calendar className="w-5 h-5 text-amber-600" />;
      case 'email':
        return <Send className="w-5 h-5 text-indigo-600" />;
      case 'realestate':
        return <Home className="w-5 h-5 text-emerald-600" />;
      default:
        return <FileText className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            Work Experience
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            More than 5 years in US Healthcare BPO accounts alongside 2 years in high-ticket real estate sales.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs hover:border-stone-300 transition-colors"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-stone-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 mt-0.5">
                    {getRoleIcon(exp.category)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mt-1">
                      <span className="font-medium text-stone-700">{exp.organizationContext}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-stone-600">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <div className="pt-5 text-stone-700 text-sm leading-relaxed">
                <p>{exp.summary}</p>
              </div>

              {/* Detailed Responsibilities Bullets */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Key Daily Execution & Deliverables:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used Strip */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-stone-400 mr-1">Platforms:</span>
                {exp.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
