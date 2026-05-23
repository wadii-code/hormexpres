// Central SEO configuration for HORMEXPRES GROUP
// Update SITE_URL when the production domain is confirmed.
export const SITE_CONFIG = {
  name: 'HORMEXPRES GROUP',
  // TODO: replace with the final production domain once registered
  url: 'https://www.hormexpres.ma',
  defaultTitle: 'HORMEXPRES GROUP | Entreprise de Construction & Génie Civil au Maroc',
  defaultDescription:
    'HORMEXPRES GROUP, votre entreprise de construction et génie civil à Casablanca, Maroc. Construction bâtiment, rénovation, béton armé, étanchéité et travaux BTP. Devis gratuit 24h/24.',
  defaultKeywords:
    'construction maroc, entreprise btp casablanca, génie civil maroc, constructeur bâtiment casablanca, rénovation maison maroc, entrepreneur construction maroc, travaux btp maroc, hormexpres',
  defaultImage: '/images/newlogo.jpeg',
  phone: '+212661259104',
  phoneFormatted: '0661 259 104',
  email: 'hormexpresgroupe@gmail.com',
  address: {
    street: '77 Mohamed Smiha étage N°10 apt N°57',
    city: 'Casablanca',
    region: 'Grand Casablanca',
    postalCode: '20000',
    country: 'MA',
  },
  geo: { lat: 33.5789, lng: -7.6069 },
  locale: 'fr_MA',
  themeColor: '#fbab39',
} as const;

// ---------------------------------------------------------------------------
// Per-page metadata
// ---------------------------------------------------------------------------
export const PAGE_SEO: Record<string, { title: string; description: string; keywords: string }> = {
  '/': {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    keywords: SITE_CONFIG.defaultKeywords,
  },
  '/construction-genie-civil': {
    title: 'Construction Bâtiment & Génie Civil au Maroc | HORMEXPRES',
    description:
      'Expert en construction de bâtiments et génie civil au Maroc. Projets industriels, commerciaux et résidentiels à Casablanca. Qualité, rapidité, prix compétitifs. Devis gratuit.',
    keywords:
      'construction bâtiment maroc, génie civil casablanca, entreprise construction maroc, constructeur bâtiment casablanca, gros œuvre maroc, construction industrielle maroc, bâtiment résidentiel casablanca',
  },
  '/demolition-immobiles': {
    title: "Démolition d'Immeubles & Bâtiments au Maroc | HORMEXPRES",
    description:
      "Services professionnels de démolition d'immeubles et bâtiments au Maroc. Équipements modernes et expertise certifiée à Casablanca. Intervention sécurisée et rapide.",
    keywords:
      'démolition bâtiment maroc, démolition immeuble casablanca, entreprise démolition maroc, déconstruction bâtiment maroc, démolition structure casablanca, travaux démolition maroc',
  },
  '/beton-arme': {
    title: 'Béton Armé - Travaux de Structure au Maroc | HORMEXPRES',
    description:
      'Spécialiste des travaux de béton armé et structures au Maroc. Fondations, dalles, poteaux, poutres à Casablanca. Qualité et durabilité garanties sur tous vos ouvrages.',
    keywords:
      'béton armé maroc, travaux béton casablanca, structure béton armé maroc, ferraillage béton maroc, coulage béton casablanca, fondations bâtiment maroc, dalle béton armé maroc',
  },
  '/assainissement': {
    title: "Assainissement & Réseaux d'Eau au Maroc | HORMEXPRES",
    description:
      "Expert en assainissement et réseaux d'eau au Maroc. Drainage, évacuation des eaux usées, canalisation à Casablanca. Travaux d'assainissement industriel et urbain.",
    keywords:
      'assainissement maroc, réseau assainissement casablanca, canalisation eau maroc, drainage eaux usées maroc, assainissement industriel casablanca, travaux assainissement maroc, plomberie btp maroc',
  },
  '/etancheite-imperméabilisation': {
    title: 'Étanchéité & Imperméabilisation - Expert Maroc | HORMEXPRES',
    description:
      "Solutions d'étanchéité et imperméabilisation professionnelles au Maroc. Toiture, terrasse, sous-sol protégés contre les infiltrations d'eau à Casablanca. Garantie durabilité.",
    keywords:
      'étanchéité maroc, imperméabilisation toiture casablanca, traitement étanchéité maroc, étanchéité terrasse maroc, imperméabilisation sous-sol casablanca, isolation hydrofuge maroc, anti-infiltration maroc',
  },
  '/enduit-cuvelage': {
    title: "Enduit de Cuvelage & Traitement Humidité Maroc | HORMEXPRES",
    description:
      "Spécialiste enduit de cuvelage et traitement de l'humidité au Maroc. Protection contre les infiltrations et remontées capillaires à Casablanca. Matériaux certifiés.",
    keywords:
      'enduit cuvelage maroc, traitement humidité casablanca, cuvelage sous-sol maroc, protection humidité mur maroc, anti-infiltration eau casablanca, enduit hydrofuge maroc, imperméabilisation mur maroc',
  },
  '/reparation-fissures-sablage': {
    title: 'Réparation Fissures & Sablage au Maroc | HORMEXPRES',
    description:
      "Expert en réparation de fissures structurelles et sablage de façades au Maroc. Diagnostic et traitement des fissures à Casablanca. Intervention rapide et garantie.",
    keywords:
      'réparation fissures maroc, traitement fissures bâtiment casablanca, sablage façade maroc, injection fissures maroc, colmatage fissures casablanca, réparation structure maroc, traitement façade maroc',
  },
  '/resine-epoxy': {
    title: 'Résine Époxy - Revêtement Sol Industriel Maroc | HORMEXPRES',
    description:
      'Application de résine époxy pour sols industriels et commerciaux au Maroc. Revêtements durables, esthétiques et résistants à Casablanca. Pose professionnelle garantie.',
    keywords:
      'résine époxy maroc, sol époxy casablanca, revêtement époxy industriel maroc, peinture époxy sol maroc, enduisage époxy casablanca, sol industriel résine maroc, revêtement sol industriel casablanca',
  },
  '/sterilisation-aerienne': {
    title: 'Stérilisation par Voie Aérienne au Maroc | HORMEXPRES',
    description:
      'Services de stérilisation et désinfection par voie aérienne au Maroc. Solutions professionnelles de traitement et désinfection aérienne à Casablanca et dans tout le Maroc.',
    keywords:
      'stérilisation aérienne maroc, désinfection bâtiment casablanca, traitement aérien maroc, désinfection voie aérienne maroc, stérilisation professionnelle casablanca, traitement nuisibles maroc',
  },
  '/reparation-sols': {
    title: 'Réparation & Traitement des Sols au Maroc | HORMEXPRES',
    description:
      'Expert en réparation et traitement de tous types de sols au Maroc. Restauration sols industriels, commerciaux et résidentiels à Casablanca. Résultats durables garantis.',
    keywords:
      'réparation sol maroc, traitement sol casablanca, restauration sol industriel maroc, réfection sol maroc, réparation dallage casablanca, remise en état sol maroc, carrelage industriel maroc',
  },
  '/revetement-dallage-industriel': {
    title: 'Revêtement & Dallage Industriel au Maroc | HORMEXPRES',
    description:
      'Spécialiste du revêtement et dallage industriel au Maroc. Sols durables pour entrepôts, usines et espaces commerciaux à Casablanca. Qualité certifiée et devis gratuit.',
    keywords:
      'dallage industriel maroc, revêtement sol industriel casablanca, dalle béton industrielle maroc, sol entrepôt maroc, dallage usine casablanca, revêtement industriel maroc, sol béton industriel casablanca',
  },
  '/genie-civil-carriere-chevaux': {
    title: 'Génie Civil - Carrière Chevaux au Maroc | HORMEXPRES',
    description:
      "Travaux de génie civil spécialisés pour carrière Chevaux au Maroc. Infrastructure, aménagement et construction d'ouvrages d'art avec expertise et professionnalisme.",
    keywords:
      'génie civil maroc, carrière chevaux maroc, travaux infrastructure maroc, aménagement carrière casablanca, ouvrage génie civil maroc, infrastructure travaux maroc, terrassement maroc',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schema builders
// ---------------------------------------------------------------------------

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/newlogo.jpeg`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      areaServed: 'MA',
      availableLanguage: ['French', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    email: SITE_CONFIG.email,
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor'],
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/images/newlogo.jpeg`,
    priceRange: '$$',
    description: SITE_CONFIG.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.lat,
      longitude: SITE_CONFIG.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: { '@type': 'Country', name: 'Morocco' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Construction',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Bâtiment et Génie Civil' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Démolition d'Immeubles" } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Béton Armé' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assainissement' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Étanchéité et Imperméabilisation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enduit de Cuvelage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réparation de Fissures et Sablage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Résine Époxy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stérilisation par Voie Aérienne' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réparation des Sols' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revêtement et Dallage Industriel' } },
      ],
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
    inLanguage: 'fr-MA',
  };
}

