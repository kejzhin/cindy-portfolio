import React from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Tools: React.FC = () => {
  const { tools } = portfolioData;

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Salesforce':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
            <path
              fill="#00A1E0"
              d="M19.16 9.38A5.44 5.44 0 0 0 14.3 6.3a5.53 5.53 0 0 0-4.66 2.54A4.83 4.83 0 0 0 7 8.35a4.87 4.87 0 0 0-4.87 4.87 4.83 4.83 0 0 0 .54 2.22A4.2 4.2 0 0 0 2 17.5 4.19 4.19 0 0 0 6.19 21.7h12.5a3.81 3.81 0 0 0 3.81-3.81 3.77 3.77 0 0 0-3.34-3.77 4.93 4.93 0 0 0 0-4.74Z"
            />
          </svg>
        );
      case 'Slack':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <path
              fill="#36C5F0"
              d="M5.04 10.29a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 0 1 5.04 0v6.3a2.52 2.52 0 0 1-5.04 0v-6.3z"
            />
            <path
              fill="#2EB67D"
              d="M13.71 5.04a2.52 2.52 0 1 1 2.52-2.52v2.52h-2.52zm0 1.26a2.52 2.52 0 0 1 0 5.04H7.41a2.52 2.52 0 0 1 0-5.04h6.3z"
            />
            <path
              fill="#ECB22E"
              d="M18.96 13.71a2.52 2.52 0 1 1 2.52 2.52h-2.52v-2.52zm-1.26 0a2.52 2.52 0 0 1-5.04 0V7.41a2.52 2.52 0 0 1 5.04 0v6.3z"
            />
            <path
              fill="#E01E5A"
              d="M10.29 18.96a2.52 2.52 0 1 1-2.52-2.52v-2.52h2.52zm0-1.26a2.52 2.52 0 0 1 0-5.04h6.3a2.52 2.52 0 0 1 0 5.04h-6.3z"
            />
          </svg>
        );
      case 'Dropbox':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0061FE">
            <path d="M6.02 2 0 6.04l6.02 4.04 5.98-4.04L6.02 2Zm11.96 0L12 6.04l5.98 4.04 6.02-4.04L17.98 2ZM0 14.12l6.02 4.04 5.98-4.04-5.98-4.04L0 14.12Zm17.98-4.04-5.98 4.04 5.98 4.04 6.02-4.04-6.02-4.04ZM12 15.3 6.02 19.34l-1.01-.68v1.36L12 24l6.99-3.98v-1.36l-1.01.68L12 15.3Z" />
          </svg>
        );
      case 'Gmail & Google Workspace':
      case 'Gmail':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <path
              fill="#4285F4"
              d="M22 6.8v11.4a1.8 1.8 0 0 1-1.8 1.8H18V9.6L12 14 6 9.6V20H3.8A1.8 1.8 0 0 1 2 18.2V6.8a1.8 1.8 0 0 1 2.87-1.45L12 10.43l7.13-5.08A1.8 1.8 0 0 1 22 6.8Z"
            />
            <path fill="#EA4335" d="M18 4H6l6 4.5L18 4Z" />
            <path fill="#FBBC04" d="M2 6.8v2.8l10 7.4 10-7.4V6.8A1.8 1.8 0 0 0 19.13 5.35L12 10.43 4.87 5.35A1.8 1.8 0 0 0 2 6.8Z" />
            <path fill="#34A853" d="M2 18.2c0 1 .8 1.8 1.8 1.8H6V9.6L2 6.8v11.4Z" />
          </svg>
        );
      case 'Canva':
        return (
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00C4CC] via-[#007AC9] to-[#7D2AE8] flex items-center justify-center shadow-xs">
            <span className="font-serif italic font-bold text-white text-base tracking-tighter select-none pl-0.5">
              Canva
            </span>
          </div>
        );
      case 'Microsoft Teams':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <rect width="18" height="18" x="4" y="3" rx="3.5" fill="#5059C9" />
            <circle cx="17.5" cy="8.5" r="2.5" fill="#7B83EB" />
            <rect width="7" height="6.5" x="14" y="12" rx="2" fill="#7B83EB" />
            <path fill="#FFFFFF" d="M6 7.5h5.5v1.8H9.7v5.2H7.8V9.3H6V7.5Z" />
          </svg>
        );
      case 'Zoom':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <rect width="22" height="18" x="1" y="3" rx="4.5" fill="#2D8CFF" />
            <path fill="#FFFFFF" d="M14 8.5v7l5-3.5-5-3.5ZM6 8.5h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z" />
          </svg>
        );
      case 'Cisco Webex':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <circle cx="12" cy="12" r="10" fill="#00D2B4" opacity="0.15" />
            <path fill="#00BCEB" d="M12 6a6 6 0 0 1 5.8 4.5 4 4 0 0 0-4.3-.5 3.5 3.5 0 0 0-3.5 3.5 4 4 0 0 0 .5 1.8 6 6 0 1 1 1.5-9.3Z" />
            <path fill="#008000" d="M17.8 10.5a4 4 0 0 1 .2 5.5 6 6 0 0 1-6 2 4 4 0 0 0 3-4.5 3.5 3.5 0 0 0-2.5-3 4 4 0 0 1 5.3 0Z" />
            <path fill="#FF5500" d="M12 18a6 6 0 0 1-5.8-4.5 4 4 0 0 0 4.3.5 3.5 3.5 0 0 0 3.5-3.5 4 4 0 0 0-.5-1.8 6 6 0 1 1-1.5 9.3Z" />
          </svg>
        );
      case 'EMR (OPM)':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <rect width="20" height="20" x="2" y="2" rx="4.5" fill="#EB6123" />
            <path fill="#FFFFFF" d="M11 6h2v4h4v2h-4v4h-2v-4H7v-2h4V6Z" />
          </svg>
        );
      case 'Talkdesk':
        return (
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <rect width="20" height="20" x="2" y="2" rx="4.5" fill="#5E2CA5" />
            <path fill="#FFFFFF" d="M12 5.5a6.5 6.5 0 0 0-6.5 6.5c0 1.9.8 3.6 2.1 4.8V19l2.5-1.4c.6.2 1.2.3 1.9.3a6.5 6.5 0 0 0 6.5-6.5 6.5 6.5 0 0 0-6.5-6.4Zm-2.3 7.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 font-bold">
            {name.charAt(0)}
          </div>
        );
    }
  };

  return (
    <section id="tools" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={50}>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-stone-600" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 text-balance">
              Tools & Software
            </h2>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Platforms and enterprise software used daily for healthcare campaigns and client operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean App Icon Grid with Tool Name and Category Text */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
          {tools.map((tool, idx) => (
            <ScrollReveal key={idx} delay={80 + (idx % 5) * 60} className="h-full">
              <div
                className="bg-white rounded-2xl border border-stone-200/90 p-5 hover:border-stone-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default h-full"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-12">
                  {getToolIcon(tool.name)}
                </div>
                <h3 className="text-sm font-bold text-stone-900 tracking-tight leading-snug group-hover:text-stone-700 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {tool.category}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
