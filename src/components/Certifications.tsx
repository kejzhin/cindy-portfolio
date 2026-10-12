import React, { useState } from 'react';
import { Award, ExternalLink, X, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

import cert1Img from '../assets/images/cert1.jpg';
import cert2Img from '../assets/images/cert2.jpg';
import cert3Img from '../assets/images/cert3.jpg';
import cert4Img from '../assets/images/cert4.jpg';
import cert5Img from '../assets/images/cert5.jpg';

const certImages = [cert2Img, cert1Img, cert3Img, cert4Img, cert5Img];

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-[#E8E3D7] bg-[#F7F4EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered & Beautifully Aligned Header */}
        <ScrollReveal delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEADF] border border-[#DDD5C5] text-[#7A6445] text-xs font-semibold mb-3 shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Honors & Recognitions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2D2820]">
              Certifications & Achievements
            </h2>
            <p className="mt-3 text-[#6B6255] text-sm sm:text-base leading-relaxed">
              Official recognitions earned across high-volume healthcare appointment campaigns and multi-million property transactions.
            </p>
          </div>
        </ScrollReveal>

        {/* Re-aligned Grid of Real Certificate Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {certifications.map((cert, idx) => {
            const certImg = certImages[idx % certImages.length];
            return (
              <ScrollReveal key={cert.id} delay={100 + idx * 100} className="h-full">
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="bg-[#FFFDF9] rounded-2xl border border-[#E6E0D2] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-[#C4B79E] hover:shadow-lg hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 group cursor-pointer h-full"
                >
                  <div>
                    {/* Certificate Visual Image Display */}
                    <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden relative mb-5 shadow-sm border border-[#C9A96E]/40 group-hover:border-[#DFBE82] group-hover:shadow-md transition-all duration-300 bg-[#231E18]">
                      <img
                        src={certImg}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/50 border border-white/30 flex items-center justify-center text-[#F2DCB3] group-hover:scale-110 transition-transform duration-200 backdrop-blur-xs">
                        <Trophy className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Text Details Area */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EFEADF] text-[#7A6445] border border-[#DFD6C3]">
                          {cert.category}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2820] tracking-tight leading-snug group-hover:text-[#8C642A] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#665D4F] leading-relaxed line-clamp-2">
                        {cert.details}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Certificate Inspection Modal */}
        {selectedCert && (() => {
          const selectedIdx = certifications.findIndex(c => c.id === selectedCert.id);
          const activeCertImg = certImages[selectedIdx >= 0 ? selectedIdx % certImages.length : 0];
          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#211C15]/75 p-4 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setSelectedCert(null)}
            >
              <div
                className="bg-[#FFFDF9] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#DED7C8] relative max-h-[92vh] overflow-y-auto transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-5 right-5 text-[#8C8273] hover:text-[#2D2820] p-1.5 rounded-lg hover:bg-[#F2ECE0] transition-colors cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A5B27] mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#A57834]" />
                  <span>Official Certificate Record</span>
                </div>

                {/* Large Certificate Image Preview Display */}
                <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden relative my-4 border-2 border-[#DFBE82]/50 shadow-xl bg-black/90 flex items-center justify-center">
                  <img
                    src={activeCertImg}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-[#F2DCB3]">{selectedCert.issuer}</span>
                    <span className="font-mono text-[11px]">{selectedCert.dateOrPeriod}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EFEADF] text-[#7A6445] border border-[#DFD6C3]">
                      {selectedCert.category}
                    </span>
                    <span className="text-xs text-[#8C642A] font-medium">{selectedCert.highlightText}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2D2820]">
                    {selectedCert.title}
                  </h3>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6E5D] mb-1">Award Overview & Details</h4>
                <p className="text-xs sm:text-sm text-[#5C5346] leading-relaxed mb-6">
                  {selectedCert.details}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#EFEADF]">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A6445]">
                    <CheckCircle2 className="w-4 h-4 text-[#437A4C]" />
                    <span>Authentic Credential Record (Verified)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2.5 bg-[#3B3226] hover:bg-[#2B241A] text-[#FFFDF9] text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm active:scale-95"
                  >
                    Close Certificate
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
