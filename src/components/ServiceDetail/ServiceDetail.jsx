import './ServiceDetail.css';

const ServiceDetail = ({ service, reverse }) => {
  return (
    <div className={`service-detail ${reverse ? 'reverse' : ''}`}>
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-content">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <ul>
          {service.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;