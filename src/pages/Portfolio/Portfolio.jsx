import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PortfolioFilter from '../../components/PortfolioFilter/PortfolioFilter';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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
      title: 'LED Sign Board Installation',
      category: 'led',
      image: '/images/portfolio/led-sign.jpg',
      client: 'Corporate Office Park'
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
        title: 'LED Sign Board Installation',
        category: 'led',
        image: '/images/portfolio/led-sign.jpg',
        client: 'Corporate Office Park'
      },
      {
        id: 5,
        title: 'Retail Brand Campaign',
        category: 'outdoor',
        image: '/images/portfolio/retail-campaign.jpg',
        client: 'Major Retail Chain'
      },
      {
        id: 6,
        title: 'LED Sign Board Installation',
        category: 'signage',
        image: '/images/portfolio/led-sign.jpg',
        client: 'Corporate Office Park'
      },
      {
        id: 7,
        title: 'Retail Brand Campaign',
        category: 'outdoor',
        image: '/images/portfolio/retail-campaign.jpg',
        client: 'Major Retail Chain'
      },
      {
        id: 8,
        title: 'LED Sign Board Installation',
        category: 'signage',
        image: '/images/portfolio/led-sign.jpg',
        client: 'Corporate Office Park'
      },
    
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'advertising', name: 'Advertising' },
    { id: 'signage', name: 'Signage' },
    { id: 'led', name: 'LED Boards' },
    { id: 'outdoor', name: 'Outdoor Advertising' }
  ];

  return (
    <div className="portfolio-page">
      <Breadcrumb currentPage="Portfolio" />
      
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Creative Work</h1>
          <p>Explore our successful projects and satisfied clients</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <PortfolioFilter 
            categories={categories} 
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          
          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together</p>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;