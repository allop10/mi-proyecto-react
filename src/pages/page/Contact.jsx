import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
      duration: 5000
    });
  };
  const contactInfo = [{
    icon: MapPin,
    title: 'Dirección',
    details: ['Calle Orssola No. 105 Interior 1', 'Zempoala, Hidalgo, México'],
    color: 'text-[#005eff]'
  }, {
    icon: Phone,
    title: 'Teléfono',
    details: ['667 469 3418'],
    color: 'text-green-400'
  }, {
    icon: Mail,
    title: 'Email',
    details: ['ventas@logimexmx.com , clintes@logimexmx.com'],
    color: 'text-yellow-400'
  }, {
    icon: Clock,
    title: 'Horarios',
    details: ['Lunes - Viernes: 8:00 AM - 6:00 PM', 'Sábados: 8:00 AM - 2:00 PM'],
    color: 'text-purple-400'
  }];
  const services = ['Caja Seca', 'Thermo', 'Jaula', 'Plataforma', 'Torton', 'Low Boy', 'Cama Baja', 'Otro'];
  return <div className="pt-16">
      <Helmet>
        <title>Contacto - Logimex | Solicite su Cotización de Transporte</title>
        <meta name="description" content="Contáctenos para solicitar una cotización personalizada. Ubicados en Zempoala, Hidalgo. Teléfono: 667 469 3418. Email: logisticamexicanasa@gmail.com" />
        <meta property="og:title" content="Contacto - Logimex | Solicite su Cotización de Transporte" />
        <meta property="og:description" content="Póngase en contacto con nuestro equipo para obtener una cotización personalizada de nuestros servicios de transporte especializado." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Oficinas de Logimex en Zempoala, Hidalgo" src="https://images.unsplash.com/photo-1636373466162-330695a2af88" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07416b]/90 to-[#005eff]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Contáctenos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Estamos aquí para brindarle la mejor atención personalizada y 
              encontrar la solución logística perfecta para su empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Información de <span className="gradient-text">Contacto</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Múltiples formas de comunicarse con nosotros para su comodidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color} bg-white/10`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-gray-300 text-sm">
                      {detail}
                    </p>)}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#07416b]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solicite su <span className="gradient-text">Cotización</span>
            </h2>
            <p className="text-xl text-gray-300">
              Complete el formulario y nos pondremos en contacto con usted a la brevedad.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="glass-effect rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nombre Completo *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eff] focus:border-transparent" placeholder="Su nombre completo" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eff] focus:border-transparent" placeholder="su@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Teléfono *
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eff] focus:border-transparent" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Servicio de Interés
                  </label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#005eff] focus:border-transparent">
                    <option value="">Seleccione un servicio</option>
                    {services.map((service, index) => <option key={index} value={service} className="bg-[#07416b] text-white">
                        {service}
                      </option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensaje *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005eff] focus:border-transparent resize-none" placeholder="Describa sus necesidades de transporte, origen, destino, tipo de carga, fechas, etc." />
              </div>

              <Button type="submit" className="w-full bg-[#005eff] hover:bg-[#0047cc] text-white py-4 text-lg rounded-lg flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Enviar Solicitud</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra <span className="gradient-text">Ubicación</span>
            </h2>
            <p className="text-xl text-gray-300">
              Visítenos en nuestras oficinas en Zempoala, Hidalgo.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" alt="Mapa de ubicación de Logimex en Zempoala, Hidalgo" src="https://horizons-cdn.hostinger.com/77169ff5-d7d5-4315-bcfc-4f7211c547e8/baner-1-iYCOp.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-effect rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-2">Logimex</h3>
                <p className="text-gray-200">
                  Calle Orssola No. 105 Interior 1<br />
                  Zempoala, Hidalgo, México
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#07416b] to-[#005eff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-200">
              Nos gustaría ser parte de su cadena de suministro. Quedamos a su 
              disposición para brindarle mayor información o una cotización sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6674693418">
                <Button className="bg-white text-[#07416b] hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  Llamar Ahora
                </Button>
              </a>
              <a href="mailto:logisticamexicanasa@gmail.com">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#07416b] px-8 py-4 text-lg rounded-full">
                  <Mail className="mr-2 w-5 h-5" />
                  Enviar Email
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Contact;