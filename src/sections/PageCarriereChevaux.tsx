import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const carriereChevauxImages = [
  { src: './images/cheval1.jpeg', alt: 'Carrière des chevaux 1' },
  { src: './images/cheval2.jpeg', alt: 'Carrière des chevaux 2' },
  { src: './images/cheval3.jpeg', alt: 'Carrière des chevaux 3' },
];

const PageCarriereChevaux = () => {
  const pageSeo = PAGE_SEO['/genie-civil-carriere-chevaux'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/genie-civil-carriere-chevaux"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/genie-civil-carriere-chevaux'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Génie Civil - Carrière Chevaux', path: '/genie-civil-carriere-chevaux' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/cheval1.jpeg"
      bgColor="#000"
      title="Génie civil carrière des chevaux"
      subtitle="Aménagement de carrière pour chevaux"
      scrollToExpand="Découvrez notre expertise"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Génie Civil pour Carrière de Chevaux
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP possède une expertise reconnue dans les travaux de génie civil pour les installations équestres, notamment la création et la rénovation de carrières pour chevaux. Nous assurons la préparation du terrain, le drainage et la pose de revêtements adaptés pour garantir la sécurité et le confort des chevaux et des cavaliers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Prestations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Terrassement et nivellement</li>
                <li>✓ Systèmes de drainage</li>
                <li>✓ Pose de sols équestres</li>
                <li>✓ Aménagement des abords</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Engagements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Respect du bien-être animal</li>
                <li>✓ Matériaux durables et sécurisés</li>
                <li>✓ Respect des délais</li>
                <li>✓ Conseil et accompagnement</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Notre Projet de Carrière</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {carriereChevauxImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Carrière de Chevaux</span>
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

export default PageCarriereChevaux;