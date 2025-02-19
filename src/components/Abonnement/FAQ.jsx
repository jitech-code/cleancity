import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment fonctionne la collecte à domicile ?",
      answer: "Nos équipes se déplacent chez vous selon un calendrier que vous définissez. Vous pouvez programmer vos collectes via notre application mobile ou notre site web, avec la possibilité de modifier vos créneaux jusqu'à 24h avant le passage prévu."
    },
    {
      question: "Quels types de déchets collectez-vous ?",
      answer: "Nous collectons les déchets ménagers, recyclables, le verre, les encombrants et les déchets verts. Chaque type de déchet doit être trié dans les conteneurs appropriés que nous vous fournissons avec votre abonnement."
    },
    {
      question: "Puis-je modifier la fréquence de collecte ?",
      answer: "Oui, vous pouvez ajuster la fréquence de collecte selon vos besoins via votre espace client. Les modifications prendront effet le mois suivant votre demande."
    },
    {
      question: "Comment fonctionne le programme de fidélité ?",
      answer: "Vous gagnez des points à chaque collecte effectuée. Ces points peuvent être échangés contre des services supplémentaires, des réductions sur votre abonnement ou des produits écologiques dans notre boutique partenaire."
    },
    {
      question: "Que faire en cas d'absence lors d'une collecte ?",
      answer: "Vous pouvez reporter votre collecte jusqu'à 24h avant le passage prévu via l'application mobile. Nous vous proposerons automatiquement de nouveaux créneaux disponibles."
    },
    {
      question: "L'abonnement peut-il être suspendu temporairement ?",
      answer: "Oui, vous pouvez suspendre votre abonnement jusqu'à 2 mois par an, par exemple pendant vos vacances. La suspension doit être demandée au moins 7 jours à l'avance."
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Questions fréquentes
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Tout ce que vous devez savoir sur nos services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <div className="px-6 py-4 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Vous ne trouvez pas la réponse à votre question ?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
        >
          Contactez-nous
        </motion.button>
      </div>
    </div>
  );
};

export default FAQ;