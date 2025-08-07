import React from 'react';
import { Users, TrendingUp, BookOpen, Zap } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const AboutSection: React.FC = () => {
  const { language } = useAppContext();

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'es' ? 'Trabajo colaborativo' : 'Collaborative work',
      description: language === 'es' 
        ? 'Creo en el poder del trabajo en equipo para lograr resultados excepcionales'
        : 'I believe in the power of teamwork to achieve exceptional results'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'es' ? 'Optimización de procesos' : 'Process optimization',
      description: language === 'es'
        ? 'Busco constantemente maneras de mejorar la eficiencia y calidad'
        : 'I constantly seek ways to improve efficiency and quality'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: language === 'es' ? 'Aprendizaje continuo' : 'Continuous learning',
      description: language === 'es'
        ? 'Me mantengo actualizado con las últimas tecnologías y tendencias'
        : 'I stay updated with the latest technologies and trends'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: language === 'es' ? 'Mejora de eficiencia' : 'Efficiency improvement',
      description: language === 'es'
        ? 'Implemento soluciones que maximizan el rendimiento y la productividad'
        : 'I implement solutions that maximize performance and productivity'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {language === 'es' ? 'Sobre Mí' : 'About Me'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {language === 'es' ? '¡Hola! Soy Emmanuel' : 'Hello! I\'m Emmanuel'}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Soy un desarrollador Full Stack Senior con más de 6 años de experiencia creando soluciones web innovadoras. Mi pasión por la tecnología me impulsa a transformar ideas complejas en aplicaciones elegantes y funcionales.'
                    : 'I\'m a Senior Full Stack Developer with over 6 years of experience creating innovative web solutions. My passion for technology drives me to transform complex ideas into elegant and functional applications.'}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'es'
                    ? 'Me especializo en crear experiencias digitales que no solo cumplan con los objetivos técnicos, sino que también generen un impacto positivo en los usuarios y el negocio.'
                    : 'I specialize in creating digital experiences that not only meet technical objectives, but also generate a positive impact on users and business.'}
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 group"
                  >
                    <div className="text-cyan-400 mb-3 group-hover:text-pink-500 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Video/Image */}
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-400/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                    </div>
                    <p className="text-white font-medium">
                      {language === 'es' ? 'Video de Presentación' : 'Presentation Video'}
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      {language === 'es' ? 'Próximamente disponible' : 'Coming soon'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;