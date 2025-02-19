import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      title: "Collecte à domicile",
      description: "Nous venons récupérer vos déchets directement chez vous, aux horaires qui vous conviennent.",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Tri sélectif",
      description: "Nous vous fournissons des conteneurs de tri pour faciliter le recyclage et la valorisation de vos déchets.",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
    {
      title: "Suivi en temps réel",
      description: "Suivez le statut de vos collectes et gérez vos rendez-vous depuis notre application mobile.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: "Rapports environnementaux",
      description: "Recevez des rapports mensuels sur votre impact environnemental et vos économies d'émissions CO2.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Avantages de l'abonnement
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Découvrez tous les avantages exclusifs réservés à nos membres
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center"
          >
            <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 shadow-inner"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Programme de fidélité</h3>
            <p className="text-gray-700">
              Gagnez des points à chaque collecte et échangez-les contre des réductions ou des services supplémentaires.
            </p>
          </div>
          <button className="flex-shrink-0 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
            En savoir plus
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Benefits;