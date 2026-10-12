import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import profileImg from '../assets/images/profile.png';

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
            <ScrollReveal delay={0} duration={650}>
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 text-balance leading-tight">
                  Allan Vincent <span className="font-serif italic font-normal text-stone-700">(Cindy)</span> Balasbas
                </h1>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                  Dedicated professional with <strong className="text-stone-900 font-semibold">more than 5 years</strong> in the BPO industry handling US Healthcare accounts. Proven track record in Medical Records Retrieval (MRR), appointment setting, claims processing, and multi-million peso real estate sales.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} duration={650}>
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

          {/* Right Column: Profile Picture (No background, No shapes) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={200} duration={700} className="w-full max-w-xs sm:max-w-sm">
              <div className="relative w-full flex justify-center items-end">
                <img
                  src={profileImg}
                  alt="Allan Vincent Balasbas"
                  className="w-full max-h-[520px] object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
