import React from 'react';
import { GraduationCap, Award, BookOpen, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
            04. Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            Education
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            Formal technical education providing the analytical foundation for healthcare software and data operations.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600 mt-1">
                  <span className="font-semibold text-stone-800">{education.institution}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-500">{education.status}</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-mono font-semibold self-start md:self-auto">
              <span>{education.period}</span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                How BSIS Powers Daily Performance
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {education.relevance}
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                The Bachelor of Science in Information Systems curriculum bridges the gap between organizational processes and technical systems. This allows Allan Vincent to handle fast-paced BPO tasks without technical friction, accurately manage EMR data schemas, and troubleshoot software errors autonomously.
              </p>
            </div>

            <div className="lg:col-span-5 bg-stone-50 rounded-xl p-5 border border-stone-200/70 space-y-3">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Key Academic Competencies
              </h4>
              <div className="space-y-3 text-xs">
                {academicHighlights.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" aria-hidden="true" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-stone-500 pl-3 leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
