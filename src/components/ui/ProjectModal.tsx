import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectName: string;
}

const ProjectModal = ({ isOpen, onClose, images, projectName }: ProjectModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">{projectName}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </header>

            <div className="p-4 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`${projectName} - Image ${index + 1}`}
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl inline-block"
            />
            <p className="text-white mt-4 text-lg">
              image
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1 text-gray-800 hover:bg-gray-200 transition-colors"
              aria-label="Close enlarged view"
            >
              <X size={28} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;