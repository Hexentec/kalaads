import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Certifications.css';
import cert1 from '../../assets/images/cert1.jpg';
import cert2 from '../../assets/images/cert2.jpeg';
import cert3 from '../../assets/images/cert3.jpeg';

const Certifications = () => {
  const certifications = [
    { id: 1, image: cert1, alt: 'Certification 1' },
    { id: 2, image: cert2, alt: 'Certification 2' },
    { id: 3, image: cert3, alt: 'Certification 3' },
    { id: 4, image: cert1, alt: 'Certification 4' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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