import React from 'react';
import { motion } from 'framer-motion';
import { Candidate } from '../data/mockData';

interface CandidateCardProps {
  candidate: Candidate;
  index: number;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)' }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
            <img src={candidate.profileImage} alt={candidate.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
            <p className="text-blue-600 font-medium">{candidate.position}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {candidate.location}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Disponibilité : {candidate.availability}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {candidate.experience} {candidate.experience > 1 ? 'ans' : 'an'} d'expérience
          </span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Compétences :</p>
          <div className="flex flex-wrap gap-1">
            {candidate.skills.map((skill, i) => (
              <span key={i} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Voir le profil
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Contacter
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CandidateCard;
