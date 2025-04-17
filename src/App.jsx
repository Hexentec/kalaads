import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  return (
    <div className="app">
      <Header />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}

// Wrap App with Router for proper routing
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}