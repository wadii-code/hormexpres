import { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Suppliers from './sections/Suppliers';
import Contact from './sections/Contact';
import QuoteForm from './sections/QuoteForm';
import Footer from './sections/Footer';
import SEO from './components/SEO';
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getHomepageFAQSchema,
  PAGE_SEO,
} from './lib/seo';

// Page Components
import PageDemolitionImmobiles from './sections/PageDemolitionImmobiles';
import PageBetonArme from './sections/PageBetonArme';
import PageAssainissement from './sections/PageAssainissement';
import PageEtancheiteImperméabilisation from './sections/PageEtancheiteImperméabilisation';
import PageEnduitCuvelage from './sections/PageEnduitCuvelage';
import PageReparationFissuresSablage from './sections/PageReparationFissuresSablage';
import PageResineEpoxy from './sections/PageResineEpoxy';
import PageSterilisationAerienne from './sections/PageSterilisationAerienne';
import ScrollToTop from './components/ScrollTop';
import PageRevetementDallageIndustriel from './sections/PageRevetementDallageIndustriel';
import './App.css';
import PageReparationSols from './sections/PageReparationSols';
import PageConstructionBatiment from './sections/PageConstructionBatiment';
import PageCarriereChevaux from './sections/PageCarriereChevaux';

const homepageSchemas = [
  getOrganizationSchema(),
  getLocalBusinessSchema(),
  getWebsiteSchema(),
  getHomepageFAQSchema(),
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <Header scrollY={scrollY} />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main-content">
              {/* Homepage SEO: 4 JSON-LD schemas injected into <head> */}
              <SEO
                title={PAGE_SEO['/'].title}
                description={PAGE_SEO['/'].description}
                keywords={PAGE_SEO['/'].keywords}
                canonicalPath="/"
                jsonLd={homepageSchemas}
              />
              <Hero />
              <About />
              <Services />
              <Projects />
              <Testimonials />
              <Suppliers />
              <Contact />
              <QuoteForm />
            </main>
          }
        />
        {/* Service Pages — each owns its own SEO via their component */}
        <Route path="/construction-genie-civil" element={<PageConstructionBatiment />} />
        <Route path="/demolition-immobiles" element={<PageDemolitionImmobiles />} />
        <Route path="/beton-arme" element={<PageBetonArme />} />
        <Route path="/assainissement" element={<PageAssainissement />} />
        <Route path="/etancheite-imperméabilisation" element={<PageEtancheiteImperméabilisation />} />
        <Route path="/enduit-cuvelage" element={<PageEnduitCuvelage />} />
        <Route path="/reparation-fissures-sablage" element={<PageReparationFissuresSablage />} />
        <Route path="/resine-epoxy" element={<PageResineEpoxy />} />
        <Route path="/sterilisation-aerienne" element={<PageSterilisationAerienne />} />
        <Route path="/reparation-sols" element={<PageReparationSols />} />
        <Route path="/revetement-dallage-industriel" element={<PageRevetementDallageIndustriel />} />
        <Route path="/genie-civil-carriere-chevaux" element={<PageCarriereChevaux />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
