import React, { useState } from 'react';
import { Headphones, CalendarCheck, Mail, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeSkillId, setActiveSkillId] = useState<string>(skills[0].id);

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
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const selectedSkill = skills.find((s) => s.id === activeSkillId) || skills[0];

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
            Personal Skills
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Four specialized operational capabilities honed through healthcare BPO campaigns and high-ticket sales.
          </p>
        </div>

        {/* 4 Cards Grid / Interactive Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {skills.map((skill) => {
            const isActive = skill.id === activeSkillId;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => setActiveSkillId(skill.id)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-stone-900 shadow-md ring-1 ring-stone-900'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                    isActive ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  {getIcon(skill.iconName)}
                </div>
                <h3 className="font-bold text-stone-900 text-sm mb-1">{skill.title}</h3>
                <p className="text-xs text-stone-500 line-clamp-2">{skill.shortDesc}</p>
                <div className="mt-3 flex items-center text-xs font-semibold text-stone-800">
                  <span className={isActive ? 'text-stone-900' : 'text-stone-500'}>View details</span>
                  <ChevronRight className={`w-3.5 h-3.5 ml-1 transition-transform ${isActive ? 'translate-x-1 text-stone-900' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Focus Panel for Selected Skill */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center font-bold">
                {getIcon(selectedSkill.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">{selectedSkill.title}</h3>
                <p className="text-xs text-stone-500">{selectedSkill.shortDesc}</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
              Core Responsibilities & Workflow Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedSkill.keyResponsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50/80 border border-stone-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-700 leading-snug">{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
