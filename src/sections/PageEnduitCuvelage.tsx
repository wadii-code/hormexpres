import ScrollExpandPage from '../components/ScrollExpandPage';
import SEO from '../components/SEO';
import { PAGE_SEO, getServiceSchema, getBreadcrumbSchema } from '../lib/seo';



const PageEnduitCuvelage = () => {
  const pageSeo = PAGE_SEO['/enduit-cuvelage'];
  return (
    <>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalPath="/enduit-cuvelage"
        jsonLd={[
          getServiceSchema(pageSeo.title, pageSeo.description, '/enduit-cuvelage'),
          getBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Enduit de Cuvelage', path: '/enduit-cuvelage' },
          ]),
        ]}
      />
      <ScrollExpandPage
      mediaType="image"
      mediaSrc="./images/cuvelage.jpg"
      bgColor="#000"
      title="Enduit de Cuvelage"
      subtitle="Protection efficace pour les murs enterrés"
      scrollToExpand="Découvrez nos techniques de cuvelage"
      description={
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            Application d'Enduit de Cuvelage
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            L'enduit de cuvelage est une solution d'imperméabilisation qui s'applique sur les murs de sous-sol, de caves ou de toute autre partie enterrée d'un bâtiment. Il forme une barrière étanche qui empêche les infiltrations d'eau.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Avantages du Cuvelage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Imperméabilisation totale</li>
                <li>✓ Résistance à la contre-pression</li>
                <li>✓ Protection durable des structures</li>
                <li>✓ Assainissement des locaux</li>
              </ul>
            </div>
            <div className="bg-[#f2f6f7] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#212529] mb-3">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Sous-sols et caves</li>
                <li>✓ Fosses d'ascenseur</li>
                <li>✓ Parkings souterrains</li>
                <li>✓ Réservoirs et bassins</li>
              </ul>
            </div>
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

export default PageEnduitCuvelage;