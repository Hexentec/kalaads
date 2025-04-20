import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import client1 from '../../assets/images/client1.jpg';
import client2 from '../../assets/images/client2.jpg';
import client3 from '../../assets/images/client3.jpg';
import client4 from '../../assets/images/client4.jpg';
import client5 from '../../assets/images/client5.jpg';
import './Clients.css';

const Clients = () => {
  const clients = [
    { id: 1, logo: client1, name: 'Client 1' },
    { id: 2, logo: client2, name: 'Client 2' },
    { id: 3, logo: client3, name: 'Client 3' },
    { id: 4, logo: client4, name: 'Client 4' },
    { id: 5, logo: client5, name: 'Client 5' }
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