import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ServiceDetail from '../../components/ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Advertising Agencies',
      description: 'Comprehensive advertising solutions including campaign strategy, creative development, and media planning.',
      icon: 'FaBullhorn',
      details: [
        'Brand strategy development',
        'Creative campaign design',
        'Media buying and planning',
        'Digital and traditional media integration'
      ],
      image: '/images/'
    },
    {
      title: 'Sign Board Dealers',
      description: 'High-quality sign boards for businesses of all sizes, designed for maximum visibility and impact.',
      icon: 'FaSign',
      details: [
        'Custom sign board design',
        'Material selection guidance',
        'Installation services',
        'Maintenance and repairs'
      ],
      image: '/images/services/signboards.jpg'
    },
    {
        title: 'Advertising Agencies',
        description: 'Comprehensive advertising solutions including campaign strategy, creative development, and media planning.',
        icon: 'FaBullhorn',
        details: [
          'Brand strategy development',
          'Creative campaign design',
          'Media buying and planning',
          'Digital and traditional media integration'
        ],
        image: '/images/services/advertising.jpg'
      },
      {
        title: 'Sign Board Dealers',
        description: 'High-quality sign boards for businesses of all sizes, designed for maximum visibility and impact.',
        icon: 'FaSign',
        details: [
          'Custom sign board design',
          'Material selection guidance',
          'Installation services',
          'Maintenance and repairs'
        ],
        image: '/images/services/signboards.jpg'
      },
    
  ];

  return (
    <div className="services-page">
      <Breadcrumb currentPage="Services" />
      
      <section className="services-hero">
        <div className="container">
          <h1>Our Comprehensive Services</h1>
          <p>Creative solutions tailored to your brand's unique needs</p>
        </div>
      </section>

      <section className="all-services">
        <div className="container">
          {services.map((service, index) => (
            <ServiceDetail 
              key={index} 
              service={service} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Understanding your needs and objectives</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Concept Development</h3>
              <p>Creating tailored solutions for your brand</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Implementing with precision and creativity</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Providing final products and follow-up</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;