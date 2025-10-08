import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Target, Eye, Award, Users, Truck, MapPin } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Target,
    title: 'Compromiso',
    description: 'Nos comprometemos a cumplir con los más altos estándares de calidad y puntualidad en cada servicio.'
  }, {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la excelencia operativa en cada proceso, garantizando resultados superiores.'
  }, {
    icon: Users,
    title: 'Confianza',
    description: 'Construimos relaciones duraderas basadas en la confianza y transparencia con nuestros clientes.'
  }, {
    icon: Eye,
    title: 'Innovación',
    description: 'Implementamos soluciones innovadoras para optimizar los procesos logísticos de nuestros clientes.'
  }];
  const stats = [{
    number: '500+',
    label: 'Clientes Satisfechos'
  }, {
    number: '50+',
    label: 'Unidades Especializadas'
  }, {
    number: '10+',
    label: 'Años de Experiencia'
  }, {
    number: '99%',
    label: 'Entregas Puntuales'
  }];
  return <div className="pt-16">
      <Helmet>
        <title>Nosotros - Logimex | Empresa Líder en Soluciones Logísticas</title>
        <meta name="description" content="Conoce más sobre Logimex, empresa especializada en transporte y logística con sede en Zempoala, Hidalgo. Descubre nuestra misión, visión y valores." />
        <meta property="og:title" content="Nosotros - Logimex | Empresa Líder en Soluciones Logísticas" />
        <meta property="og:description" content="Empresa especializada en transporte y logística con amplia experiencia y flota diversificada para satisfacer todas las necesidades logísticas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Equipo profesional de Logimex en terminal logística" src="https://images.unsplash.com/photo-1703194531119-e8b98a555cb6" />
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
              Conoce <span className="gradient-text">Logimex</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Somos una empresa especializada en soluciones logísticas, comprometida con 
              la excelencia y la satisfacción de nuestros clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Nuestra <span className="gradient-text">Historia</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  Logimex nace de la visión de crear una empresa de transporte que combine 
                  la experiencia tradicional con la innovación moderna, ofreciendo soluciones 
                  logísticas integrales y personalizadas.
                </p>
                <p>
                  Ubicados estratégicamente en Zempoala, Hidalgo, hemos desarrollado una 
                  amplia red de servicios que nos permite atender eficientemente las 
                  necesidades de transporte en todo el territorio nacional.
                </p>
                <p>
                  Nuestro compromiso es ser más que un proveedor de servicios; queremos 
                  ser su socio estratégico en la cadena de suministro, garantizando 
                  eficiencia, seguridad y puntualidad en cada operación.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="relative">
              <img className="w-full h-96 object-cover rounded-2xl shadow-2xl" alt="Instalaciones modernas de Logimex en Zempoala" src="https://images.unsplash.com/photo-1679927734662-cecf6b58898e" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#07416b]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          }} className="glass-effect rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-[#005eff] mr-4" />
                <h3 className="text-3xl font-bold text-white">Misión</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Proporcionar soluciones logísticas eficientes y seguras mediante una flota 
                especializada y un servicio personalizado, contribuyendo al éxito de nuestros 
                clientes y al desarrollo de la industria del transporte en México.
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
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-[#005eff] mr-4" />
                <h3 className="text-3xl font-bold text-white">Visión</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ser la empresa líder en soluciones logísticas en México, reconocida por 
                nuestra excelencia operativa, innovación tecnológica y compromiso con la 
                satisfacción del cliente, expandiendo nuestra presencia a nivel nacional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guían cada una de nuestras acciones y decisiones empresariales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <motion.div key={index} initial={{
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
                <div className="w-16 h-16 bg-[#005eff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-[#07416b] to-[#005eff]">
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
              Logimex en <span className="text-yellow-300">Números</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Nuestra <span className="gradient-text">Ubicación</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#005eff] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Oficinas Principales</h3>
                    <p className="text-gray-300">
                      Calle Orssola No. 105 Interior 1<br />
                      Zempoala, Hidalgo, México
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Truck className="w-6 h-6 text-[#005eff] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cobertura</h3>
                    <p className="text-gray-300">
                      Servicios de transporte a nivel nacional con rutas especializadas 
                      y cobertura completa en todo México.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="relative">
              <img className="w-full h-96 object-cover rounded-2xl shadow-2xl" alt="Ubicación de Logimex en Zempoala, Hidalgo" src="https://horizons-cdn.hostinger.com/77169ff5-d7d5-4315-bcfc-4f7211c547e8/j1-8-66o6E.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;