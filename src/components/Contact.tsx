import React from 'react';
import {
  Mail,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

const LinkedInIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { contactInfo } = portfolioData;

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#E8E3D7] bg-[#F7F4EC] w-full overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <ScrollReveal delay={50}>
          <div className="text-center max-w-lg mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEADF] border border-[#DDD5C5] text-[#7A6445] text-xs font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Direct Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2D2820]">
              Get in Touch
            </h2>
            <p className="mt-2.5 text-[#6B6255] text-sm sm:text-base leading-relaxed">
              Reach out directly for proposals, job inquiries, and healthcare leadership opportunities.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile-Optimized Redesigned Cards */}
        <div className="space-y-5 sm:space-y-6">
          {/* 1. Email Card */}
          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5EFE6] rounded-2xl sm:rounded-3xl border border-[#E4DBC8] p-5 sm:p-7 shadow-xs hover:border-[#C4B79E] hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-100/70 text-red-700 flex items-center justify-center shrink-0 border border-red-200/80 shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-[#8C642A] uppercase tracking-wider mb-0.5">
                    Email Address
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#2D2820] select-all break-all tracking-tight">
                    {contactInfo.email}
                  </div>
                  <p className="text-xs text-[#6B6255] mt-1 leading-relaxed">
                    Direct inbox for proposals, contracts, and career opportunities.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE2D2]">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-[#FFFDF8] bg-[#2D2820] hover:bg-[#1C1813] rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#F2DCB3]" />
                  <span>Send Email Directly</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. WhatsApp & Phone Card */}
          <ScrollReveal delay={180}>
            <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5EFE6] rounded-2xl sm:rounded-3xl border border-[#E4DBC8] p-5 sm:p-7 shadow-xs hover:border-[#C4B79E] hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/80 shadow-2xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-[#8C642A] uppercase tracking-wider mb-0.5">
                    WhatsApp & Mobile
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#2D2820] select-all break-words tracking-tight">
                    {contactInfo.phone}
                  </div>
                  <p className="text-xs text-[#6B6255] mt-1 leading-relaxed">
                    Fastest response channel for voice calls, SMS, and WhatsApp chat.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE2D2]">
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. LinkedIn Card */}
          <ScrollReveal delay={260}>
            <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5EFE6] rounded-2xl sm:rounded-3xl border border-[#E4DBC8] p-5 sm:p-7 shadow-xs hover:border-[#C4B79E] hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100/70 text-[#0A66C2] flex items-center justify-center shrink-0 border border-blue-200/80 shadow-2xs group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-[#8C642A] uppercase tracking-wider mb-0.5">
                    LinkedIn Profile
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#2D2820] truncate tracking-tight">
                    Allan Vincent Balasbas
                  </div>
                  <p className="text-xs text-[#6B6255] mt-1 leading-relaxed">
                    Connect on LinkedIn for endorsements and verified professional track record.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE2D2]">
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-100" />
                  <span>View LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
