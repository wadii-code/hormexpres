import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const demolitionImages = [
  { src: './images/demolition1.jpeg', alt: 'Démolition 1' },
  { src: './images/civil7.jpeg', alt: 'Démolition 2' },
  { src: './images/civil8.jpeg', alt: 'Démolition 3' },
  { src: './images/demolition.jpeg', description: 'Démolition' },
  { src: './images/civil6.jpg', description: 'Démolition' },
];

const PageDemolitionImmobiles = () => {
  const pageSeo = PAGE_SEO['/demolition-immobiles'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/demolition-immobiles"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/demolition-immobiles'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: "Démolition d'Immeubles", path: '/demolition-immobiles' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/demolition.jpeg"
      bgColor="#000"
      title="Démolition d'Immeubles"
      subtitle="Solutions de démolition sécurisées et efficaces"
      scrollToExpand="Faites défiler pour en savoir plus"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Démolition Contrôlée et Sécurisée
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est spécialisé dans la démolition d'immeubles, offrant des services complets pour les projets de toutes tailles. Nous utilisons des techniques de démolition modernes et sécurisées pour garantir un travail efficace et respectueux de l'environnement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Compétences</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Démolition mécanique</li>
                <li>✓ Démolition manuelle</li>
                <li>✓ Curage de bâtiments</li>
                <li>✓ Tri et évacuation des déchets</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Types de Projets</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Immeubles résidentiels</li>
                <li>✓ Bâtiments industriels</li>
                <li>✓ Ouvrages d'art</li>
                <li>✓ Structures commerciales</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Projets de Démolition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demolitionImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Démolition</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#QuoteForm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbab39] text-white font-bold rounded-lg hover:bg-[#e99a2e] transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      }
    />
    </>
  );
};

export default PageDemolitionImmobiles;