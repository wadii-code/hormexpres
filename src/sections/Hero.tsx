import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Parallax */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-&lsqb;2s&rsqb ${
      isLoaded ? 'scale-100' : 'scale-110'
    }`}
  >
    <source src="videos/vid3.mp4" type="video/mp4" />
    
  </video>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/90 via-[#212529]/70 to-[#212529]/50" />  
  {/* Animated Pattern Overlay */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `repeating-linear-gradient(...)`,
      }}
    />
  </div>
</div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-12 h-[2px] bg-[#fbab39]" />
            <span className="text-[#fbab39] text-sm font-semibold tracking-[0.3em] uppercase">
              Bienvenue chez Hormexpres
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <span className="block">WE BUILD</span>
            <span className="block text-[#fbab39]">YOUR FUTURE</span>
          </h1>

          {/* Slogan */}
          <div
            className={`flex flex-wrap items-center gap-4 md:gap-8 mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            {['QUALITÉ', 'RAPIDITÉ', 'PRIX'].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-white text-lg md:text-xl font-semibold tracking-wider">
                  {item}
                </span>
                {index < 2 && (
                  <div className="w-2 h-2 bg-[#fbab39] rotate-45" />
                )}
              </div>
            ))}
          </div>

          {/* Description */}
          <p
            className={`text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            Hormexpres est une entreprise de construction et de génie civil offrant des services 
            de haute qualité avec des prix compétitifs. Nous transformons vos visions en réalité 
            avec précision et expertise.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1.1s' }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="btn-primary group"
            >
              Demander un devis
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="flex items-center gap-3 text-white hover:text-[#fbab39] transition-colors group"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-[#fbab39] transition-colors">
                <Play size={18} className="ml-1" />
              </span>
              <span className="font-medium">Voir nos projets</span>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1.3s' }}
          >
            {[
              { value: '3+', label: 'Années d\'expérience' },
              { value: '67+', label: 'Projets réalisés' },
              { value: '100%', label: 'Clients satisfaits' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-[#fbab39] font-['Teko']">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.5s' }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#about');
          }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-[#fbab39] transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>

      {/* Side Navigation Dots */}
      <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col gap-4">
          {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(`#${section}`);
              }}
              className="w-3 h-3 rounded-full bg-white/30 hover:bg-[#fbab39] transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;