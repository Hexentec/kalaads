import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBullhorn, FaSign, FaLightbulb, FaChartLine } from 'react-icons/fa';
import Counter from '../../components/Counter/Counter';
import Testimonials from '../../components/Testimonials/Testimonials';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import Chatbot from '../../components/Chatbot/Chatbot';
import './Home.css';
import aboutimage from '../../assets/images/about-image.jpg';
import Clients from '../../components/Clients/Clients';
import Certifications from '../../components/Certifications/Certifications';

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  // Show chatbot popup on first visit or page change
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasVisited = localStorage.getItem('hasVisitedKalaAds');
      if (!hasVisited) {
        setShowChatbot(true);
        localStorage.setItem('hasVisitedKalaAds', 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Hero Carousel Settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    fade: true
  };

  // Certifications Carousel Settings
  const certSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // Clients Carousel Settings
  const clientSettings = {
    ...certSettings,
    slidesToShow: 5
  };

  const services = [
    {
      title: 'LED Sign Boards',
      icon: FaLightbulb,
      description: 'Modern LED displays for maximum visibility'
    },
    
    {
      title: 'Sign Board Dealers',
      icon: FaSign,
      description: 'High-quality signage solutions for all business needs'
    },
    
    {
      title: 'Outdoor Advertising',
      icon: FaChartLine,
      description: 'Strategically placed ads for maximum impact'
    },
    {
      title: 'Advertising Agencies',
      icon: FaBullhorn,
      description: 'Creative campaigns that make your brand stand out'
    },
  ];

 

 

  return (
    <div className="home-page">
      {/* Hero Carousel */}
<section className="hero-carousel">
<div className="experience-badge-circle">
    <div className="years">25+</div>
    <div className="text">Years Experience</div>
  </div>
  <Slider {...heroSettings}>
    <div className="hero-slide slide-1">
      <div className="slide-content">
        <h1>Creative Advertising Since 1999</h1>
        <p>Innovative solutions for your brand's growth</p>
        <button className="cta-button">Get a Free Consultation</button>
      </div>
    </div>
    <div className="hero-slide slide-2">
      <div className="slide-content">
        <h1>Premium Signage Solutions</h1>
        <p>High-quality boards that make your business stand out</p>
        <button className="cta-button">View Our Work</button>
      </div>
    </div>
    <div className="hero-slide slide-3">
      <div className="slide-content contact-form-slide">
        <h2>Ready to Start Your Project?</h2>
        <form className="hero-contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Tell us about your project"></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </Slider>
</section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Kala Ads</h2>
              <p>Established in 1999, Kala Ads in Daba Gardens, Visakhapatnam is a top player in the category of Advertising Agencies in the Visakhapatnam region.</p>
              <p>Over the years, we've established a firm foothold in the industry through our commitment to customer satisfaction and innovative solutions.</p>
              
              <div className="mission-vision">
                <div className="mission">
                  <h3>Our Mission</h3>
                  <p>To deliver creative and effective advertising solutions that help our clients stand out in competitive markets.</p>
                </div>
                <div className="vision">
                  <h3>Our Vision</h3>
                  <p>To be the leading creative advertising agency in Eastern India, recognized for innovation and excellence.</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={aboutimage} alt="KalaAds Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="container">
          <div className="counter-grid">
            <Counter end={24} duration={2} label="Years Experience" />
            <Counter end={1500} duration={2} suffix="+" label="Projects Completed" />
            <Counter end={500} duration={2} suffix="+" label="Happy Clients" />
            <Counter end={50} duration={2} suffix="+" label="Awards Won" />
          </div>
        </div>
      </section>

      <Certifications />
     <Clients />

      {/* Testimonials */}
      <Testimonials />

      
      <section className="portfolio-preview">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          <PortfolioGrid limit={6} />
          <div className="portfolio-cta">
            <a href="/portfolio" className="cta-button">View Full Portfolio</a>
          </div>
        </div>
      </section> 

      {/* Call to Action */}
      <section className="home-cta">
        <div className="container">
          <h2>Ready to Transform Your Brand?</h2>
          <p>Contact us today to discuss how we can help your business stand out</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot show={showChatbot} setShow={setShowChatbot} />
    </div>
  );
};

export default Home;