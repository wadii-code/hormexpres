import ScrollExpandPage from '../components/ScrollExpandPage';

const etancheiteImages = [
  { src: './images/etancheite.jpeg', alt: 'Étanchéité 1' },
  { src: './images/etancheite.jpg', alt: 'Étanchéité 2' },
  { src: './images/cavelage.jpg', alt: 'Étanchéité 3' },
  { src: './images/cavelage0.jpg', alt: 'Étanchéité 4' },
];

const PageEchantite = () => {
  return (
    <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/etancheite.jpeg"
      bgColor="#000"
      title="Étanchéité"
      subtitle="Solutions d'imperméabilisation professionnelle"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Services d'Étanchéité de Qualité Supérieure
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP propose des solutions complètes d'étanchéité pour toitures, terrasses, bassins et structures 
            enterrées. Nous utilisons des matériaux de haute performance pour garantir une protection optimale contre les infiltrations 
            d'eau et l'humidité. Notre expertise couvre tous les types de membranes et systèmes d'étanchéité.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Étanchéité bitumineuse</li>
                <li>✓ Étanchéité PVC</li>
                <li>✓ Étanchéité liquide (Résine)</li>
                <li>✓ Étanchéité bentonite</li>
                <li>✓ Isolation thermique</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Toitures terrasses</li>
                <li>✓ Bassins et réservoirs</li>
                <li>✓ Parkings souterrains</li>
                <li>✓ Fondations</li>
                <li>✓ Ponts et viaducs</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {etancheiteImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Étanchéité</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#QuoteForm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbab39] text-white font-bold rounded-lg hover:bg-[#e99a2e] transition-colors"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      }
    />
  );
};

export default PageEchantite;