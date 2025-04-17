import './PortfolioFilter.css';

const PortfolioFilter = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="portfolio-filter">
      {categories.map(category => (
        <button
          key={category.id}
          className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
          onClick={() => setActiveFilter(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;