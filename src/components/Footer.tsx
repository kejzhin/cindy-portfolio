import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1B16] text-[#D8D0C3] py-12 sm:py-16 border-t border-[#362E25] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#362E25]">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#FAF8F5]">Allan Vincent (Cindy) Balasbas</h3>
            <p className="text-xs sm:text-sm text-[#B3A897] mt-1 max-w-md">
              US Healthcare BPO Specialist · Appointment Setter · Real Estate Sales
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#EFEADF] hover:text-white bg-[#2D261E] hover:bg-[#3D342A] rounded-xl transition-colors cursor-pointer border border-[#4A3F33] shadow-xs active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Footer Row - Clean Stacked / Responsive Layout */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#9E9382]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Allan Vincent Balasbas. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <a
              href={`mailto:${portfolioData.contactInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B3A897]" />
              <span>{portfolioData.contactInfo.email}</span>
            </a>

            <div className="hidden sm:block text-[#5A4E40]">|</div>

            <div className="inline-flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#B3A897]" />
              <span>{portfolioData.contactInfo.phone}</span>
            </div>

            <div className="hidden sm:block text-[#5A4E40]">|</div>

            <a
              href={portfolioData.contactInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-[#B3A897]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
