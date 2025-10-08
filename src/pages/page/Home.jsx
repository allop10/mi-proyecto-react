import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Star } from 'lucide-react';
import ServiceCarousel from '@/components/ServiceCarousel';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleCotizacionClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
      duration: 5000,
    });
  };

  const features = [
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Protección total de su mercancía durante todo el trayecto'
    },
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Entregas a tiempo, cumpliendo con los horarios acordados'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Servicio dedicado y profesional para cada cliente'
    },
    {
      icon: Star,
      title: 'Calidad Premium',
      description: 'Estándares de excelencia en todos nuestros servicios'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover"
            alt="Flota de camiones Logimex en terminal logística"
           src="https://images.unsplash.com/photo-1703194531119-e8b98a555cb6" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07416b]/90 via-[#005eff]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="gradient-text">LOGIMEX</span>
              <br />
              <span className="text-3xl md:text-5xl">Soluciones Logísticas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Brindamos servicios de transporte especializado con unidades de caja seca, thermo, jaula, 
              plataforma, torton, low boy y cama baja para soluciones logísticas eficientes y seguras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCotizacionClick}
                className="bg-[#005eff] hover:bg-[#0047cc] text-white px-8 py-4 text-lg rounded-full pulse-glow"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Link to="/servicios">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#07416b] px-8 py-4 text-lg rounded-full"
                >
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 bg-[#005eff]/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-[#07416b]/20 rounded-full blur-xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#07416b]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir <span className="gradient-text">Logimex</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nos comprometemos a ser parte de su cadena de suministro con servicios 
              puntuales, profesionales y confiables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-[#005eff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contamos con una flota diversificada de unidades especializadas para 
              satisfacer todas sus necesidades logísticas.
            </p>
          </motion.div>

          <ServiceCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#07416b] to-[#005eff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Listo para optimizar su logística?
            </h2>
            <p className="text-xl text-gray-200">
              Contáctenos hoy mismo para una cotización sin compromiso y descubra 
              cómo podemos ser parte de su cadena de suministro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button className="bg-white text-[#07416b] hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                  Contactar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                onClick={handleCotizacionClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#07416b] px-8 py-4 text-lg rounded-full"
              >
                Solicitar Cotización
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;