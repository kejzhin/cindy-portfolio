import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Award, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Generated image asset
import heroPortrait from '../assets/images/hero_professional_portrait_1791753481153.jpg';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { personalInfo, contactInfo } = portfolioData;

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" aria-hidden="true"></span>
              <span>US Healthcare BPO Specialist & Appointment Setter</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 text-balance leading-tight">
                Allan Vincent <span className="font-serif italic font-normal text-stone-700">(Cindy)</span> Balasbas
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                27-year-old dedicated professional with <strong className="text-stone-900 font-semibold">3 years and 8 months</strong> in the BPO industry handling US Healthcare accounts. Proven track record in Medical Records Retrieval (MRR), appointment setting, claims processing, and multi-million peso real estate sales.
              </p>
            </div>

            {/* Direct Quick Action CTAs (No form - direct contact triggers) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email Cindy Directly</span>
              </a>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+63 961 942 7143)</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 text-xs font-medium rounded-lg transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quiet metadata line */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500">
              <span>{personalInfo.location}</span>
              <span aria-hidden="true">·</span>
              <span>27 Years Old</span>
              <span aria-hidden="true">·</span>
              <span>US Shift Compatible</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-medium">Ready for immediate onboarding</span>
            </div>
          </div>

          {/* Right Column: Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              {/* Outer photo frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-md p-2">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src={heroPortrait}
                    alt="Allan Vincent (Cindy) Balasbas portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback in case of asset loading failure
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* CSS Fallback container if image fails */}
                  <div className="hidden only:flex w-full h-full items-center justify-center bg-stone-100 text-stone-500 p-6 text-center">
                    <div>
                      <p className="font-semibold text-stone-800">Allan Vincent Balasbas</p>
                      <p className="text-xs text-stone-500 mt-1">Healthcare BPO Specialist</p>
                    </div>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-3 bg-white text-center">
                  <p className="text-sm font-bold text-stone-900">Allan Vincent Balasbas</p>
                  <p className="text-xs text-stone-500">Healthcare BPO & Appointment Setting Specialist</p>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white border border-stone-200 rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Top Appointment Setter</p>
                  <p className="text-[11px] text-stone-500">256 Site Schedules · EpiSource</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Strip below the split */}
        <div className="mt-14 pt-8 border-t border-stone-200/70">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {personalInfo.metrics.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-mono tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-stone-800">{item.label}</div>
                <div className="text-[11px] text-stone-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
