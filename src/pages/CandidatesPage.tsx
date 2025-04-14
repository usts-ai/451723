import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CandidateCard from '../components/CandidateCard';
import { mockCandidates } from '../data/mockData';

const CandidatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  
  const locations = Array.from(new Set(mockCandidates.map(candidate => candidate.location)));
  const allSkills = Array.from(new Set(mockCandidates.flatMap(candidate => candidate.skills)));
  
  const filteredCandidates = mockCandidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         candidate.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === '' || candidate.location === selectedLocation;
    const matchesSkill = selectedSkill === '' || candidate.skills.includes(selectedSkill);
    
    return matchesSearch && matchesLocation && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos candidats</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les profils de nos candidats qualifiés disponibles pour vos missions d'intérim.
          </p>
        </motion.div>
        
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Rechercher
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nom, poste..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Lieu
              </label>
              <select
                id="location"
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Tous les lieux</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="skill" className="block text-sm font-medium text-gray-700 mb-1">
                Compétence
              </label>
              <select
                id="skill"
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
              >
                <option value="">Toutes les compétences</option>
                {allSkills.map((skill, index) => (
                  <option key={index} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
        
        {/* Results Section */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            {filteredCandidates.length} candidat{filteredCandidates.length !== 1 ? 's' : ''} trouvé{filteredCandidates.length !== 1 ? 's' : ''}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate, index) => (
              <CandidateCard key={candidate.id} candidate={candidate} index={index} />
            ))}
          </div>
          
          {filteredCandidates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun candidat trouvé</h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche pour trouver des candidats correspondants.
              </p>
            </motion.div>
          )}
        </div>
        
        {/* Become a Candidate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg shadow-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Vous êtes à la recherche d'une mission ?</h3>
              <p className="text-blue-100">
                Créez votre profil gratuitement et trouvez des missions qui correspondent à vos compétences et à vos disponibilités.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md shadow hover:bg-blue-50 transition-colors"
            >
              Créer mon profil
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CandidatesPage;
