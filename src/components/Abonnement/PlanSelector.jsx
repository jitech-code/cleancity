import React from 'react';
import { motion } from 'framer-motion';

const PlanSelector = ({ selectedPlan, setSelectedPlan }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez votre forfait</h2>
      <div className="bg-white p-1 rounded-full inline-flex shadow-md">
        <button
          onClick={() => setSelectedPlan('mensuel')}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
            selectedPlan === 'mensuel'
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-sm'
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Mensuel
        </button>
        <button
          onClick={() => setSelectedPlan('trimestriel')}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
            selectedPlan === 'trimestriel'
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-sm'
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Trimestriel
        </button>
        <button
          onClick={() => setSelectedPlan('annuel')}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
            selectedPlan === 'annuel'
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-sm'
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Annuel
        </button>
      </div>
      {selectedPlan === 'trimestriel' && (
        <p className="mt-2 text-sm text-green-600">Économisez 10% par rapport au forfait mensuel</p>
      )}
      {selectedPlan === 'annuel' && (
        <p className="mt-2 text-sm text-green-600">Économisez 20% par rapport au forfait mensuel</p>
      )}
    </div>
  );
};

export default PlanSelector;