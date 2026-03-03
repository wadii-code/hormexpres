import { useEffect, useRef, useState } from 'react';
import { Building2, Hammer, Factory, Paintbrush, Droplets, Layers, Trash2, Wrench, Zap, Sparkles, ArrowRight } from 'lucide-react';
import ServiceModal from '../components/ui/ServiceModal';

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

  const services: Service[] = [
    {
      icon: Building2,
      title: 'Construction de bâtiment',
      description: 'Construction de bâtiments résidentiels, commerciaux et industriels avec les plus hauts standards de qualité.',
      image: './images/15.jpeg',
    },
    {
      icon: Hammer,
      title: 'Génie civil',
      description: 'Travaux de génie civil incluant fondations, structures, routes et infrastructures.',
      image: './images/16.jpeg',
    },
    {
      icon: Factory,
      title: 'Charpente métallique',
      description: 'Conception et installation de charpentes métalliques pour tous types de constructions.',
      image: './images/17.jpeg',
    },
    {
      icon: Paintbrush,
      title: 'Résine époxy',
      description: 'Revêtements en résine époxy alimentaire, antiacide et antidérapante pour sols industriels.',
      image: './images/18.jpeg',
    },
    {
      icon: Droplets,
      title: 'Étanchéité',
      description: 'Solutions d\'imperméabilisation et d\'étanchéité pour toitures et structures.',
      image: './images/19.jpeg',
    },
    {
      icon: Layers,
      title: 'Revêtement industriel',
      description: 'Dallage industriel, béton imprimé et revêtements de sols professionnels.',
      image: './images/20.jpeg',
    },
    {
      icon: Trash2,
      title: 'Démolition',
      description: 'Services de démolition contrôlée avec respect des normes environnementales.',
      image: './images/21.jpeg',
    },
    {
      icon: Wrench,
      title: 'Assainissement',
      description: 'Travaux d\'assainissement, plomberie et réseaux pour tous types de bâtiments.',
      image: './images/22.jpeg',
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Installation électrique complète pour constructions neuves et rénovations.',
      image: './images/23.jpeg',
    },
    {
      icon: Sparkles,
      title: 'Nettoyage industriel',
      description: 'Services de nettoyage industriel et désinfection professionnelle.',
      image: './images/24.jpeg',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#f2f6f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-subtitle">// Nos Services</span>
          <h2 className="section-title mb-6">
            CE QUE NOUS
            <span className="text-[#fbab39]"> OFFRONS</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Une gamme complète de services de construction et de rénovation pour répondre 
            à tous vos besoins, des petits travaux aux grands projets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#fbab39] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon size={24} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#212529] mb-3 font-['Teko'] tracking-wide group-hover:text-[#fbab39] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#fbab39] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-[#212529] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(251, 171, 57, 0.1) 20px,
                    rgba(251, 171, 57, 0.1) 40px
                  )`,
                }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Teko']">
                BESOIN D'UN SERVICE PERSONNALISÉ ?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis gratuit 
                adapté à vos besoins spécifiques.
              </p>
              <a href="#contact" className="btn-primary inline-flex">
                Demander un devis gratuit
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;