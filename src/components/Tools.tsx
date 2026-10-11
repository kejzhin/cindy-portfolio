import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Tools: React.FC = () => {
  const { tools } = portfolioData;

  return (
    <section id="tools" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
            05. Technology & Platforms
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            Tools & Software
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            Platforms and enterprise software Allan Vincent uses daily for appointment setting, CRM logging, and team communication.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200/90 p-5 hover:border-stone-300 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                  <span className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded">
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">{tool.name}</h3>
                <div className="text-xs font-medium text-amber-800 mb-2">{tool.category}</div>
                <p className="text-xs text-stone-600 leading-relaxed">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
