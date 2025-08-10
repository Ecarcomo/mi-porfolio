import React from 'react';
import { Calendar, MapPin, Code, ExternalLink  } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { experienceData } from '../data/portfolioData';

const ExperienceSection: React.FC = () => {
  const { language } = useAppContext();

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full"></div>

            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-lg">
                          <Code className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {language === 'es' ? experience.period : experience.periodEn || experience.period}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {experience.link ? 
                        <>
                          <a href={experience.link} className="flex items-center" target="_blank" rel="noopener noreferrer">{experience.company}<ExternalLink className="w-4 h-4 ml-1" /></a> 
                        </>
                        : experience.company}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-pink-400 mb-4">
                        {language === 'es' ? experience.position : experience.positionEn || experience.position}
                      </h4>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {language === 'es' ? experience.description : experience.descriptionEn || experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;