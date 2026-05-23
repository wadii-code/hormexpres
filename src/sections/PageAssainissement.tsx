import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const assainissementImages = [
  { src: './images/assainissement1.jpg', alt: 'Assainissement 1' },
  { src: './images/assainissement2.jpg', alt: 'Assainissement 1' },
  { src: './images/assainissement3.jpg', alt: 'Assainissement 1' },

];

const PageAssainissement = () => {
  const pageSeo = PAGE_SEO['/assainissement'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/assainissement"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/assainissement'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Assainissement', path: '/assainissement' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/assainissement.jpeg"
      bgColor="#000"
      title="Assainissement"
      subtitle="Solutions complètes de gestion des eaux"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Services d'Assainissement et Gestion des Eaux
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP propose des solutions complètes d'assainissement pour les projets industriels, 
            commerciaux et résidentiels au Maroc. Nous réalisons la conception et l'installation de systèmes 
            d'assainissement autonomes et collectifs, conformément aux normes environnementales en vigueur.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Assainissement autonome</li>
                <li>✓ Réseaux d'eaux usées</li>
                <li>✓ Stations d'épuration</li>
                <li>✓ Fosses septiques</li>
                <li>✓ Pompes et relevages</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Zones industrielles</li>
                <li>✓ Immeubles résidentiels</li>
                <li>✓ Établissements publics</li>
                <li>✓ Zones commerciales</li>
                <li>✓ Projets agricoles</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {assainissementImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Assainissement</span>
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
    </>
  );
};

export default PageAssainissement;