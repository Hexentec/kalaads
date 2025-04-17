import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { id: 1, image: '/images/certifications/cert1.png', alt: 'Certification 1' },
    { id: 2, image: '/images/certifications/cert2.png', alt: 'Certification 2' },
    { id: 3, image: '/images/certifications/cert3.png', alt: 'Certification 3' },
    { id: 4, image: '/images/certifications/cert4.png', alt: 'Certification 4' }
  ];

  const settings = {
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

  return (
    <section className="certifications-section">
      <div className="container">
        <h2 className="section-title">Our Certifications</h2>
        <Slider {...settings}>
          {certifications.map(cert => (
            <div key={cert.id} className="cert-item">
              <img src={cert.image} alt={cert.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certifications;