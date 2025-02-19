import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Home/header';
import Footer from '../components/Home/Footer';

const Apropos = () => {
  const stats = [
    { number: "10K+", label: "Clients satisfaits" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "50T", label: "Déchets recyclés / mois" },
    { number: "30", label: "Villes partenaires" }
  ];

  const team = [
    {
        name: "Germain Njoya",
        role: "Fondateur & Directeur Général",
        image: "/api/placeholder/300/300",
        description: "Développeur Full Stack avec une expertise pointue en développement Front-end. Fort de plusieurs années d'expérience en gestion de projets numériques et en management d'équipes techniques, il allie vision stratégique et excellence opérationnelle pour diriger CleanCity vers l'innovation durable."
      },
    {
      name: "Thomas Martin",
      role: "Responsable Opérations",
      image: "/api/placeholder/300/300",
      description: "Ancien consultant en logistique urbaine, spécialisé dans l'optimisation des circuits de collecte."
    },
    {
      name: "Sophie Lambert",
      role: "Responsable Innovation",
      image: "/api/placeholder/300/300",
      description: "Ingénieure en environnement, créatrice de solutions technologiques pour le tri sélectif."
    }
  ];

  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-r from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold text-green-600 sm:text-5xl md:text-6xl"
            >
              Notre Mission
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-600"
            >
              Rendre nos villes plus propres et plus durables, une collecte à la fois.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Histoire Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Notre Histoire</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Fondée en 2025, CleanCity est née d'une vision simple : transformer la gestion des déchets urbains grâce à la technologie et l'innovation. Notre équipe de passionnés a développé une solution unique combinant expertise logistique et engagement environnemental.
                  </p>
                  <p className="text-gray-600">
                    Aujourd'hui, nous sommes fiers de servir plus de 10 000 clients à travers la France, contribuant chaque jour à un avenir plus durable pour nos villes.
                  </p>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="CleanCity histoire" 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">Notre Équipe</h2>
            <p className="mt-4 text-xl text-gray-600">Des experts passionnés par l'environnement</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-green-600 mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Apropos;