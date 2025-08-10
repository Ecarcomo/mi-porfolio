import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: language === 'es' ? 'Inicio' : 'Home', href: '#hero' },
    { label: language === 'es' ? 'Sobre Mí' : 'About', href: '#about' },
    { label: language === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { label: language === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { label: language === 'es' ? 'Habilidades' : 'Skills', href: '#skills' },
    { label: language === 'es' ? 'Educación' : 'Education', href: '#education' },
    { label: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' }
  ];

  const handleDownloadCV = () => {
    const cvFile = language === 'es' ? '/EmmanuelCarcomo-cv_es.pdf' : '/EmmanuelCarcomo-cv_en.pdf';
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = `EmmanuelCarcomo-CV-${language.toUpperCase()}.pdf`;
    link.click();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Emmanuel Carcomo
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe size={20} />
              <span className="ml-1 text-sm">{language.toUpperCase()}</span>
            </button>

            {/* Download CV */}
            <button
              onClick={handleDownloadCV}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-cyan-400 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Download size={16} />
              <span>{language === 'es' ? 'Descargar CV' : 'Download CV'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 w-full px-4 py-2 mt-4  bg-gradient-to-r from-pink-500 to-cyan-400 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Download size={16} />
              <span>{language === 'es' ? 'Descargar CV' : 'Download CV'}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;