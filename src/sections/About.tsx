import { useEffect, useRef, useState } from 'react';
import { Check, Award, Users, Shield, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Qualité irréprochable dans chaque projet',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Équipe qualifiée et expérimentée',
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Normes de sécurité strictes',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Solutions modernes et créatives',
    },
  ];

  const commitments = [
    'Respect des délais',
    'Transparence totale',
    'Prix compétitifs',
    'Support technique',
    'Garantie qualité',
    'Sécurité optimale',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg">
                <video
                  src="./videos/vid2.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-[#fbab39] text-white p-6 rounded-lg">
                  <div className="text-5xl font-bold font-['Teko']">3+</div>
                  <div className="text-sm uppercase tracking-wider">Années d'expérience</div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#fbab39] rounded-lg -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#f2f6f7] rounded-lg -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="section-subtitle">// À Propos de Nous</span>
            <h2 className="section-title mb-6">
              NOUS SOMMES LEADER DANS
              <span className="text-[#fbab39]"> L'INDUSTRIE</span> DE LA CONSTRUCTION
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hormexpres est une entreprise de construction et de génie civil basée à Casablanca. 
              Avec plus de 3 ans d'expérience, nous avons établi notre réputation comme leader 
              dans la région, offrant des services de construction de haute qualité.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Notre équipe d'experts qualifiés s'engage à transformer vos visions en réalité, 
              en respectant les délais, les budgets et les normes de qualité les plus élevées. 
              De la construction de bâtiments aux travaux de génie civil, nous couvrons tous 
              vos besoins avec professionnalisme et expertise.
            </p>

            {/* Commitments */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {commitments.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fbab39]/10 flex items-center justify-center">
                    <Check size={12} className="text-[#fbab39]" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              En savoir plus
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 bg-[#f2f6f7] rounded-lg hover:bg-[#212529] transition-all duration-500 hover:delay-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#fbab39] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#212529] group-hover:text-white mb-3 transition-colors font-['Teko'] tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="section-subtitle">// Innovation</span>
            <h2 className="section-title mb-6">
              DES SOLUTIONS
              <span className="text-[#fbab39]"> INNOVANTES</span> POUR VOS PROJETS
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nous investissons continuellement dans les dernières technologies et méthodes 
              de construction pour offrir à nos clients des solutions innovantes et durables. 
              Notre approche combine expertise traditionnelle et technologies de pointe.
            </p>
            <div className="space-y-4">
              {[
                'Utilisation de matériaux écologiques et durables',
                'Technologies BIM pour une planification précise',
                'Équipements modernes et efficaces',
                'Processus optimisés pour réduire les délais',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#fbab39] flex items-center justify-center flex-shrink-0 mt-1">
                    <Target size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#fbab39] p-6 rounded-lg text-white">
                    <div className="text-4xl font-bold font-['Teko']">67+</div>
                    <div className="text-sm uppercase tracking-wider">Projets</div>
                  </div>
                  <img
                    src="./images/civil1.jpg"
                    alt="Construction"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="./images/24.jpeg"
                    alt="Engineering"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="bg-[#212529] p-6 rounded-lg text-white">
                    <div className="text-4xl font-bold font-['Teko']">98%</div>
                    <div className="text-sm uppercase tracking-wider">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;