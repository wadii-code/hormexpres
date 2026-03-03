import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
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
        className="bg-white rounded-lg max-w-2xl w-full overflow-hidden relative"
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
          <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
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
    </div>
  );
};

export default ServiceModal;