import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const dallageImages = [
  { src: './images/Dallage3.jpg', alt: 'Dallage industriel 3' },
        { src: './images/Dallage5.jpg', description: ' Dallage ' },
        { src: './images/dal.jpeg', description: ' Dallage ' },
        { src: './images/dal1.jpeg', description: ' Dallage ' },
        { src: './images/dal2.jpeg', description: ' Dallage ' },
        { src: './images/dal3.jpeg', description: ' Dallage ' },
        { src: './images/dallage.jpg', description: ' Dallage ' },
        { src: './images/dal6.png', description: ' Dallage ' },
        { src: './images/dal7.jpeg', description: ' Dallage ' },
        { src: './images/dal8.jpeg', description: ' Dallage ' },
        { src: './images/sol-reparation.jpeg', description: ' Réparation de sol ' },
];

const PageRevetementDallageIndustriel = () => {
  const pageSeo = PAGE_SEO['/revetement-dallage-industriel'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/revetement-dallage-industriel"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/revetement-dallage-industriel'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Revêtement & Dallage Industriel', path: '/revetement-dallage-industriel' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/dal4.png"
      bgColor="#000"
      title="Dallage Industriel"
      subtitle="Sols robustes pour les environnements exigeants"
      scrollToExpand="Découvrez nos solutions de dallage"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Revêtements et Dallage Industriel
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est un expert en dallage industriel. Nous réalisons des sols en béton robustes et durables, adaptés aux contraintes de votre activité : trafic intense, charges lourdes, agressions chimiques, etc.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Nos Prestations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Dallage en béton armé</li>
                <li>✓ Finition quartzée</li>
                <li>✓ Sols en résine</li>
                <li>✓ Marquage au sol</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Entrepôts logistiques</li>
                <li>✓ Usines de production</li>
                <li>✓ Parkings</li>
                <li>✓ Surfaces commerciales</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations en Dallage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dallageImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Dallage Industriel</span>
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

export default PageRevetementDallageIndustriel;