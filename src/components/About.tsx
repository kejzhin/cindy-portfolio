import React from 'react';
import { HeartHandshake, ShieldCheck, PhoneCall, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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

  return (
    <section id="about" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            About Me
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Professional journey, healthcare BPO expertise, and technical aptitude.
          </p>
        </div>

        {/* Story Box */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 md:p-10 shadow-sm mb-10">
          <div className="max-w-4xl space-y-4 text-stone-700 leading-relaxed text-base">
            <p className="text-lg font-medium text-stone-900">
              “Hi, My name is <span className="font-semibold text-stone-950">Allan Vincent Balasbas</span> (Cindy). I've been in the BPO industry for <span className="text-stone-950 font-semibold underline decoration-amber-400 decoration-2 underline-offset-4">more than 5 years</span> handling US Healthcare accounts.”
            </p>
            <p>
              Throughout my healthcare BPO career, I have specialized in bridging communication between American patients, insurance providers, and healthcare facilities. Whether assisting patients with health plan benefits and claims on live customer service queues, or coordinating with clinic staff for vital Risk Adjustment and HEDIS medical chart retrievals, my mission is always accuracy, patient empathy, and high conversion.
            </p>
            <p>
              In addition to my healthcare campaigns, I bring 2 years of successful experience as a Real Estate Agent selling high-value condominium properties in the Philippines, where I sharpened negotiation, client consultation, and tailored investment proposal skills.
            </p>
          </div>
        </div>

        {/* Key Metrics Strip placed in About Me */}
        <div className="mb-12 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
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

        {/* Core Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreStrengths.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200/80 p-5 hover:border-stone-300 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