export function getHomepageFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les services de construction proposés par HORMEXPRES GROUP ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "HORMEXPRES GROUP propose une gamme complète de services BTP : construction de bâtiments et génie civil, démolition d'immeubles, béton armé, assainissement, étanchéité et imperméabilisation, enduit de cuvelage, réparation de fissures et sablage, résine époxy, stérilisation aérienne, réparation de sols, revêtement et dallage industriel.",
        },
      },
      {
        '@type': 'Question',
        name: 'Où est basée HORMEXPRES GROUP et dans quelles zones intervenez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "HORMEXPRES GROUP est basée à Casablanca, Maroc, au 77 Mohamed Smiha étage N°10 apt N°57. Nous intervenons dans tout le Maroc pour vos projets de construction, rénovation et génie civil.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment obtenir un devis gratuit pour mon projet de construction au Maroc ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vous pouvez nous contacter par téléphone au 0661 259 104, par email à hormexpresgroupe@gmail.com, ou utiliser notre formulaire de devis en ligne. Notre équipe est disponible 24h/24, 7j/7 pour vous répondre et préparer votre devis gratuit.",
        },
      },
      {
        '@type': 'Question',
        name: 'HORMEXPRES GROUP réalise-t-elle des projets résidentiels, commerciaux et industriels ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, HORMEXPRES GROUP intervient sur tous types de projets : bâtiments résidentiels (villas, appartements, immeubles), bâtiments commerciaux et industriels, entrepôts, et projets de génie civil. Nous couvrons aussi bien les nouvelles constructions que les rénovations complètes.",
        },
      },
      {
        '@type': 'Question',
        name: "Quels matériaux et standards de qualité HORMEXPRES respecte-t-elle dans ses travaux ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "HORMEXPRES GROUP s'engage sur la qualité en utilisant les dernières technologies et les meilleurs matériaux certifiés. Notre équipe très qualifiée respecte les normes de construction marocaines et internationales pour garantir la durabilité et la conformité de chaque réalisation.",
        },
      },
    ],
  };
}

export function getServiceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    areaServed: { '@type': 'Country', name: 'Morocco' },
    url: `${SITE_CONFIG.url}${path}`,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE_CONFIG.url,
      servicePhone: SITE_CONFIG.phone,
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}
