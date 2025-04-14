import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white font-bold text-xl"
              >
                TempWork
              </motion.div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:bg-blue-500 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Accueil
                </Link>
                <Link to="/missions" className="text-white hover:bg-blue-500 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Missions
                </Link>
                <Link to="/candidats" className="text-white hover:bg-blue-500 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Candidats
                </Link>
                <Link to="/entreprises" className="text-white hover:bg-blue-500 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Entreprises
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/login" className="text-white bg-transparent border border-white hover:bg-white hover:text-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 mr-2">
                Connexion
              </Link>
              <Link to="/register" className="text-blue-700 bg-white hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
                Inscription
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-500 hover:bg-opacity-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white hover:bg-blue-500 hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-medium">
            Accueil
          </Link>
          <Link to="/missions" className="text-white hover:bg-blue-500 hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-medium">
            Missions
          </Link>
          <Link to="/candidats" className="text-white hover:bg-blue-500 hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-medium">
            Candidats
          </Link>
          <Link to="/entreprises" className="text-white hover:bg-blue-500 hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-medium">
            Entreprises
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-blue-500 border-opacity-50">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <Link to="/login" className="text-white bg-transparent border border-white hover:bg-white hover:text-blue-700 block px-4 py-2 rounded-md text-base font-medium mb-2 text-center">
                Connexion
              </Link>
              <Link to="/register" className="text-blue-700 bg-white hover:bg-blue-50 block px-4 py-2 rounded-md text-base font-medium text-center">
                Inscription
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
