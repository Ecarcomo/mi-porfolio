import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactData } from '../data/portfolioData';
import { useAppContext } from '../contexts/AppContext';

const WhatsAppButton: React.FC = () => {
  const { language } = useAppContext();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      language === 'es' 
        ? `Hola Emmanuel, me interesa contactarte para un proyecto.`
        : `Hello Emmanuel, I'm interested in contacting you for a project.`
    );
    window.open(`https://wa.me/${contactData.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      title={language === 'es' ? 'Enviar WhatsApp' : 'Send WhatsApp'}
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
    </button>
  );
};

export default WhatsAppButton;