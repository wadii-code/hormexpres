import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';

const epoxyImages = [
  { src: './images/epoxy.jpeg', alt: 'Résine époxy 1' },
  { src: './images/epoxy2.jpg', alt: 'Résine époxy 2' },
  { src: './images/epoxy6.png', alt: 'Résine époxy 3' },
  { src: './images/epoxy1.jpeg', alt: 'Résine époxy 4' },
  { src: './images/epoxy5.png', alt: 'Résine époxy 5' },
  { src: './images/epoxy6.jpeg', alt: 'Résine époxy 7' },
  { src: './images/epoxyyy.jpeg', alt: 'Résine époxy 6' },
  { src: './images/sablage2.png', alt: 'Réparation fissures 1' },
  { src: './images/sablage1.png', alt: 'Sablage 1' },
  { src: './images/sablage-avec--sable.jpeg', description: ' Sablage avec sable ' },
  { src: './images/sablage-avec-eau.jpeg', description: ' Sablage avec eau ' },
  { src: './images/sol-reparation.jpeg', alt: 'Réparation de sols 1' },
  { src: './images/reparation-de-sol.png', alt: 'Réparation de sols 2' },
  { src: './images/reparation-du-sol1.png', alt: 'Réparation de sols 3' },
  

];

const PageResineEpoxy = () => {
  const pageSeo = PAGE_SEO['/resine-epoxy'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/resine-epoxy"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/resine-epoxy'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Résine Époxy', path: '/resine-epoxy' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="video"
      mediaSrc="/videos/epo.mp4"
      bgColor="#000"
      title="Résine Époxy"
      subtitle="Revêtements industriels de qualité supérieure"
      scrollToExpand="Faites défiler pour découvrir nos réalisations"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Revêtements en Résine Époxy Industrielle
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            HORMEXPRES GROUP est votre expert en revêtements en résine époxy au Maroc. Nous proposons des solutions 
            complètes incluant la résine époxy alimentaire, antiacide et antidérapante pour tous types de sols industriels. 
            Notre équipe qualifiée assure une application professionnelle conforme aux normes les plus strictes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Types de Résine</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Résine époxy alimentaire</li>
                <li>✓ Résine antiacide</li>
                <li>✓ Résine antidérapante</li>
                <li>✓ Résine décorative</li>
                <li>✓ Résine autolissante</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Usines alimentaires</li>
                <li>✓ Entrepôts logistiques</li>
                <li>✓ Parkings couverts</li>
                <li>✓ Laboratoires</li>
                <li>✓ Zones commerciales</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#212529] mb-6">Nos Réalisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {epoxyImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={(img as any).alt ?? (img as any).description ?? 'Réalisation HORMEXPRES GROUP'}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Résine époxy</span>
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

export default PageResineEpoxy;