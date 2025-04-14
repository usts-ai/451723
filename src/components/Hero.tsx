import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 bg-opacity-20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Trouvez votre <span className="text-blue-300">mission idéale</span> ou le <span className="text-blue-300">talent parfait</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-lg"
            >
              TempWork connecte les meilleurs talents avec les entreprises pour des missions d'intérim qui correspondent parfaitement à vos besoins.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/missions" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-300">
                Voir les missions
              </Link>
              <Link to="/register" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                Créer un compte
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 relative"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Développeur Frontend React</h3>
                      <p className="text-sm text-gray-600">TechSolutions - Paris</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Designer UX/UI</h3>
                      <p className="text-sm text-gray-600">CreativeAgency - Lyon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Chef de Projet Digital</h3>
                      <p className="text-sm text-gray-600">InnovationLab - Bordeaux</p>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Voir plus de missions
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 30, y: -20, opacity: 0 }}
                animate={{ x: 30, y: -20, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-blue-500 p-4 rounded-lg shadow-lg"
              >
                <div className="text-white text-center">
                  <p className="text-sm font-medium">Taux de placement</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: -30, y: 20, opacity: 0 }}
                animate={{ x: -30, y: 20, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-green-500 p-4 rounded-lg shadow-lg"
              >
                <div className="text-white text-center">
                  <p className="text-sm font-medium">Missions actives</p>
                  <p className="text-2xl font-bold">348</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
