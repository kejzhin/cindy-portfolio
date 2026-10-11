import React, { useState } from 'react';
import { Calendar, Building, Check, ArrowRight, Layers, PhoneIncoming, FileText, Send, Home } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Generated contextual images
import workspaceImage from '../assets/images/healthcare_bpo_workspace_1791753497012.jpg';
import realEstateImage from '../assets/images/philippines_condo_realestate_1791753509908.jpg';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'healthcare' | 'realestate'>('all');

  const filteredExperiences = experiences.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'healthcare') {
      return item.category === 'healthcare' || item.category === 'appointment' || item.category === 'email';
    }
    if (filter === 'realestate') {
      return item.category === 'realestate';
    }
    return true;
  });

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
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
              03. Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
              Work Experience
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              3 years & 8 months in US Healthcare BPO accounts alongside 2 years in high-ticket real estate sales.
            </p>
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="inline-flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Roles ({experiences.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('healthcare')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'healthcare'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Healthcare BPO (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter('realestate')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'realestate'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Real Estate Sales (1)
            </button>
          </div>
        </div>

        {/* Visual Context Preview Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Healthcare BPO Environment */}
          <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-white group shadow-xs">
            <div className="aspect-16/9 overflow-hidden bg-stone-100">
              <img
                src={workspaceImage}
                alt="Healthcare BPO call and CRM workstation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-stone-100">
              <div className="text-xs font-bold text-stone-900">US Healthcare Operations</div>
              <p className="text-xs text-stone-500 mt-0.5">
                Dual-monitor workflow: Inbound & outbound calls, EMR (OPM) charts, Risk Adjustment & HEDIS tracking.
              </p>
            </div>
          </div>

          {/* Real Estate Environment */}
          <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-white group shadow-xs">
            <div className="aspect-16/9 overflow-hidden bg-stone-100">
              <img
                src={realEstateImage}
                alt="Luxury condominium living room in the Philippines"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-stone-100">
              <div className="text-xs font-bold text-stone-900">Philippine Condominium Sales</div>
              <p className="text-xs text-stone-500 mt-0.5">
                Over ₱18.6M+ TCP closed in residential condominium units and rent-to-own investment proposals.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
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

                <div className="text-xs font-semibold text-stone-500 sm:text-right shrink-0">
                  Phase 0{index + 1}
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
