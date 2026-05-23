import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (href: string) => {
    // It's a page route
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else { // It's a hash link
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#QuoteForm' },
  ];

  const services = [
    { name: 'Construction & Génie Civil', path: '/construction-genie-civil' },
    { name: 'Démolition des immobiles', path: '/demolition-immobiles' },
    { name: 'Béton armé', path: '/beton-arme' },
    { name: 'Assainissement', path: '/assainissement' },
    { name: 'Étanchéité & Imperméabilisation', path: '/etancheite-imperméabilisation' },
    { name: 'Enduit de cuvelage', path: '/enduit-cuvelage' },
    { name: 'Réparation des fissures et sablage', path: '/reparation-fissures-sablage' },
    { name: 'Résine Époxy', path: '/resine-epoxy' },
    { name: 'Stérilisation par voie aérienne', path: '/sterilisation-aerienne' },
    { name: 'Réparation des sols', path: '/reparation-sols' },
    { name: 'Dallage industriel', path: '/revetement-dallage-industriel' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <footer className="bg-[#212529] text-white relative">
      {/* Large Background Logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute -bottom-20 -right-20 text-[20rem] font-['Teko'] font-bold text-white/[0.02] leading-none">
          H
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src="./images/newlogo.jpeg" alt="HORMEXPRES CONSTRUCTION" className="h-12" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour tous vos projets de construction et génie civil. 
              Qualité, rapidité et prix compétitifs depuis plus de 3 ans.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-['Teko'] tracking-wide">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigate(link.href)}
                    className="text-gray-400 hover:text-[#fbab39] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#fbab39] group-hover:w-4 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-['Teko'] tracking-wide">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#fbab39] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#fbab39] group-hover:w-4 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-['Teko'] tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#fbab39] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  77 Mohamed Smiha étage N°10 apt N°57 Casablanca
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#fbab39] flex-shrink-0" />
                <a href="tel:0661259104" className="text-gray-400 hover:text-[#fbab39] transition-colors text-sm">
                  0661 259 104
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#fbab39] flex-shrink-0" />
                <a href="mailto:hormexpresgroupe@gmail.com" className="text-gray-400 hover:text-[#fbab39] transition-colors text-sm">
                  hormexpresgroupe@gmail.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Contactez-nous par email</h4>
              <a
                href="mailto:hormexpresgroupe@gmail.com"
                className="flex items-center justify-center px-4 py-3 bg-[#fbab39] rounded-lg hover:bg-[#e59a2e] transition-colors w-full text-sm"
              >
                <Mail size={16} className="mr-2" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} HORMEXPRES. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <p className="hover:text-[#fbab39] transition-colors">
                Politique de confidentialité
              </p>
              <p  className="hover:text-[#fbab39] transition-colors ">
                Conditions d'utilisation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#fbab39] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#e59a2e] transition-all hover:-translate-y-1 z-50"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;