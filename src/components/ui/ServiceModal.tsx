import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  gallery?: { src: string; description: string }[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null);

  if (!isOpen || !service) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    const element = document.querySelector('#contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-4xl w-full overflow-hidden relative"
        onClick={handleContentClick}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-black z-10 bg-white/50 rounded-full p-1 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="relative h-64">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#fbab39] rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <service.icon size={28} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold font-['Teko'] tracking-wide">{service.title}</h2>
            </div>
          </div>
        </div>
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed text-base mb-6">{service.description}</p>
          
          {/* Gallery Section */}
          {service.gallery && service.gallery.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#212529] mb-4 font-['Teko']">Galerie photos</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {service.gallery.map((img, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImage(img)}>
                    <img 
                      src={img.src} 
                      alt={`${service.title} - Image ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="btn-primary inline-flex items-center mt-6"
          >
            Demander un devis pour ce service
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[110] p-4"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
        >
          <div 
            className="relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl inline-block"
            />
            <p className="text-white mt-4 text-lg">{selectedImage.description}</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1 text-gray-800 hover:bg-gray-200 transition-colors"
              aria-label="Close enlarged view"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceModal;