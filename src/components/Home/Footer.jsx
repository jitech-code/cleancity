import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CleanCity</h3>
            <p className="text-gray-400">
              Pour une ville plus propre et plus durable.
            </p>
          </div>
          {[
            {
              title: 'Navigation',
              links: ['Accueil', 'Services', 'À propos', 'Contact']
            },
            {
              title: 'Services',
              links: ['Localisation', 'Signalement', 'Abonnement', 'Support']
            },
            {
              title: 'Contact',
              items: ['contact@cleancity.com', '+237 694770796', 'Cameroun']
            }
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {(section.links || section.items).map((item, i) => (
                  <li key={i}>
                    {section.links ? (
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CleanCity. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;