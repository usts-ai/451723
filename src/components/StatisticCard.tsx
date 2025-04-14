import React from 'react';
import { motion } from 'framer-motion';
import { Statistic } from '../data/mockData';

interface StatisticCardProps {
  statistic: Statistic;
  index: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ statistic, index }) => {
  const getIcon = () => {
    switch (statistic.icon) {
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'building':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'chart-line':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)' }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-full bg-blue-50">
          {getIcon()}
        </div>
        <div className="flex items-center">
          <span className={`text-sm font-medium ${statistic.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {statistic.change > 0 ? '+' : ''}{statistic.change}%
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 ${statistic.change > 0 ? 'text-green-500' : 'text-red-500'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={statistic.change > 0 ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
            />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-1">
          {statistic.label.includes('Taux') ? `${statistic.value}%` : statistic.value.toLocaleString()}
        </h3>
        <p className="text-gray-600">{statistic.label}</p>
      </div>
    </motion.div>
  );
};

export default StatisticCard;
