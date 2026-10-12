import React from 'react';
import {
  Clock,
  CheckCircle2,
  PhoneIncoming,
  Calendar,
  Send,
  Home,
  Award,
  Briefcase,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  const getAccountIcon = (category: string) => {
    switch (category) {
      case 'healthcare':
        return <PhoneIncoming className="w-4 h-4 text-sky-600" />;
      case 'appointment':
        return <Calendar className="w-4 h-4 text-amber-600" />;
      case 'email':
        return <Send className="w-4 h-4 text-indigo-600" />;
      case 'realestate':
        return <Home className="w-4 h-4 text-emerald-600" />;
      default:
        return <Award className="w-4 h-4 text-stone-600" />;
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <ScrollReveal delay={50}>
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-2.5 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-stone-600" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Work Experience
            </h2>
            <p className="mt-1 text-stone-600 text-xs sm:text-sm">
              Professional track record across US Healthcare campaigns, medical appointment setting, and enterprise sales
            </p>
          </div>
        </ScrollReveal>

        {/* All Experience Cards directly listed with Staggered Scroll Animation */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={100 + idx * 80}>
              <div
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden w-full hover:border-stone-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="p-5 sm:p-7">
                  {/* Metadata Pill & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[11px] font-semibold text-sky-800 tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                      {exp.organizationContext}
                    </span>
                    <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Role Title with Category Icon */}
                  <div className="flex items-start sm:items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200/60 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-hover:scale-105 transition-transform duration-200">
                      {getAccountIcon(exp.category)}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug group-hover:text-stone-700 transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Specific key highlights / competencies */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tools Used Pills */}
                  {exp.toolsUsed && exp.toolsUsed.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mr-1">
                        Tools:
                      </span>
                      {exp.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md text-[11px] font-medium border border-stone-200/60 hover:bg-stone-200 hover:text-stone-900 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
