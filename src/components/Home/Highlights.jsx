import React from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  return (
    <>
      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '50+', label: 'Points de collecte', color: 'green' },
              { value: '10K+', label: 'Utilisateurs actifs', color: 'blue' },
              { value: '95%', label: 'Satisfaction client', color: 'green' },
              { value: '24/7', label: 'Support disponible', color: 'blue' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
              >
                <p className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-green-600 sm:text-4xl">
              Nos Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Des solutions modernes pour une ville plus propre
            </p>
          </div>

          <div className="mt-16 space-y-16">
      {[
        {
          title: 'Localisation intelligente',
          description: 'Trouvez facilement les points de collecte les plus proches grâce à notre système de géolocalisation avancé.',
          imageFirst: true,
          image: 'assets/c.png'
        },
        {
          title: 'Signalement en temps réel',
          description: 'Signalez instantanément les débordements et suivez leur résolution en temps réel.',
          imageFirst: false,
          image: 'assets/a.png'
        }
      ].map((feature, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex flex-col ${
            feature.imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-8`}
        >
          <div className="lg:w-1/2">
            <img
              className="rounded-xl shadow-lg"
              src={feature.image}
              alt={feature.title}
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-600">
              {feature.title}
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              {feature.description}
            </p>
            <button className="mt-5 inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all
                     focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
              <span>En savoir plus</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à contribuer à une ville plus propre ?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Rejoignez notre communauté et faites partie du changement.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Commencer gratuitement
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;