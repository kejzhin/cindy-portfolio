import React from 'react';
import { Award, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 text-balance leading-tight">
                Allan Vincent <span className="font-serif italic font-normal text-stone-700">(Cindy)</span> Balasbas
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                Dedicated professional with <strong className="text-stone-900 font-semibold">more than 5 years</strong> in the BPO industry handling US Healthcare accounts. Proven track record in Medical Records Retrieval (MRR), appointment setting, claims processing, and multi-million peso real estate sales.
              </p>
            </div>
          </div>

          {/* Right Column: Blank Professional Placeholder Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              {/* Outer blank frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-md p-3">
                <div className="relative aspect-square rounded-xl bg-stone-50 border border-dashed border-stone-300 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3 shadow-inner">
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

              {/* Floating Award Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white border border-stone-200 rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Top Appointment Setter</p>
                  <p className="text-[11px] text-stone-500">256 Scheduled · EpiSource</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
