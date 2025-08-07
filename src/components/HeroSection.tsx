import React from 'react';
import { ArrowDown, MessageCircle, Briefcase } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const HeroSection: React.FC = () => {
  const { language } = useAppContext();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
            {language === 'es' ? 'Desarrollador Web FullStack Ssr.' : 'FullStack Sr. Web Developer'}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
            {language === 'es' 
              ? 'Potencio ideas con tecnología y creatividad.' 
              : 'I empower ideas with technology and creativity.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{language === 'es' ? 'Contactar' : 'Contact'}</span>
            </button>
            
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Briefcase size={20} />
              <span>{language === 'es' ? 'Ver Proyectos' : 'View Projects'}</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-cyan-400" size={32} />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-green-400 rounded-full animate-ping delay-2000"></div>
    </section>
  );
};

export default HeroSection;