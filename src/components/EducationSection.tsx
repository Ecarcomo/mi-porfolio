import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { educationData } from '../data/portfolioData';

const EducationSection: React.FC = () => {
  const { language } = useAppContext();

  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {language === 'es' ? 'Educación' : 'Education'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-cyan-400"></div>

            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div key={education.id} className="relative flex items-start">
                  {/* Timeline Node */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className="ml-16 w-full">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-lg">
                            <GraduationCap className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {education.institution}
                            </h3>
                            <h4 className="text-lg font-semibold text-pink-400">
                              {language === 'es' ? education.degree : education.degreeEn}
                            </h4>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {education.period}
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {language === 'es' ? education.description : education.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;