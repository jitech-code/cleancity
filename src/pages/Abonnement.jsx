import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Home/header';
import Footer from '../components/Home/Footer';
import PlanSelector from '../components/Abonnement/PlanSelector';
import PriceTable from '../components/Abonnement/PriceTable';
import PaymentMethods from '../components/Abonnement/PaymentMethods';
import Benefits from '../components/Abonnement/Benefits';
import FAQ from '../components/Abonnement/FAQ';

const AbonnementPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('mensuel');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation avec effet de verre */}
    
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-base font-semibold text-green-600">
                Forfaits Exclusifs
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Abonnez-vous à</span>
                <span className="block text-green-600">nos services premium</span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl"
            >
              Bénéficiez de la collecte de déchets à domicile et de nombreux avantages exclusifs en devenant membre premium.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Plan Selector */}
      <div className="py-8 bg-gradient-to-r from-green-600 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlanSelector selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
        </div>
      </div>

      {/* Price Table Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceTable selectedPlan={selectedPlan} />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Benefits />
        </div>
      </div>

      {/* Payment Methods */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PaymentMethods />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à profiter d'un service sur mesure ?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Souscrivez dès maintenant et bénéficiez d'un mois d'essai gratuit.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              S'abonner maintenant
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
     <Footer></Footer>
    </div>
    </>
  );
};

export default AbonnementPage