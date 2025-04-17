import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Sunrise Enterprises',
      text: 'KalaAds transformed our brand visibility with their innovative signage solutions. Their team understood our needs perfectly and delivered beyond expectations.',
      rating: 5
    },
    {
        name: 'Rajesh Kumar',
        company: 'Sunrise Enterprises',
        text: 'KalaAds transformed our brand visibility with their innovative signage solutions. Their team understood our needs perfectly and delivered beyond expectations.',
        rating: 5
      },
      {
        name: 'Rajesh Kumar',
        company: 'Sunrise Enterprises',
        text: 'KalaAds transformed our brand visibility with their innovative signage solutions. Their team understood our needs perfectly and delivered beyond expectations.',
        rating: 5
      },
      {
        name: 'Rajesh Kumar',
        company: 'Sunrise Enterprises',
        text: 'KalaAds transformed our brand visibility with their innovative signage solutions. Their team understood our needs perfectly and delivered beyond expectations.',
        rating: 5
      },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;