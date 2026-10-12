import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Phone,
  Copy,
  Check,
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
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#E8E3D7] bg-[#F7F4EC] w-full overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered & Balanced Section Header */}
        <ScrollReveal delay={50}>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEADF] border border-[#DDD5C5] text-[#7A6445] text-xs font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Direct Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2D2820]">
              Contact Information
            </h2>
            <p className="mt-2.5 text-[#6B6255] text-sm sm:text-base leading-relaxed">
              Reach out directly via email, WhatsApp, mobile, or LinkedIn. Instant response guaranteed for client inquiries and healthcare roles.
            </p>
          </div>
        </ScrollReveal>

        {/* Direct Channel Cards - Clean Stacked Layout with Scroll Reveal */}
        <div className="space-y-4">
          {/* 1. Email Card */}
          <ScrollReveal delay={100}>
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6E0D2] p-5 sm:p-6 shadow-xs hover:border-[#C4B79E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-[#8C642A] uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#2D2820] select-all break-all mt-0.5">
                      {contactInfo.email}
                    </div>
                    <p className="text-xs text-[#6B6255] mt-1">
                      Direct inbox for proposals, job inquiries, and contract terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.email, 'email')}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#4A4237] bg-[#EFEADF] hover:bg-[#E4DDCF] rounded-lg transition-colors cursor-pointer border border-[#DDD5C5] active:scale-95"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7A6445]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#FFFDF8] bg-[#2D2820] hover:bg-[#1C1813] rounded-lg transition-colors shadow-xs active:scale-95"
                  >
                    <span>Send Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. WhatsApp & Phone Card */}
          <ScrollReveal delay={160}>
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6E0D2] p-5 sm:p-6 shadow-xs hover:border-[#C4B79E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-[#8C642A] uppercase tracking-wider">
                      WhatsApp & Mobile
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#2D2820] select-all break-words mt-0.5">
                      {contactInfo.phone}
                    </div>
                    <p className="text-xs text-[#6B6255] mt-1">
                      Fastest response channel for voice calls, SMS, and WhatsApp chat.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.phoneRaw, 'phone')}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#4A4237] bg-[#EFEADF] hover:bg-[#E4DDCF] rounded-lg transition-colors cursor-pointer border border-[#DDD5C5] active:scale-95"
                    title="Copy Phone"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7A6445]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs active:scale-95"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. LinkedIn Card */}
          <ScrollReveal delay={220}>
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6E0D2] p-5 sm:p-6 shadow-xs hover:border-[#C4B79E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center shrink-0 border border-blue-100">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-[#8C642A] uppercase tracking-wider">
                      LinkedIn Profile
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#2D2820] truncate mt-0.5">
                      Allan Vincent Balasbas
                    </div>
                    <p className="text-xs text-[#6B6255] mt-1">
                      Connect on LinkedIn for endorsements and professional track record.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.linkedinUrl, 'linkedin')}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#4A4237] bg-[#EFEADF] hover:bg-[#E4DDCF] rounded-lg transition-colors cursor-pointer border border-[#DDD5C5] active:scale-95"
                    title="Copy LinkedIn Link"
                  >
                    {copiedKey === 'linkedin' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7A6445]" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={contactInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-colors shadow-xs active:scale-95"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
