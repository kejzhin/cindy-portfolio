import React from 'react';
import { Award, User, ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={0} duration={650}>
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 text-balance leading-tight">
                  Allan Vincent <span className="font-serif italic font-normal text-stone-700">(Cindy)</span> Balasbas
                </h1>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                  Dedicated professional with <strong className="text-stone-900 font-semibold">more than 5 years</strong> in the BPO industry handling US Healthcare accounts. Proven track record in Medical Records Retrieval (MRR), appointment setting, claims processing, and multi-million peso real estate sales.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={650}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-center justify-center flex items-center"
                >
                  Contact Directly
                </button>
                <a
                  href="#about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FAF8F5] hover:bg-[#F3EEE3] text-stone-800 text-sm font-medium rounded-xl border border-[#DDD5C5] transition-all duration-200 group text-center shadow-2xs"
                >
                  <span>Explore Background</span>
                  <ArrowDown className="w-4 h-4 text-stone-500 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Blank Professional Placeholder Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal direction="up" delay={200} duration={700} className="w-full max-w-sm">
              <div className="relative w-full">
                {/* Outer blank frame */}
                <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-md p-3 hover:shadow-lg hover:border-stone-300 transition-all duration-300 group">
                  <div className="relative aspect-square rounded-xl bg-stone-50 border border-dashed border-stone-300 flex flex-col items-center justify-center text-center p-8 transition-colors group-hover:bg-[#FAF8F5]">
                    <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <User className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold text-stone-700">Allan Vincent Balasbas</p>
                    <p className="text-xs text-stone-400 mt-1">Professional Portfolio</p>
                  </div>

                  {/* Caption Bar */}
                  <div className="p-3 bg-white text-center mt-1">
                    <p className="text-sm font-bold text-stone-900">Allan Vincent Balasbas</p>
                    <p className="text-xs text-stone-500">Healthcare BPO & Appointment Setting Specialist</p>
                  </div>
                </div>

                {/* Floating Award Badge with smooth subtle hover */}
                <div className="absolute -bottom-4 left-2 sm:-bottom-5 sm:-left-5 bg-white border border-stone-200 rounded-xl p-2.5 sm:p-3 shadow-md flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-1rem)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-stone-900 leading-tight truncate">Top Appointment Setter</p>
                    <p className="text-[11px] text-stone-500 truncate">256 Scheduled · EpiSource</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
