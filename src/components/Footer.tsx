import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1B16] text-[#D8D0C3] py-12 border-t border-[#362E25] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#362E25]">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold text-[#FAF8F5]">Allan Vincent (Cindy) Balasbas</h3>
            <p className="text-xs text-[#B3A897] mt-1">
              US Healthcare BPO Specialist · Appointment Setter · Real Estate Sales
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#EFEADF] hover:text-white bg-[#2D261E] hover:bg-[#3D342A] rounded-lg transition-colors cursor-pointer border border-[#4A3F33]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9382]">
          <p>© {new Date().getFullYear()} Allan Vincent Balasbas. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <a
              href={`mailto:${portfolioData.contactInfo.email}`}
              className="hover:text-[#FAF8F5] transition-colors break-all"
            >
              {portfolioData.contactInfo.email}
            </a>
            <span aria-hidden="true" className="text-[#5A4E40]">·</span>
            <span>{portfolioData.contactInfo.phone}</span>
            <span aria-hidden="true" className="text-[#5A4E40]">·</span>
            <a
              href={portfolioData.contactInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FAF8F5] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
