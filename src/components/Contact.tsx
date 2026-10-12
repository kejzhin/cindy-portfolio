import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Copy, Check, Download, ExternalLink, Clock, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LinkedInIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { contactInfo, personalInfo } = portfolioData;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  // Generate downloadable .vcf vCard file for easy 1-click address book saving
  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Balasbas;Allan Vincent;;;',
      'FN:Allan Vincent (Cindy) Balasbas',
      'ORG:Healthcare BPO & Appointment Setting',
      'TITLE:US Healthcare BPO Specialist & Appointment Setter',
      `EMAIL;TYPE=INTERNET,PREF:${contactInfo.email}`,
      `TEL;TYPE=CELL,VOICE:${contactInfo.phoneRaw}`,
      `URL:${contactInfo.linkedinUrl}`,
      'NOTE:More than 5 years US Healthcare BPO, EpiSource Top Appointment Setter (256 Scheduled), Real Estate Sales.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Allan_Vincent_Cindy_Balasbas.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            Contact Information
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            Reach out directly via email, WhatsApp, mobile, or LinkedIn. No forms required — instant response guaranteed.
          </p>
        </div>

        {/* 2-Column Grid: Left Sticky Note + Right Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authentic Note Card from Slide 16 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-amber-50/90 border-2 border-amber-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-800 font-bold mb-4">
                <Sparkles className="w-4 h-4" />
              </div>
              <blockquote className="font-serif italic text-lg sm:text-xl text-stone-800 leading-snug mb-4">
                “{personalInfo.quote}”
              </blockquote>
              <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs text-stone-600">
                <div>
                  <p className="font-bold text-stone-900">Allan Vincent (Cindy) Balasbas</p>
                  <p className="text-[11px] text-stone-500">Healthcare BPO Specialist</p>
                </div>
                <span className="text-[11px] text-amber-800 font-medium">Philippines</span>
              </div>
            </div>

            {/* Quick availability box */}
            <div className="bg-white rounded-xl border border-stone-200/80 p-5 space-y-3 text-xs">
              <div className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                Availability & Working Hours
              </div>
              <div className="flex items-start gap-2.5 text-stone-600">
                <Clock className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-stone-800">Timezone:</strong> Philippine Standard Time (UTC+8)
                  <p className="text-stone-500 mt-0.5">Fully adaptable to US EST, CST, and PST business shifts.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-stone-600 pt-2 border-t border-stone-100">
                <MapPin className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-stone-800">Location:</strong> Philippines
                  <p className="text-stone-500 mt-0.5">Equipped with reliable home office, fiber internet & backup power.</p>
                </div>
              </div>

              {/* VCard Download button */}
              <div className="pt-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Contact Card (.vcf)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Channel Cards (No Form) */}
          <div className="lg:col-span-7 space-y-4">
            {/* 1. Email Card */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 shadow-xs hover:border-stone-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-base sm:text-lg font-bold text-stone-900 select-all font-mono">
                      {contactInfo.email}
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Direct inbox for proposals, job inquiries, and contract terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.email, 'email')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
                  >
                    <span>Send Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. WhatsApp & Phone Card */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 shadow-xs hover:border-stone-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      WhatsApp & Mobile
                    </div>
                    <div className="text-base sm:text-lg font-bold text-stone-900 select-all font-mono">
                      {contactInfo.phone}
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Fastest response channel for voice, SMS, and WhatsApp messages.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.phoneRaw, 'phone')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. LinkedIn Card */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 shadow-xs hover:border-stone-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center shrink-0">
                    <LinkedInIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      LinkedIn Profile
                    </div>
                    <div className="text-base sm:text-lg font-bold text-stone-900 truncate max-w-xs sm:max-w-md">
                      Allan Vincent Balasbas
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Connect on LinkedIn for endorsements, verified track record, and direct messaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.linkedinUrl, 'linkedin')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                    title="Copy LinkedIn Link"
                  >
                    {copiedKey === 'linkedin' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={contactInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-colors"
                  >
                    <span>View LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
