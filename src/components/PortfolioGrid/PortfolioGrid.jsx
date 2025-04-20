import { Link } from 'react-router-dom';
import port1 from '../../assets/images/port1.jpg';
import port2 from '../../assets/images/port2.jpg';
import port3 from '../../assets/images/port3.jpg';
import port22 from '../../assets/images/port22.jpg';
import port23 from '../../assets/images/port23.jpg';
import port24 from '../../assets/images/port24.jpg';
import './PortfolioGrid.css';

const PortfolioGrid = ({ limit }) => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Retail Brand Campaign',
      category: 'advertising',
      image: port1,
      client: 'Major Retail Chain'
    },
    {
        id: 2,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: port2,
        client: 'Major Retail Chain'
      },
      {
        id: 3,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: port3,
        client: 'Major Retail Chain'
      },
      {
        id: 4,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: port24,
        client: 'Major Retail Chain'
      },
      {
        id: 5,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: port22,
        client: 'Major Retail Chain'
      },
      {
        id: 6,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: port23,
        client: 'Major Retail Chain'
      },
 
  ].slice(0, limit || 6); // Show all if no limit, otherwise limit

  return (
    <div className="portfolio-grid">
      {portfolioItems.map(item => (
        <div key={item.id} className="portfolio-item">
          <div className="portfolio-image-container">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.client}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;