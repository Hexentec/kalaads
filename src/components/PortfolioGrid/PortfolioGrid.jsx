import { Link } from 'react-router-dom';
import './PortfolioGrid.css';

const PortfolioGrid = ({ limit }) => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Retail Brand Campaign',
      category: 'advertising',
      image: '/images/portfolio/retail-campaign.jpg',
      client: 'Major Retail Chain'
    },
    {
        id: 2,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: '/images/portfolio/retail-campaign.jpg',
        client: 'Major Retail Chain'
      },
      {
        id: 3,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: '/images/portfolio/retail-campaign.jpg',
        client: 'Major Retail Chain'
      },
      {
        id: 4,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: '/images/portfolio/retail-campaign.jpg',
        client: 'Major Retail Chain'
      },
      {
        id: 5,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: '/images/portfolio/retail-campaign.jpg',
        client: 'Major Retail Chain'
      },
      {
        id: 6,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: '/images/portfolio/retail-campaign.jpg',
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