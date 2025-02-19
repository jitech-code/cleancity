import React from 'react';
import { motion } from 'framer-motion';
import Localisation from '../components/Services/Localisation';
import Signalement from '../components/Services/Signalement';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/header';

const ServicesPage = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-r from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span className="block">Nos Services</span>
              <span className="block text-green-600">Pour une ville plus propre</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-500"
            >
              Découvrez nos solutions innovantes pour la gestion des déchets urbains
              et contribuez à un environnement plus sain.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Services Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            <Localisation />
            <Signalement />
          </div>
        </div>
      </div>
 {/* CTA Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="bg-gradient-to-r from-green-600 to-blue-600 py-16"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-extrabold text-white">
      Prêt à rejoindre notre initiative ?
    </h2>
    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
      Bénéficiez d'une récupération de vos ordures grâce à nos véhicules 
      adaptés directement à votre domicile pour éviter de vous déplacer.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
    >
      Abonnez-vous ici
    </motion.button>
  </div>
</motion.div>

           <Footer></Footer>
    </div>
    </>
  );
};

export default ServicesPage;