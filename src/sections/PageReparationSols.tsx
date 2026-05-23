import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const reparationSolsImages = [
  { src: './images/sol-reparation.jpeg', alt: 'Réparation de sols 1' },
  { src: './images/reparation-de-sol.png', alt: 'Réparation de sols 2' },
  { src: './images/reparation-du-sol1.png', alt: 'Réparation de sols 3' },
];

const PageReparationSols = () => {
  const pageSeo = PAGE_SEO['/reparation-sols'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/reparation-sols"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/reparation-sols'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Réparation des Sols', path: '/reparation-sols' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/genie-civil-travaux.jpeg"
      bgColor="#000"
      title="Réparation de Sols"
      subtitle="Remise en état de vos sols industriels"
      scrollToExpand="Découvrez nos solutions de réparation"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Traitements et Réparation de Sols
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Un sol endommagé peut présenter des risques pour la sécurité et nuire à votre productivité. HORMEXPRES GROUP propose des solutions de réparation de sols pour remédier aux fissures, nids-de-poule et autres dégradations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Techniques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Réparation de fissures avec résine</li>
                <li>✓ Ragréage et lissage</li>
                <li>✓ Reprise de joints de dallage</li>
                <li>✓ Traitement des nids-de-poule</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Types de Sols</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Sols en béton</li>
                <li>✓ Dallages industriels</li>
                <li>✓ Sols en résine</li>
                <li>✓ Parkings et entrepôts</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Exemples de Réparation de Sols</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reparationSolsImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Réparation de Sols</span>
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

export default PageReparationSols;