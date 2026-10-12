import React from 'react';
import { Headphones, CalendarCheck, Mail, Building2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      default:
        return <Headphones className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal delay={50}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-stone-600" />
              <span>Core Strengths</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
              Personal Skills
            </h2>
            <p className="mt-2.5 text-stone-600 text-sm sm:text-base leading-relaxed">
              Specialized operational capabilities honed through healthcare BPO campaigns and high-ticket sales.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Clean Skill Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, idx) => (
            <ScrollReveal key={skill.id} delay={100 + idx * 80} className="h-full">
              <div
                className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-white shadow-xs hover:border-stone-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group cursor-default"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-stone-900 text-white flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 group-hover:bg-[#8C642A] transition-all duration-300">
                    {getIcon(skill.iconName)}
                  </div>
                  <h3 className="font-bold text-stone-900 text-base mb-2 group-hover:text-stone-700 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{skill.shortDesc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
