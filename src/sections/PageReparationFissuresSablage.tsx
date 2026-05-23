import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const reparationImages = [
  { src: './images/sablage2.png', alt: 'Réparation fissures 1' },
  { src: './images/sablage1.png', alt: 'Sablage 1' },
  { src: './images/sablage-avec--sable.jpeg', description: ' Sablage avec sable ' },
  { src: './images/sablage-avec-eau.jpeg', description: ' Sablage avec eau ' },

];

const PageReparationFissuresSablage = () => {
  const pageSeo = PAGE_SEO['/reparation-fissures-sablage'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/reparation-fissures-sablage"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/reparation-fissures-sablage'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Réparation Fissures & Sablage', path: '/reparation-fissures-sablage' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/sablage.png"
      bgColor="#000"
      title="Réparation de Fissures & Sablage"
      subtitle="Restauration et préparation de surfaces"
      scrollToExpand="Découvrez nos techniques de réparation"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Réparation de Fissures et Sablage Professionnel
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP offre des services de réparation de fissures pour tous types de maçonnerie, ainsi que des prestations de sablage pour le décapage et la préparation de surfaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Réparation de Fissures</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Injection de résine époxy</li>
                <li>✓ Matage et calfeutrement</li>
                <li>✓ Agrafage et harpage</li>
                <li>✓ Renforcement structurel</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Sablage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Décapage de peinture et rouille</li>
                <li>✓ Nettoyage de façades</li>
                <li>✓ Préparation de surfaces avant revêtement</li>
                <li>✓ Sablage de pièces métalliques</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Interventions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reparationImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{img.alt}</span>
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

export default PageReparationFissuresSablage;