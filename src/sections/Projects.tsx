import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'construction', label: 'Construction genie civil' },
    { id: 'charpente', label: 'Charpente metalique' },
    { id: 'resine', label: 'Resine epoxy' },
    { id: 'revetement', label: 'Revêtement de Dallage industriel' },
    { id: 'peinture', label: 'Peinture mural' },
    { id: 'etancheite', label: 'Étanchéité' },
    { id: 'sablage', label: 'Sablage' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Pont à Haubans de Casablanca',
      category: 'construction',
      location: 'Casablanca',
      year: '2023',
      image: './images/1.jpeg',
      gallery: ['./images/32.jpeg', './images/33.jpeg', './images/34.jpeg'],
      description: 'Construction d\'un pont à haubans de 500m de long.',
    },
    {
      id: 2,
      title: 'Barrage Hydroélectrique',
      category: 'construction',
      location: 'Azilal',
      year: '2022',
      image: './images/2.jpeg',
      gallery: ['./images/35.jpeg', './images/36.jpeg', './images/37.jpeg'],
      description: 'Construction d\'un barrage en béton de 120m de haut.',
    },
    {
      id: 3,
      title: 'Hangar Industriel de 5000 m²',
      category: 'charpente',
      location: 'Tanger',
      year: '2023',
      image: './images/3.jpeg',
      gallery: ['./images/38.jpeg', './images/39.jpeg', './images/40.jpeg'],
      description: 'Conception et montage d\'une charpente métallique pour un hangar de 5000 m².',
    },
    {
      id: 4,
      title: 'Passerelle Piétonne',
      category: 'charpente',
      location: 'Rabat',
      year: '2022',
      image: './images/4.jpeg',
      gallery: ['./images/41.jpeg', './images/42.jpeg', './images/43.jpeg'],
      description: 'Réalisation d\'une passerelle piétonne métallique de 50m.',
    },
    {
      id: 5,
      title: 'Sol en Résine pour Usine Agroalimentaire',
      category: 'resine',
      location: 'Agadir',
      year: '2023',
      image: './images/5.jpeg',
      description: 'Application de résine époxy alimentaire sur 2000 m².',
    },
    {
      id: 6,
      title: 'Parking Souterrain',
      category: 'resine',
      location: 'Marrakech',
      year: '2022',
      image: './images/6.jpeg',
      description: 'Revêtement de sol en résine pour un parking de 300 places.',
    },
    {
      id: 7,
      title: 'Dallage pour Entrepôt Logistique',
      category: 'revetement',
      location: 'Casablanca',
      year: '2023',
      image: './images/7.jpeg',
      description: 'Réalisation d\'un dallage industriel de 10 000 m² avec finition hélicoptère.',
    },
    {
      id: 8,
      title: 'Sol d\'un Centre Commercial',
      category: 'revetement',
      location: 'Rabat',
      year: '2022',
      image: './images/8.jpeg',
      description: 'Coulage et lissage d\'un dallage de 5000 m² pour un centre commercial.',
    },
    {
      id: 9,
      title: 'Façade d\'un Immeuble de Bureaux',
      category: 'peinture',
      location: 'Casablanca',
      year: '2023',
      image: './images/9.jpeg',
      description: 'Peinture extérieure et ravalement de façade d\'un immeuble de 10 étages.',
    },
    {
      id: 10,
      title: 'Décoration Intérieure d\'une Villa',
      category: 'peinture',
      location: 'Marrakech',
      year: '2022',
      image: './images/10.jpeg',
      description: 'Peinture et finitions décoratives pour une villa de luxe.',
    },
    {
      id: 11,
      title: 'Étanchéité d\'une Toiture-terrasse',
      category: 'etancheite',
      location: 'Tanger',
      year: '2023',
      image: './images/11.jpeg',
      description: 'Mise en place d\'un système d\'étanchéité multicouche sur 1000 m².',
    },
    {
      id: 12,
      title: 'Imperméabilisation d\'un Bassin',
      category: 'etancheite',
      location: 'Agadir',
      year: '2022',
      image: './images/12.jpeg',
      description: 'Application d\'un revêtement d\'imperméabilisation pour un bassin de 500 m³.',
    },
    {
      id: 13,
      title: 'Sablage de Pièces Métalliques',
      category: 'sablage',
      location: 'Casablanca',
      year: '2023',
      image: './images/13.jpeg',
      description: 'Décapage par sablage de pièces métalliques avant peinture.',
    },
    {
      id: 14,
      title: 'Nettoyage de Façade en Pierre',
      category: 'sablage',
      location: 'Rabat',
      year: '2022',
      image: './images/14.jpeg',
      description: 'Sablage et nettoyage d\'une façade en pierre de taille.',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const projectsToDisplay = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl">
            <span className="section-subtitle">// Nos Réalisations</span>
            <h2 className="section-title">
              NOS
              <span className="text-[#fbab39]"> PROJETS</span>
            </h2>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#fbab39] text-white'
                    : 'bg-[#f2f6f7] text-[#212529] hover:bg-[#fbab39]/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#212529] via-[#212529]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-[#fbab39] text-white text-xs font-semibold rounded-full mb-3">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 font-['Teko'] tracking-wide group-hover:text-[#fbab39] transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description - Shows on hover */}
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && filteredProjects.length > 6 && (
          <div
            className={`mt-12 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <button onClick={() => setShowAll(true)} className="btn-outline">
              Voir tous nos projets
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        )}

        {/* Stats Bar */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-200 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          {[
            { value: '67+', label: 'Projets réalisés' },
            { value: '50+', label: 'Clients fidèles' },
            { value: '3+', label: 'Années d\'expérience' },
            { value: '100%', label: 'Engagement qualité' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#fbab39] font-['Teko']">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;