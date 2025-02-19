import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Search, ChevronDown } from 'lucide-react';

// Données simulées des villes et points de collecte
const CITIES_DATA = {
  dschang: {
    name: "Dschang",
    points: [
      {
        id: 1,
        name: "Marché B",
        description: "Situé derrière le marché B, accessible 24h/24",
        image: "/api/placeholder/400/300",
        address: "Marché B, Quartier B, Dschang"
      },
      {
        id: 2,
        name: "Carrefour FOTO",
        description: "À côté de la station service Total",
        image: "/api/placeholder/400/300",
        address: "Carrefour PHOTO, Avenue de la Mairie, Dschang"
      },
      {
        id: 3,
        name: "Campus Universitaire",
        description: "Près de l'entrée principale de l'université",
        image: "/api/placeholder/400/300",
        address: "Campus principal, UDs, Dschang"
      }
    ]
  },
  bafoussam: {
    name: "Bafoussam",
    points: [
      {
        id: 1,
        name: "Marché A",
        description: "Point central du marché A",
        image: "/api/placeholder/400/300",
        address: "Marché A, Centre-ville, Bafoussam"
      }
    ]
  },
  douala: {
    name: "Douala",
    points: [
      {
        id: 1,
        name: "Marché Central",
        description: "Près de l'entrée principale du marché",
        image: "/api/placeholder/400/300",
        address: "Marché Central, Akwa, Douala"
      }
    ]
  }
};

const Localisation = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Localisation Intelligente
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Notre système de géolocalisation simple vous permet de trouver
            facilement les points de collecte dans votre ville. Sélectionnez
            votre ville et découvrez les points de collecte disponibles.
          </p>

          {/* Sélecteur de ville */}
          <div className="mt-8 relative">
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedPoint(null);
              }}
              className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 rounded-md"
            >
              <option value="">Sélectionnez une ville</option>
              {Object.keys(CITIES_DATA).map((cityKey) => (
                <option key={cityKey} value={cityKey}>
                  {CITIES_DATA[cityKey].name}
                </option>
              ))}
            </select>
           
          </div>

          {/* Liste des points de collecte */}
          {selectedCity && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Points de collecte à {CITIES_DATA[selectedCity].name}
              </h3>
              <div className="space-y-4">
                {CITIES_DATA[selectedCity].points.map((point) => (
                  <motion.div
                    key={point.id}
                    whileHover={{ x: 10 }}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedPoint?.id === point.id
                        ? 'bg-green-50 border border-green-200'
                        : 'hover:bg-gray-50 border border-gray-200'
                    }`}
                    onClick={() => setSelectedPoint(point)}
                  >
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{point.name}</h4>
                        <p className="text-gray-600">{point.address}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        <motion.div 
          className="mt-12 lg:mt-0 lg:col-span-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {selectedPoint ? (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={selectedPoint.image}
                  alt={selectedPoint.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900">{selectedPoint.name}</h3>
                <p className="mt-2 text-gray-600">{selectedPoint.description}</p>
                <p className="mt-2 text-sm text-gray-500">{selectedPoint.address}</p>
              </div>
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                {selectedCity 
                  ? "Sélectionnez un point de collecte pour voir les détails" 
                  : "Sélectionnez une ville pour voir les points de collecte disponibles"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Localisation;