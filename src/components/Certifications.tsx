import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, X, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Healthcare BPO' | 'Sales & Real Estate'>('All');

  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'All') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
              06. Honors & Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
              Certifications & Achievements
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Official recognitions earned across high-volume healthcare appointment campaigns and condominium property sales.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'All'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Honors ({certifications.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('Healthcare BPO')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'Healthcare BPO'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Healthcare BPO (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('Sales & Real Estate')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'Sales & Real Estate'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Real Estate Sales (3)
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between hover:border-stone-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-stone-500">{cert.dateOrPeriod}</span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                <div className="my-3 py-2 px-3 rounded-lg bg-amber-50/70 border border-amber-200/50">
                  <p className="text-xs font-semibold text-amber-900">{cert.highlightText}</p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {cert.details}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">Awarded to {cert.recipient}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span>Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed inspection of certificate */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 rounded-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Verified Achievement Record</span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-1">
                {selectedCert.title}
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Issuing Organization: <strong className="text-stone-800">{selectedCert.issuer}</strong>
              </p>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2 mb-4 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-500">Recipient Name</span>
                  <span className="font-semibold text-stone-900">{selectedCert.recipient}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-500">Performance Period</span>
                  <span className="font-semibold text-stone-900">{selectedCert.dateOrPeriod}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-500">Achievement Metric</span>
                  <span className="font-bold text-amber-900">{selectedCert.highlightText}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Industry Track</span>
                  <span className="font-semibold text-stone-900">{selectedCert.category}</span>
                </div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed mb-6">
                {selectedCert.details}
              </p>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Close Record
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
