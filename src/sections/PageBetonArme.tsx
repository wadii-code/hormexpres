import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const betonArmeImages = [
  { src: './images/beton-arme.jpg', alt: 'Béton armé 1' },
  { src: './images/beton-arme2.jpg', alt: 'Béton armé 2' },
  { src: './images/beton-arme3.jpg', alt: 'Béton armé 3' },
];

const PageBetonArme = () => {
  const pageSeo = PAGE_SEO['/beton-arme'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/beton-arme"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/beton-arme'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Béton Armé', path: '/beton-arme' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/beton-arme-officiel.jpg"
      bgColor="#000"
      title="Béton Armé"
      subtitle="Structures en béton armé pour tous vos projets"
      scrollToExpand="Découvrez notre expertise en béton armé"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Ouvrages en Béton Armé
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP maîtrise la réalisation d'ouvrages en béton armé, un matériau essentiel pour la construction de structures solides et durables. Nous intervenons sur des projets de génie civil et de bâtiment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Compétences</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Coffrage et ferraillage</li>
                <li>✓ Coulage de béton</li>
                <li>✓ Préfabrication d'éléments en béton</li>
                <li>✓ Réparation et renforcement de structures</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Types d'Ouvrages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Fondations et radiers</li>
                <li>✓ Poteaux, poutres et dalles</li>
                <li>✓ Murs de soutènement</li>
                <li>✓ Ouvrages d'art (ponts, tunnels)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Projets en Béton Armé</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {betonArmeImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Béton Armé</span>
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

export default PageBetonArme;