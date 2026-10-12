/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Tools } from './components/Tools';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import bgTexture from './assets/images/beige_theme_bg_1791798783667.jpg';

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF9F5] text-stone-800 font-sans overflow-x-hidden w-full max-w-full">
      {/* Fixed Ambient Background Texture matching the beige theme */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-multiply overflow-hidden">
        <img
          src={bgTexture}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll Progress Bar & Floating Back-to-Top Button */}
      <ScrollProgressBar />

      <Navbar onContactClick={handleScrollToContact} />

      <main className="relative z-10 flex-grow w-full max-w-full overflow-x-hidden">
        <Hero onContactClick={handleScrollToContact} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Tools />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
