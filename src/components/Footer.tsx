import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <h3 className="text-base font-bold text-white">Allan Vincent (Cindy) Balasbas</h3>
            <p className="text-xs text-stone-400 mt-1">
              US Healthcare BPO Specialist · Appointment Setter · Real Estate Sales
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Allan Vincent Balasbas. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${portfolioData.contactInfo.email}`} className="hover:text-stone-300 transition-colors">
              {portfolioData.contactInfo.email}
            </a>
            <span aria-hidden="true">·</span>
            <span>{portfolioData.contactInfo.phone}</span>
            <span aria-hidden="true">·</span>
            <a
              href={portfolioData.contactInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
