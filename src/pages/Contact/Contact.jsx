import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <Breadcrumb currentPage="Contact" />
      
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you and discuss how we can help your business grow.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>Door No 30-15-144/A, Main Road, Daba Gardens, Visakhapatnam - 530020, Opposite Panlatoons</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>kalaads@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 9152676479</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {isSubmitted && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.090997029567!2d83.2111263153436!3d17.73109899898786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzUyLjAiTiA4M8KwMTInNDkuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="KalaAds Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;