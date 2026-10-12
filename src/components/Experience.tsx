import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  PhoneIncoming,
  Calendar,
  Send,
  Home,
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getAccountIcon = (category: string) => {
    switch (category) {
      case 'healthcare':
        return <PhoneIncoming className="w-5 h-5 text-sky-600" />;
      case 'appointment':
        return <Calendar className="w-5 h-5 text-amber-600" />;
      case 'email':
        return <Send className="w-5 h-5 text-indigo-600" />;
      case 'realestate':
        return <Home className="w-5 h-5 text-emerald-600" />;
      default:
        return <Award className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20 border-b border-stone-200 bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <ScrollReveal delay={50}>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-2.5 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-stone-600" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Work Experience
            </h2>
            <p className="mt-1.5 text-stone-600 text-sm sm:text-base leading-relaxed">
              Professional track record across US Healthcare campaigns, medical appointment setting, and enterprise sales
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Cards with Expand/Collapse for Desktop */}
        <div className="space-y-4 lg:space-y-5">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIds.has(exp.id);

            return (
              <ScrollReveal key={exp.id} delay={100 + idx * 80}>
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs hover:border-stone-300 hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Card Header Row */}
                  <div className="p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Role Icon, Title, Organization & Duration */}
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-stone-100 border border-stone-200/70 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        {getAccountIcon(exp.category)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-xl font-bold text-stone-900 tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-[11px] font-semibold text-sky-800 tracking-wide max-w-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                            <span className="truncate">{exp.organizationContext}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-500 shrink-0">
                            <Clock className="w-3 h-3 text-stone-400 shrink-0" />
                            <span>{exp.duration}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Technologies Pills (Desktop view) */}
                    {exp.toolsUsed && exp.toolsUsed.length > 0 && (
                      <div className="hidden lg:flex items-center gap-1.5 flex-wrap max-w-sm justify-center">
                        {exp.toolsUsed.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-stone-50 text-stone-700 rounded-lg text-xs font-medium border border-stone-200/60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Right: Expand / Collapse Toggle Button (Full width on mobile, consistent fixed size on desktop) */}
                    <div className="w-full lg:w-auto shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-stone-100 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full lg:w-[136px] lg:h-[40px] inline-flex items-center justify-center gap-2 px-4 py-2.5 lg:py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200/80 transition-all cursor-pointer shadow-2xs active:scale-[0.98] whitespace-nowrap shrink-0"
                      >
                        <span className="whitespace-nowrap">{isExpanded ? 'Hide Details' : 'Expand Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-stone-600 transition-transform shrink-0" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-stone-600 transition-transform shrink-0" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Area (Shown ONLY when expand is clicked) */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-7 sm:pb-8 lg:px-8 lg:pb-8 pt-3 border-t border-stone-100 bg-[#FAF9F6]/50 transition-all">
                      {/* Mobile technologies block */}
                      {exp.toolsUsed && exp.toolsUsed.length > 0 && (
                        <div className="lg:hidden mb-5">
                          <h5 className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                            Technologies & Platforms
                          </h5>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {exp.toolsUsed.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 bg-white text-stone-700 rounded-lg text-xs font-medium border border-stone-200/60"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Responsibilities & Impact Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        {/* Core Responsibility & Role Overview */}
                        <div className="lg:col-span-5 space-y-2">
                          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                            Core Responsibility & Role Overview
                          </h4>
                          <div className="p-4 rounded-xl bg-white border border-stone-200/60 shadow-2xs">
                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                              {exp.summary}
                            </p>
                          </div>
                        </div>

                        {/* Key Deliverables & Campaign Impact */}
                        {exp.highlights && exp.highlights.length > 0 && (
                          <div className="lg:col-span-7 space-y-2">
                            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                              Key Deliverables & Campaign Impact
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {exp.highlights.map((highlight, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="p-3 rounded-xl bg-white border border-stone-200/60 shadow-2xs flex items-start gap-2.5 hover:border-stone-300 transition-colors"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span className="text-xs text-stone-700 leading-snug">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
