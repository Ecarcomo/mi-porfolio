import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle ,CheckCircle, CircleSlash2 } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { contactData } from '../data/portfolioData';

const ContactSection: React.FC = () => {
  const { language } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted]= useState(false);
  const [submitMessage, setSubmitMessage] = useState(''); // Para mensajes de éxito/error
  const  [submitResponse, setSubmitResponse] = useState(''); // Para respuestas de Netlify

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    setIsSubmitted(false); // Reinicia el estado de envío
    setSubmitMessage(''); // Reinicia el mensaje
    setSubmitResponse('');
   
     // Para Netlify Forms, los datos deben enviarse como 'application/x-www-form-urlencoded'
    // o 'multipart/form-data'. FormData es ideal para esto.
    const form = e.target as HTMLFormElement; // Asegura que 'form' sea de tipo HTMLFormElement
    //const data = new FormData(form);

    try {

      console.log('Intentando hacer fetch...'); // <-- Punto de control 3
      const response = await fetch('/', { // Guarda la respuesta en una variable
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Object.fromEntries(new FormData(form))).toString(),
      });
  
      console.log('Fetch completado.'); // Esta línea siempre se ejecutará si hay una respuesta (aunque sea 404)
      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
        setSubmitMessage('');
        setSubmitResponse('');
      }, 5000);
      
      // ¡Aquí está la clave! Verifica si la respuesta es exitosa (código 2xx)
      if (!response.ok) {
        // Si la respuesta no es 'ok' (es un 4xx o 5xx), lanzamos un error
        // para que el bloque 'catch' lo maneje.
        const errorText = await response.text(); // O response.json() si esperas JSON
        throw new Error(`Error de HTTP: ${response.status} - ${errorText}`);
      }
      setSubmitMessage(language === 'es' ? 'Tu mansaje fué enviado con éxito, te responderé dentro de las 24hs.' : 'Your message was sent successfully, I will respond within 24 hours.');
      setSubmitResponse('ok');
  
    } catch {
      setSubmitResponse('error');
      setSubmitMessage(language === 'es' ? 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.' : 'There was an error sending your message. Please try again later.');
      console.error(language === 'es' ? 'Error al enviar el formulario' : 'Error sending the form');
    }


  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      language === 'es' 
        ? `Hola Emmanuel, me interesa contactarte para un proyecto.`
        : `Hello Emmanuel, I'm interested in contacting you for a project.`
    );
    window.open(`https://wa.me/${contactData.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              {language === 'es' 
                ? '¿Tienes un proyecto en mente? ¡Hablemos!'
                : 'Have a project in mind? Let\'s talk!'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                {language === 'es' ? 'Envíame un mensaje' : 'Send me a message'}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                    {submitResponse == 'ok' ? 
                      <>
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {submitMessage}
                        </h4>
                        <p className="text-gray-600">
                          Gracias por tu mensaje.
                        </p>
                      </>
                    :
                      <>
                        <CircleSlash2  className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {submitMessage}
                        </h4>
                        <p className="text-gray-600">
                          Disculpa la molestia, puedes contactarme vía WhatsApp tambien.
                        </p>
                      </>
                    }
                </div>
              ) : (

              <form onSubmit={handleSubmit} className="space-y-6"  name="contact" netlify >
                {/* Campo oculto requerido por Netlify para identificar el formulario */}
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    {language === 'es' ? 'Correo electrónico' : 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    {language === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder={language === 'es' ? 'Cuéntame sobre tu proyecto...' : 'Tell me about your project...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>{language === 'es' ? 'Enviar mensaje' : 'Send message'}</span>
                </button>
              </form>
            )}

            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {language === 'es' ? 'Información de contacto' : 'Contact information'}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-lg">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-white hover:text-cyan-400 transition-colors duration-300"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-lg">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        {language === 'es' ? 'Teléfono' : 'Phone'}
                      </p>
                      <a
                        href={`tel:${contactData.phone}`}
                        className="text-white hover:text-cyan-400 transition-colors duration-300"
                      >
                        {contactData.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle size={24} />
                <span className="text-lg">
                  {language === 'es' ? 'Enviar WhatsApp' : 'Send WhatsApp'}
                </span>
              </button>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-pink-500/10 to-cyan-400/10 border border-pink-500/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {language === 'es' ? '⚡ Respuesta rápida' : '⚡ Quick response'}
                </h4>
                <p className="text-gray-300 text-sm">
                  {language === 'es'
                    ? 'Normalmente respondo en menos de 24 horas. ¡Espero saber de ti pronto!'
                    : 'I usually respond within 24 hours. Looking forward to hearing from you!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;