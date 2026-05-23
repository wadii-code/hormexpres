import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const etancheiteImages = [
  { src: './images/etancheite.jpeg', alt: 'Étanchéité 1' },
  { src: './images/etancheite.jpg', alt: 'Étanchéité 2' },
  { src: './images/echanteite.jpg', alt: 'Étanchéité 3' },
  { src: './images/etancheite4.png', alt: 'Étanchéité 4' },
];

const PageEtancheiteImperméabilisation = () => {
  const pageSeo = PAGE_SEO['/etancheite-imperméabilisation'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/etancheite-imperméabilisation"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/etancheite-imperméabilisation'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Étanchéité & Imperméabilisation', path: '/etancheite-imperméabilisation' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/etancheite.jpg"
      bgColor="#000"
      title="Étanchéité & Imperméabilisation"
      subtitle="Protection durable contre les infiltrations d'eau"
      scrollToExpand="Découvrez nos solutions d'étanchéité"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Solutions Complètes d'Étanchéité
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP propose des solutions d'étanchéité et d'imperméabilisation pour tous types de structures. Nous protégeons vos bâtiments contre les infiltrations d'eau, garantissant ainsi leur durabilité et leur salubrité.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Étanchéité de toitures-terrasses</li>
                <li>✓ Imperméabilisation de fondations</li>
                <li>✓ Traitement des murs enterrés</li>
                <li>✓ Étanchéité de bassins et piscines</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Matériaux Utilisés</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Membranes bitumineuses</li>
                <li>✓ Résines d'étanchéité</li>
                <li>✓ Systèmes d'étanchéité liquide (SEL)</li>
                <li>✓ Mortiers d'imperméabilisation</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations en Étanchéité</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {etancheiteImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
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
              Demander un devis
            </a>
          </div>
        </div>
      }
    />
    </>
  );
};

export default PageEtancheiteImperméabilisation;