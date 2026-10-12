import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  const academicHighlights = [
    {
      title: 'Information Systems Architecture',
      description: 'System analysis, enterprise business processes, and IT systems lifecycle.',
    },
    {
      title: 'Database Management & Data Entry',
      description: 'Structured query design, record normalization, and high-accuracy data handling.',
    },
    {
      title: 'Software Integration & Workflow Tools',
      description: 'Hands-on familiarity with cloud platforms, CRM structures, and digital communication.',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 border-b border-stone-200 bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={50}>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-2.5 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-stone-600" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
              Education
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Formal technical education providing the analytical foundation for healthcare software and data operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Degree Card with Scroll Reveal */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-5 sm:p-8 md:p-10 shadow-xs hover:border-stone-300 hover:shadow-md transition-all duration-300">
            {/* Header: Icon + Degree + Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 pb-6 border-b border-stone-100">
              <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0 shadow-2xs border border-amber-200/40">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                    {education.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-600 mt-1.5">
                    <span className="font-semibold text-stone-800">{education.institution}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500">{education.status}</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-mono font-semibold self-start sm:self-auto border border-stone-200/70 shadow-2xs shrink-0">
                <span>{education.period}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="lg:col-span-7 space-y-2.5">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Program Focus & Rigor
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Specialized in Information Systems (IS), emphasizing the strategic design and management of data-driven business processes, enterprise software workflows, and structured technical data. This foundation powers rapid adaptation to complex EMR tools and CRM systems in US healthcare environments.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-2.5">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Core Academic Modules
                </h4>
                <div className="space-y-2.5">
                  {academicHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/60 hover:bg-stone-100/70 hover:border-stone-300 transition-all duration-200"
                    >
                      <h5 className="text-xs font-bold text-stone-800">{item.title}</h5>
                      <p className="text-xs text-stone-500 mt-1 leading-snug">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
