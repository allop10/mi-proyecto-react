import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [{
    title: 'Caja Seca',
    description: 'Transporte seguro de mercancía general con protección total contra elementos externos.',
    image: 'Camión de carga con remolque de caja seca blanca en carretera'
  }, {
    title: 'Thermo',
    description: 'Unidades refrigeradas para productos que requieren temperatura controlada.',
    image: 'Camión refrigerado thermo transportando productos perecederos'
  }, {
    title: 'Jaula',
    description: 'Transporte especializado para ganado y animales con máxima ventilación.',
    image: 'Camión jaula para transporte de ganado en zona rural'
  }, {
    title: 'Plataforma',
    description: 'Ideal para cargas de gran volumen y maquinaria pesada.',
    image: 'Camión plataforma cargando maquinaria industrial pesada'
  }, {
    title: 'Torton',
    description: 'Unidades de gran capacidad para cargas voluminosas.',
    image: 'Camión torton de gran capacidad en terminal de carga'
  }, {
    title: 'Low Boy',
    description: 'Transporte de maquinaria extra pesada con altura reducida.',
    image: 'Camión low boy transportando excavadora en construcción'
  }, {
    title: 'Cama Baja',
    description: 'Especializado en transporte de equipo pesado y sobredimensionado.',
    image: 'Camión cama baja transportando equipo industrial pesado'
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + services.length) % services.length);
  };
  return <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} initial={{
          opacity: 0,
          x: 300
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -300
        }} transition={{
          duration: 0.5
        }} className="absolute inset-0">
            <div className="relative h-full">
              <img className="w-full h-full object-cover" alt={`Servicio de ${services[currentIndex].title}`} src="https://horizons-cdn.hostinger.com/77169ff5-d7d5-4315-bcfc-4f7211c547e8/chatgpt-image-2-oct-2025-01_02_16-p.m.-CYK11.png" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.h3 initial={{
                y: 30,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: 0.2
              }} className="text-3xl font-bold text-white mb-3">
                  {services[currentIndex].title}
                </motion.h3>
                <motion.p initial={{
                y: 30,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: 0.3
              }} className="text-lg text-gray-200 max-w-2xl">
                  {services[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-[#005eff] scale-125' : 'bg-white/40 hover:bg-white/60'}`} />)}
      </div>
    </div>;
};
export default ServiceCarousel;