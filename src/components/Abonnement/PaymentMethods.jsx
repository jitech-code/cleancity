import React from 'react';
import { motion } from 'framer-motion';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: 'orange-money',
      name: 'Orange Money',
      description: 'Paiement sécurisé via Orange Money. Confirmez le paiement par SMS.',
      color: 'bg-orange-500',
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
    },
    {
      id: 'mtn-money',
      name: 'MTN Mobile Money',
      description: 'Paiement sécurisé via MTN Mobile Money. Confirmez le paiement par SMS.',
      color: 'bg-yellow-400',
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Modes de paiement
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Nous acceptons les méthodes de paiement mobile suivantes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className={`${method.color} p-4 flex items-center space-x-4`}>
              {method.icon}
              <h3 className="text-xl font-bold text-white">{method.name}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">{method.description}</p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-gray-500">1</span>
                </div>
                <p className="text-gray-700">Sélectionnez {method.name} comme méthode de paiement</p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-gray-500">2</span>
                </div>
                <p className="text-gray-700">Entrez votre numéro de téléphone</p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-gray-500">3</span>
                </div>
                <p className="text-gray-700">Confirmez le paiement sur votre téléphone</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-xl p-6 shadow-inner">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Bientôt disponible</h3>
        <p className="text-gray-700">
          Nous travaillons à l'intégration d'autres méthodes de paiement pour votre confort.
          Si vous souhaitez proposer une autre méthode de paiement, veuillez nous contacter.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;