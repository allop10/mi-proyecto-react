import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Truck, Thermometer, Shield, Package, Weight, Wrench, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Services = () => {
  const {
    toast
  } = useToast();
  const handleCotizacionClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
      duration: 5000
    });
  };
  const services = [{
    icon: Package,
    title: 'Caja Seca',
    description: 'Transporte seguro de mercancía general con protección total contra elementos externos. Ideal para productos manufacturados, textiles, electrónicos y mercancía general.',
    features: ['Protección total', 'Carga seca', 'Seguridad garantizada', 'Capacidad variable'],
    image: 'Camión de carga con remolque de caja seca blanca en carretera'
  }, {
    icon: Thermometer,
    title: 'Thermo',
    description: 'Unidades refrigeradas para productos que requieren temperatura controlada. Perfecto para alimentos perecederos, productos farmacéuticos y químicos sensibles.',
    features: ['Temperatura controlada', 'Monitoreo constante', 'Productos perecederos', 'Cadena de frío'],
    image: 'Camión refrigerado thermo transportando productos perecederos'
  }, {
    icon: Shield,
    title: 'Jaula',
    description: 'Transporte especializado para ganado y animales con máxima ventilación y seguridad. Diseñado específicamente para el bienestar animal durante el transporte.',
    features: ['Ventilación óptima', 'Bienestar animal', 'Seguridad especializada', 'Normativas cumplidas'],
    image: 'Camión jaula para transporte de ganado en zona rural'
  }, {
    icon: Settings,
    title: 'Plataforma',
    description: 'Ideal para cargas de gran volumen y maquinaria pesada. Facilita la carga y descarga de equipos industriales y materiales de construcción.',
    features: ['Gran volumen', 'Maquinaria pesada', 'Carga fácil', 'Versatilidad'],
    image: 'Camión plataforma cargando maquinaria industrial pesada'
  }, {
    icon: Truck,
    title: 'Torton',
    description: 'Unidades de gran capacidad para cargas voluminosas. Perfectos para materiales de construcción, productos agrícolas y mercancías de gran volumen.',
    features: ['Gran capacidad', 'Cargas voluminosas', 'Eficiencia', 'Versatilidad'],
    image: 'Camión torton de gran capacidad en terminal de carga'
  }, {
    icon: Weight,
    title: 'Low Boy',
    description: 'Transporte de maquinaria extra pesada con altura reducida. Especializado en equipos de construcción, maquinaria industrial y cargas sobredimensionadas.',
    features: ['Altura reducida', 'Carga extra pesada', 'Especializado', 'Seguridad máxima'],
    image: 'Camión low boy transportando excavadora en construcción'
  }, {
    icon: Wrench,
    title: 'Cama Baja',
    description: 'Especializado en transporte de equipo pesado y sobredimensionado. Ideal para maquinaria de construcción, equipos industriales y cargas especiales.',
    features: ['Equipo pesado', 'Sobredimensionado', 'Especialización', 'Permisos especiales'],
    image: 'Camión cama baja transportando equipo industrial pesado'
  }];
  const additionalServices = [{
    title: 'Logística Integral',
    description: 'Gestión completa de su cadena de suministro desde el origen hasta el destino final.'
  }, {
    title: 'Almacenaje',
    description: 'Servicios de almacenamiento temporal y distribución en nuestras instalaciones.'
  }, {
    title: 'Seguimiento GPS',
    description: 'Monitoreo en tiempo real de sus envíos con tecnología GPS avanzada.'
  }, {
    title: 'Seguro de Carga',
    description: 'Protección total de su mercancía con pólizas de seguro especializadas.'
  }];
  return <div className="pt-16">
      <Helmet>
        <title>Servicios - Logimex | Transporte Especializado y Soluciones Logísticas</title>
        <meta name="description" content="Descubre nuestros servicios de transporte especializado: caja seca, thermo, jaula, plataforma, torton, low boy y cama baja. Soluciones logísticas para todas sus necesidades." />
        <meta property="og:title" content="Servicios - Logimex | Transporte Especializado y Soluciones Logísticas" />
        <meta property="og:description" content="Servicios de transporte con unidades especializadas para satisfacer todas las necesidades logísticas de su empresa." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" alt="Flota diversificada de servicios de transporte Logimex" src="https://images.unsplash.com/photo-1591212741240-cd65f894cbaf" />
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
              Nuestros <span className="gradient-text">Servicios</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Contamos con una flota diversificada de unidades especializadas para 
              satisfacer todas sus necesidades logísticas con la máxima eficiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="service-card rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-64">
                  <img className="w-full h-full object-cover" alt={`Servicio de ${service.title} - Logimex`} src="https://horizons-cdn.hostinger.com/77169ff5-d7d5-4315-bcfc-4f7211c547e8/chatgpt-image-2-oct-2025-01_02_16-p.m.-hvxjN.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#005eff] rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#005eff] rounded-full" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>)}
                  </div>

                  <Button onClick={handleCotizacionClick} className="w-full bg-[#005eff] hover:bg-[#0047cc] text-white">
                    Solicitar Cotización
                  </Button>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#07416b]/20">
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
              Servicios <span className="gradient-text">Adicionales</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complementamos nuestros servicios de transporte con soluciones logísticas integrales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => <motion.div key={index} initial={{
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
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Nuestro <span className="gradient-text">Proceso</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un proceso simple y eficiente para garantizar el mejor servicio logístico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            step: '01',
            title: 'Consulta',
            description: 'Analizamos sus necesidades específicas'
          }, {
            step: '02',
            title: 'Cotización',
            description: 'Proporcionamos una propuesta personalizada'
          }, {
            step: '03',
            title: 'Planificación',
            description: 'Organizamos la logística óptima'
          }, {
            step: '04',
            title: 'Ejecución',
            description: 'Realizamos el transporte con excelencia'
          }].map((item, index) => <motion.div key={index} initial={{
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
          }} className="text-center">
                <div className="w-16 h-16 bg-[#005eff] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>)}
          </div>
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
              ¿Necesita un servicio especializado?
            </h2>
            <p className="text-xl text-gray-200">
              Contáctenos para discutir sus necesidades específicas y encontrar 
              la solución logística perfecta para su empresa.
            </p>
            <Button onClick={handleCotizacionClick} className="bg-white text-[#07416b] hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
              Solicitar Cotización Personalizada
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Services;