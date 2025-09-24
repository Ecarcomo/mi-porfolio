import React from 'react';
import { Code, Heart } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { skillsData } from '../data/portfolioData';

const SkillsSection: React.FC = () => {
  const { language } = useAppContext();
  const categorias = [...new Set(skillsData.hard.map(item => item.category))];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {language === 'es' ? 'Habilidades' : 'Skills'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
              {categorias.map((cat,i)=> (
                  <div>
                    <h2>{cat}</h2>
                    <div className='flex w-full flex-wrap gap-2'>
                    {
                      skillsData.hard.map((skill, index) => {
                        if(skill.category === cat)
                        return(<div
                                  key={index}
                                  className="flex items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                                >
                                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                  </span>
                                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                                    {skill.name}
                                  </span>
                                </div>);
                      })
                    }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg mr-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {skillsData.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-gray-800 font-medium group-hover:text-pink-600 transition-colors duration-300">
                      {language === 'es' ? skill.name : skill.nameEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;