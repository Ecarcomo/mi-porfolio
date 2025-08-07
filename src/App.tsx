import React from 'react';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <WhatsAppButton />
      </div>
    </AppProvider>
  );
}

export default App;
