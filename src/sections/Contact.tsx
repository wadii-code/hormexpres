import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '77 Mohamed Smiha étage N°10 apt N°57 Casablanca',
      link: 'https://maps.google.com/?q=77+Mohamed+Smiha+Casablanca+Maroc',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '0661 259 104',
      link: 'tel:0661259104',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hormexpresgroupe@gmail.com',
      link: 'mailto:hormexpresgroupe@gmail.com',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#f2f6f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-subtitle">// Contactez-nous</span>
          <h2 className="section-title mb-6">
            PARLONS DE VOTRE
            <span className="text-[#fbab39]"> PROJET</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Prêt à démarrer votre projet ? Contactez-nous pour obtenir un devis gratuit 
            et discuter de vos besoins avec nos experts.        
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Contact Info Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#fbab39]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fbab39] transition-colors">
                  <info.icon size={24} className="text-[#fbab39] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {info.title}
                  </h3>
                  <p className="text-[#212529] font-medium">{info.content}</p>
                </div>
              </a>
            ))}

            {/* Working Hours */}
            <div className="p-6 bg-[#212529] rounded-lg text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-[#fbab39]" />
                <h3 className="font-semibold">Heures de travail</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Disponibilité</span>
                  <span className="text-lg font-semibold text-white bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Ouvert 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div
          className={`mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="bg-[#212529] rounded-2xl p-4">
            <div className="relative h-80 bg-gray-700 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.013917955034!2d-7.60691188479638!3d33.5789189807371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3b4a3d3e3d3%3A0x3b4a3d3e3d3e3d3!2s77%20Mohamed%20Smiha%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1620208534003!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hormexpres Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;