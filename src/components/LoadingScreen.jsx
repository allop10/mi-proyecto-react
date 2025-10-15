import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#07416b] via-[#005eff] to-[#001a3d]">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Truck className="w-16 h-16 text-[#07416b]" />
            </motion.div>
          </div>
          
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4"
          >
            <Package className="w-8 h-8 text-white opacity-70" />
          </motion.div>
          
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-4"
          >
            <MapPin className="w-8 h-8 text-white opacity-70" />
          </motion.div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-white mb-2">
            <span className="gradient-text">LOGIMEX</span>
          </h1>
          <p className="text-xl text-blue-200 font-medium">
            Soluciones Logísticas Profesionales
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
          ))}
        </motion.div>

        {/* Truck Moving Animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 200, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
          className="absolute bottom-20 left-0 right-0"
        >
          <div className="flex justify-center">
            <Truck className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Progress Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="text-blue-200 text-lg"
        >
          Cargando experiencia logística...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;