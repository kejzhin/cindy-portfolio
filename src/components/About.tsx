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
        'Proven expertise conducting outbound outreach to US hospitals, medical groups, and clinics for Risk Adjustment and HEDIS reviews, resulting in 256 confirmed site visits.',
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
          <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
            01. Background & Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            About Me
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Professional journey, healthcare BPO expertise, and technical aptitude.
          </p>
        </div>

        {/* Story Box */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 md:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-stone-700 leading-relaxed text-base">
              <p className="text-lg font-medium text-stone-900">
                “Hi, My name is <span className="font-semibold text-stone-950">Allan Vincent Balasbas</span> (Cindy). I am 27 years old. I've been in the BPO industry for <span className="text-stone-950 font-semibold underline decoration-amber-400 decoration-2 underline-offset-4">3 years and 8 months</span> handling US Healthcare accounts.”
              </p>
              <p>
                Throughout my healthcare BPO career, I have specialized in bridging communication between American patients, insurance providers, and healthcare facilities. Whether assisting patients with health plan benefits and claims on live customer service queues, or coordinating with clinic staff for vital Risk Adjustment and HEDIS medical chart retrievals, my mission is always accuracy, patient empathy, and high conversion.
              </p>
              <p>
                In addition to my healthcare campaigns, I bring 2 years of successful experience as a Real Estate Agent selling high-value condominium properties in the Philippines, where I sharpened negotiation, client consultation, and tailored investment proposal skills.
              </p>
            </div>

            {/* Quick Fact Column */}
            <div className="lg:col-span-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 space-y-3 text-sm">
              <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-stone-500">
                Quick Profile Overview
              </h3>
              <div className="divide-y divide-stone-200/70 text-xs">
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Full Name</span>
                  <span className="font-medium text-stone-900">Allan Vincent Balasbas</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Preferred Name</span>
                  <span className="font-medium text-stone-900">Cindy</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Age</span>
                  <span className="font-medium text-stone-900">27 Years Old</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Location</span>
                  <span className="font-medium text-stone-900">Philippines (PHT / UTC+8)</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Primary Domain</span>
                  <span className="font-medium text-stone-900">US Healthcare BPO</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Degree</span>
                  <span className="font-medium text-stone-900">BS Information Systems</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-500">Shift Availability</span>
                  <span className="font-medium text-emerald-700">US Day & Night Shifts</span>
                </div>
              </div>
            </div>
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
