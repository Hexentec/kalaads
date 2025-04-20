import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const servicesList = [
    'Advertising Agencies',
    'Sign Board Dealers',
    'Sign Board Manufacturers',
    'Outdoor Advertising',
    'LED Sign Boards',
    'Flex Board Manufacturing',
    'Glow Sign Boards'
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3>Kala Ads</h3>
              <p>Established in 1999, Kala Ads is a premier advertising agency in Visakhapatnam providing innovative solutions for businesses of all sizes.</p>
              <div className="social-links">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                {servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt />
                  <span>Door No 30-15-144/A, Main Road, Daba Gardens, Visakhapatnam - 530020</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+91 9152676479</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>kalaads@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} KalaAds. All Rights Reserved.</p>
          <p>Established in 1999</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;