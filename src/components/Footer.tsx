import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-4"
            >
              TempWork
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400"
            >
              Votre partenaire de confiance pour trouver les meilleures missions d'intérim et les meilleurs talents.
            </motion.p>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Liens rapides
            </motion.h3>
            <ul className="space-y-2">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link to="/missions" className="text-gray-400 hover:text-white transition-colors">Missions</Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link to="/candidats" className="text-gray-400 hover:text-white transition-colors">Candidats</Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link to="/entreprises" className="text-gray-400 hover:text-white transition-colors">Entreprises</Link>
              </motion.li>
            </ul>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Légal
            </motion.h3>
            <ul className="space-y-2">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">Mentions légales</Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link to="/conditions-utilisation" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</Link>
              </motion.li>
            </ul>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Contact
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-2"
            >
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400"
            >
              Email: contact@tempwork.fr<br />
              Téléphone: +33 1 23 45 67 89
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} TempWork. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
