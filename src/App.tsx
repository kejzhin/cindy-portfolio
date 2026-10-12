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

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-800 font-sans overflow-x-hidden w-full max-w-full">
      {/* Scroll Progress Bar & Floating Back-to-Top Button */}
      <ScrollProgressBar />

      <Navbar onContactClick={handleScrollToContact} />

      <main className="flex-grow w-full max-w-full overflow-x-hidden">
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
