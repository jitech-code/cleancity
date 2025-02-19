import React from 'react';
import { motion } from 'framer-motion';

const PriceTable = ({ selectedPlan }) => {
  const pricingData = {
    basic: {
      mensuel: '5 000 FCFA',
      trimestriel: '13 500 FCFA',
      annuel: '48 000 FCFA',
      title: 'Basic',
      description: 'Idéal pour les petits foyers',
      features: [
        '1 collecte par semaine',
        'Jusqu\'à 25kg de déchets par mois',
        'Accès à l\'application mobile',
        'Support par email',
      ],
      popular: false,
    },
    premium: {
      mensuel: '10 000 FCFA',
      trimestriel: '27 000 FCFA',
      annuel: '96 000 FCFA', 
      title: 'Premium',
      description: 'Pour les foyers de taille moyenne',
      features: [
        '2 collectes par semaine',
        'Jusqu\'à 50kg de déchets par mois',
        'Accès à l\'application mobile',
        'Support prioritaire',
        'Notifications en temps réel',
      ],
      popular: true,
    },
    business: {
      mensuel: '25 000 FCFA',
      trimestriel: '67 500 FCFA',
      annuel: '240 000 FCFA',
      title: 'Business',
      description: 'Adapté aux entreprises et grands foyers',
      features: [
        'Collectes illimitées',
        'Volume de déchets illimité',
        'Accès à l\'application mobile',
        'Support dédié 24/7',
        'Notifications en temps réel',
        'Rapports mensuels détaillés',
        'Collecte de déchets spéciaux',
      ],
      popular: false,
    },
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
          Nos forfaits d'abonnement
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Choisissez le forfait qui correspond à vos besoins
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(pricingData).map(([key, plan]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.03 }}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
              plan.popular ? 'ring-4 ring-green-500 ring-opacity-50' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-2 text-sm font-medium">
                Le plus populaire
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="mt-6 mb-8">
                <span className="text-5xl font-extrabold text-gray-900">
                  {plan[selectedPlan]}
                </span>
                <span className="text-gray-600 ml-2">
                  /{selectedPlan === 'mensuel' ? 'mois' : selectedPlan === 'trimestriel' ? 'trimestre' : 'an'}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Choisir ce forfait
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable;