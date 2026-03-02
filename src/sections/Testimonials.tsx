import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';


const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Karim El Amrani',
      role: 'Propriétaire',
      company: 'Résidence Les Orangers',
      image: "./images/client-avatar.jpg",
      content: 'Excellente expérience avec Hormexpres pour la construction de notre résidence. Travail soigné, respect des délais et prix compétitifs. Une entreprise de confiance.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Wadii Rassy',
      role: 'Directeur de Projet',
      company: 'Projet X',
      image: "./images/wadii.jpeg",
      content: 'Une collaboration exemplaire du début à la fin. Hormexpres a su comprendre nos besoins et proposer des solutions innovantes. Le résultat final est à la hauteur de nos espérances.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Bilal Alla',
      role: 'Architecte',
      company: 'Cabinet Alla',
      image: "./images/bilal.jpg",
      content: 'Hormexpres a dépassé toutes nos attentes. Notre projet a été livré dans les délais avec une qualité exceptionnelle. L\'équipe est professionnelle, réactive et très compétente.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#212529] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              rgba(251, 171, 57, 0.1) 30px,
              rgba(251, 171, 57, 0.1) 60px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#fbab39] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            // Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Teko']">
            CE QUE DISENT NOS
            <span className="text-[#fbab39]"> CLIENTS</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-0 md:-left-8">
              <Quote size={80} className="text-[#fbab39]/20" />
            </div>

            {/* Testimonial Content */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#fbab39] text-[#fbab39]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#fbab39]"
                    />
                    <div>
                      <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#fbab39] w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#fbab39] hover:border-[#fbab39] transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#fbab39] hover:border-[#fbab39] transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div
          className={`mt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Maroc Industries', 'ImmoPlus', 'TechMaroc', 'Atlas Construction', 'Casablanca Group'].map(
              (client) => (
                <div
                  key={client}
                  className="text-white font-['Teko'] text-2xl tracking-wider hover:text-[#fbab39] transition-colors cursor-default"
                >
                  {client}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;