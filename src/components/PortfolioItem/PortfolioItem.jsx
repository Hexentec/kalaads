import './PortfolioItem.css';

const PortfolioItem = ({ item }) => {
  return (
    <div className="portfolio-item">
      <img src={item.image} alt={item.title} className="portfolio-image" />
      <div className="portfolio-overlay">
        <h3>{item.title}</h3>
        <p>{item.client}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;