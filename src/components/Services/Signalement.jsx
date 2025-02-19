import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Clock, Camera, X, Send, Check } from 'lucide-react';

const EXISTING_POINTS = [
  { id: 1, name: "Marché B" },
  { id: 2, name: "Carrefour PHOTO" },
  { id: 3, name: "Campus Universitaire" },
];

const Signalement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState("");
  const [description, setDescription] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    // Attendre 2 secondes avant de fermer le modal
    setTimeout(() => {
      setShowConfirmation(false);
      setIsModalOpen(false);
      // Réinitialiser le formulaire
      setSelectedPoint("");
      setDescription("");
      setPhotoPreview(null);
    }, 2000);
  };

  const closeModal = () => {
    if (!showConfirmation) {
      setIsModalOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <motion.div 
          className="lg:col-span-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="/assets/s.jpeg"
              alt="Interface de signalement"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-green-500/20 to-blue-500/20" />
          </div>
        </motion.div>

        <div className="mt-12 lg:mt-0 lg:col-span-6 lg:pl-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Signalement en Temps Réel
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Notre système de signalement vous permet de reporter instantanément
            les dépôts sauvages de déchets. Aidez-nous à maintenir notre ville propre
            en signalant les situations problématiques.
          </p>

          <div className="mt-8 space-y-4">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-3"
            >
              <div className="flex-shrink-0">
                <Bell className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-gray-600">Suivi des signalements en temps réel</p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-3"
            >
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-gray-600">Traitement rapide des signalements</p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            Faire un signalement
          </motion.button>
        </div>
      </div>

      {/* Modal de signalement */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-transparent backdrop-blur-sm bg-opacity-10">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle bg-white shadow-xl rounded-2xl"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Signaler un dépôt
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Point de collecte concerné
                    </label>
                    <select
                      value={selectedPoint}
                      onChange={(e) => setSelectedPoint(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md"
                      required
                    >
                      <option value="">Sélectionnez un point</option>
                      {EXISTING_POINTS.map((point) => (
                        <option key={point.id} value={point.id}>
                          {point.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Description du problème
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      placeholder="Décrivez la situation..."
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Photo du dépôt
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                        id="photo-upload"
                        required
                      />
                      <label
                        htmlFor="photo-upload"
                        className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <Camera className="h-5 w-5 mr-2 text-gray-500" />
                        Ajouter une photo
                      </label>
                    </div>
                    {photoPreview && (
                      <div className="mt-2 relative rounded-lg overflow-hidden">
                        <img
                          src={photoPreview}
                          alt="Aperçu"
                          className="h-32 w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le signalement
                    </motion.button>
                  </div>
                </form>

                <AnimatePresence>
                  {showConfirmation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90"
                    >
                      <div className="text-center text-green-600">
                        <Check className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-medium">Signalement envoyé avec succès !</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Signalement;