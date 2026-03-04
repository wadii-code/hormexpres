import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Construction bâtiment', href: '#services' },
        { name: 'Génie civil', href: '#services' },
        { name: 'Charpente métallique', href: '#services' },
        { name: 'Résine époxy', href: '#services' },
        { name: 'Étanchéité', href: '#services' },
        { name: 'Revêtement industriel', href: '#services' },
        { name: 'Assainissement', href: '#services' },
      ],
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#QuoteForm' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-[#212529] text-white py-2 transition-all duration-500 ${
          isScrolled ? 'hidden' : 'block'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0661259104" className="flex items-center gap-2 hover:text-[#fbab39] transition-colors">
              <Phone size={14} />
              <span>0661 259 104</span>
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline text-gray-300">hormexpresgroupe@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>77 Mohamed Smiha, Casablanca</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3"
          >
            <img src="./images/AdobeExpress-file.png" alt="HORMEXPRES CONSTRUCTION" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors hover:text-[#fbab39] ${
                    isScrolled ? 'text-[#212529]' : 'text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
                      isServicesOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }}
                          className="block px-5 py-3 text-sm text-[#212529] hover:bg-[#fbab39] hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#QuoteForm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#QuoteForm');
              }}
              className="btn-primary"
            >
              Demander un devis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#212529]' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.dropdown) {
                      setIsServicesOpen(!isServicesOpen);
                    } else {
                      scrollToSection(link.href);
                    }
                  }}
                  className="flex items-center justify-between text-lg font-medium text-[#212529] py-3 border-b border-gray-100"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </a>
                {link.dropdown && isServicesOpen && (
                  <div className="pl-4 py-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className="block text-sm text-gray-600 py-2 hover:text-[#fbab39]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto pb-8">
            <a
              href="#QuoteForm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#QuoteForm');
              }}
              className="btn-primary w-full"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;