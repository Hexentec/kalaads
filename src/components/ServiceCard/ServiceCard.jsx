//import { FaServicestack } from 'react-icons/FaServicestack'; // Replace with actual icon component
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      {/* <div className="service-icon">
        Replace with your actual icon component 
        <service.icon className="icon" />
      </div> */}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;