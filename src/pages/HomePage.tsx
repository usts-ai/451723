import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StatisticCard from '../components/StatisticCard';
import MissionCard from '../components/MissionCard';
import CandidateCard from '../components/CandidateCard';
import { mockStatistics, mockMissions, mockCandidates } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TempWork en chiffres</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre plateforme connecte des milliers de candidats avec des entreprises pour des missions d'intérim de qualité.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockStatistics.map((statistic, index) => (
              <StatisticCard key={index} statistic={statistic} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Missions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Missions à la une</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Découvrez nos dernières missions d'intérim dans différents secteurs d'activité.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0"
            >
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors">
                Voir toutes les missions
              </button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMissions.slice(0, 3).map((mission, index) => (
              <MissionCard key={mission.id} mission={mission} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Candidates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Candidats à la une</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Découvrez nos talents disponibles pour vos missions d'intérim.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0"
            >
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors">
                Voir tous les candidats
              </button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCandidates.slice(0, 3).map((candidate, index) => (
              <CandidateCard key={candidate.id} candidate={candidate} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TempWork simplifie la mise en relation entre candidats et entreprises pour des missions d'intérim.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Créez votre profil</h3>
              <p className="text-gray-600">
                Inscrivez-vous et créez votre profil en renseignant vos compétences, votre expérience et vos disponibilités.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Trouvez des missions</h3>
              <p className="text-gray-600">
                Parcourez les offres de missions disponibles et postulez à celles qui correspondent à votre profil.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Démarrez votre mission</h3>
              <p className="text-gray-600">
                Une fois votre candidature acceptée, démarrez votre mission et recevez votre paiement en toute sécurité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0 md:w-2/3"
            >
              <h2 className="text-3xl font-bold mb-4">Prêt à trouver votre prochaine mission ou votre prochain talent ?</h2>
              <p className="text-xl text-blue-100">
                Rejoignez notre communauté de candidats et d'entreprises et trouvez la solution idéale pour vos besoins.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow hover:bg-blue-50 transition-colors"
              >
                Créer un compte
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
