import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clients.css';

const Clients = () => {
  const clients = [
    { id: 1, logo: '/images/clients/client1.png', name: 'Client 1' },
    { id: 2, logo: '/images/clients/client2.png', name: 'Client 2' },
    { id: 3, logo: '/images/clients/client3.png', name: 'Client 3' },
    { id: 4, logo: '/images/clients/client4.png', name: 'Client 4' },
    { id: 5, logo: '/images/clients/client5.png', name: 'Client 5' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <Slider {...settings}>
          {clients.map(client => (
            <div key={client.id} className="client-item">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;