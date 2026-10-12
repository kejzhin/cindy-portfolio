import React from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  PhoneCall,
  Database,
  Clock,
  Award,
  TrendingUp,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;

  const coreStrengths = [
    {
      icon: HeartHandshake,
      title: 'Empathetic Healthcare Service',
      description:
        'Patient-first mindset with proven ability to de-escalate sensitive situations, explain complex coverage terms, and guide members through insurance benefits with care.',
    },
    {
      icon: PhoneCall,
      title: 'High-Volume Appointment Setting',
      description:
        'Proven expertise conducting outbound outreach to US hospitals, medical groups, and clinics for Risk Adjustment and HEDIS reviews, resulting in 256 scheduled site visits.',
    },
    {
      icon: ShieldCheck,
      title: 'HIPAA & Compliance Discipline',
      description:
        'Strict handling of protected health information (PHI) across electronic medical records (EMR), secure faxing, and encrypted email communications.',
    },
    {
      icon: Database,
      title: 'BSIS Technical Foundation',
      description:
        'Degree in Information Systems from La Concepcion College, providing rapid technical fluency with CRM systems (Salesforce), EMR (OPM), and productivity suites.',
    },
  ];

  // Enhanced metrics with icons and dedicated mobile presentation
  const metricCards = [
    {
      icon: Clock,
      label: 'BPO Experience',
      mobileLabel: 'BPO Experience',
      value: '5+ Years',
      sub: 'US Healthcare accounts',
    },
    {
      icon: Award,
      label: 'Top Performer',
      mobileLabel: 'Top Performer',
      value: '256 Scheduled',
      sub: 'EpiSource Appointment Setter',
    },
    {
      icon: TrendingUp,
      label: 'Real Estate Sales',
      mobileLabel: 'Real Estate',
      value: '₱18.6M+ TCP',
      sub: 'Condominium properties closed',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      mobileLabel: 'Education',
      value: 'BSIS',
      sub: 'Bachelor in Info Systems',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-16 md:py-20 border-b border-[#E8E3D7] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal delay={50}>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEADF] border border-[#DDD5C5] text-[#7A6445] text-xs font-semibold mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Profile & Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2820]">
              About Me
            </h2>
            <p className="mt-2 text-[#6B6255] text-sm sm:text-base leading-relaxed">
              Professional journey, healthcare BPO expertise, and technical aptitude.
            </p>
          </div>
        </ScrollReveal>

        {/* Story Box */}
        <ScrollReveal delay={100}>
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6E0D2] p-5 sm:p-8 md:p-10 shadow-xs mb-8 sm:mb-10 hover:border-[#DFD6C3] transition-all duration-300">
            <div className="max-w-4xl space-y-4 text-[#5A5245] leading-relaxed text-sm sm:text-base">
              <p className="text-base sm:text-lg font-medium text-[#2D2820]">
                “Hi, My name is <span className="font-semibold text-[#1C1813]">Allan Vincent Balasbas</span> (Cindy). I've been in the BPO industry for <span className="text-[#1C1813] font-semibold underline decoration-[#DFBE82] decoration-2 underline-offset-4">more than 5 years</span> handling US Healthcare accounts.”
              </p>
              <p>
                Throughout my healthcare BPO career, I have specialized in bridging communication between American patients, insurance providers, and healthcare facilities. Whether assisting patients with health plan benefits and claims on live customer service queues, or coordinating with clinic staff for vital Risk Adjustment and HEDIS medical chart retrievals, my mission is always accuracy, patient empathy, and high conversion.
              </p>
              <p>
                In addition to my healthcare campaigns, I bring 2 years of successful experience as a Real Estate Agent selling high-value condominium properties in the Philippines, where I sharpened negotiation, client consultation, and tailored investment proposal skills.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Key Metrics Container - Clean without "Verified Record", with Smooth Scrolling & Hover Transitions */}
        <ScrollReveal delay={150}>
          <div className="mb-10 sm:mb-12 bg-[#FFFDF9] rounded-2xl border border-[#E6E0D2] p-3.5 sm:p-6 md:p-8 shadow-xs hover:border-[#DFD6C3] transition-all duration-300">
            {/* Mobile Only: Card Header (Verified Record removed) */}
            <div className="sm:hidden flex items-center gap-1.5 pb-2.5 mb-3 border-b border-[#EAE4D6] text-[11px] font-bold text-[#8C642A] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
              <span>Career Highlights</span>
            </div>

            {/* Mobile Version: Balanced 2x2 Grid with Equal Heights & Zero Awkward Wrapping */}
            <div className="grid grid-cols-2 gap-2.5 sm:hidden items-stretch">
              {metricCards.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF7F2] rounded-xl border border-[#E8E2D5] p-3 flex flex-col justify-between shadow-2xs hover:border-[#C4B79E] hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300"
                  >
                    <div>
                      {/* Header: Icon + Category Badge */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-6 h-6 rounded-md bg-[#EFEADF] text-[#8C642A] flex items-center justify-center shrink-0 border border-[#DDD5C5]/70">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-bold text-[#8C642A] uppercase tracking-wider truncate">
                          {item.mobileLabel}
                        </span>
                      </div>

                      {/* Highlight Value with whitespace-nowrap and proportional font */}
                      <div className="my-1">
                        <div className="text-[15px] xs:text-base font-extrabold text-[#2D2820] tracking-tight whitespace-nowrap">
                          {item.value}
                        </div>
                      </div>
                    </div>

                    {/* Subtitle firmly anchored at the bottom */}
                    <div className="mt-2 pt-1.5 border-t border-[#EAE4D6]/70">
                      <p className="text-[11px] text-[#6B6255] leading-snug line-clamp-2">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Version: 4-Column Balanced Grid */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-5 lg:gap-6 items-stretch">
              {metricCards.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF7F2] rounded-xl border border-[#E8E2D5] p-5 flex flex-col justify-between hover:border-[#C4B79E] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EFEADF] text-[#8C642A] flex items-center justify-center shrink-0 border border-[#DDD5C5] group-hover:scale-105 transition-transform duration-200">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#8C642A] uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>

                      <div className="text-2xl lg:text-3xl font-extrabold text-[#2D2820] tracking-tight">
                        {item.value}
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#EAE4D6]/70">
                      <p className="text-xs text-[#6B6255] leading-relaxed">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Core Strengths Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {coreStrengths.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} delay={200 + idx * 75} className="h-full">
                <div
                  className="bg-[#FFFDF9] rounded-xl border border-[#E6E0D2] p-5 hover:border-[#C4B79E] hover:shadow-md hover:-translate-y-1 transition-all duration-300 shadow-xs flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#EFEADF] flex items-center justify-center text-[#7A6445] mb-4 border border-[#DDD5C5] group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5 text-[#8C642A]" />
                    </div>
                    <h4 className="text-sm font-bold text-[#2D2820] mb-2">{item.title}</h4>
                    <p className="text-xs text-[#6B6255] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
