import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import FacialSpaEastMeadow from './pages/FacialSpaEastMeadow';
import SkinCareSpaLongIsland from './pages/SkinCareSpaLongIsland';
import DmkEnzymeTherapyEastMeadow from './pages/DmkEnzymeTherapyEastMeadow';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle 404.html redirect for static hosting
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect);
    }
  }, [navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <RedirectHandler />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/facial-spa-east-meadow" element={<FacialSpaEastMeadow />} />
            <Route path="/skin-care-spa-long-island" element={<SkinCareSpaLongIsland />} />
            <Route path="/dmk-enzyme-therapy-east-meadow" element={<DmkEnzymeTherapyEastMeadow />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;