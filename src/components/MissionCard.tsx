import React from 'react';
import { motion } from 'framer-motion';
import { Mission } from '../data/mockData';

interface MissionCardProps {
  mission: Mission;
  index: number;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)' }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{mission.title}</h3>
            <p className="text-blue-600 font-medium">{mission.company}</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {mission.companyLogo ? (
              <img src={mission.companyLogo} alt={mission.company} className="h-10 w-10 object-contain" />
            ) : (
              <div className="text-gray-400 text-xl font-bold">{mission.company.charAt(0)}</div>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {mission.location}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {mission.duration}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {mission.salary}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{mission.description}</p>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Compétences requises :</p>
          <div className="flex flex-wrap gap-1">
            {mission.requiredSkills.map((skill, i) => (
              <span key={i} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">Publié le {mission.postedDate}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Postuler
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;
