import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PortfolioFilter from '../../components/PortfolioFilter/PortfolioFilter';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import port1 from '../../assets/images/port1.jpg';
import port2 from '../../assets/images/port2.jpg';
import port3 from '../../assets/images/port3.jpg';
import port4 from '../../assets/images/port4.jpg';
import port5 from '../../assets/images/port5.jpg';
import port6 from '../../assets/images/port6.jpg';
import port7 from '../../assets/images/port7.jpg';
import port8 from '../../assets/images/port8.jpg';
import port9 from '../../assets/images/port9.jpg';
import port10 from '../../assets/images/port10.jpg';
import port11 from '../../assets/images/port11.jpg';
import port12 from '../../assets/images/port12.jpg';
import port13 from '../../assets/images/port13.jpg';
import port14 from '../../assets/images/port14.jpg';
import port15 from '../../assets/images/port15.jpg';
import port16 from '../../assets/images/port16.jpg';
import port17 from '../../assets/images/port17.jpg';
import port18 from '../../assets/images/port18.jpg';
import port19 from '../../assets/images/port19.jpg';
import port20 from '../../assets/images/port20.jpg';
import port21 from '../../assets/images/port21.jpg';
import port22 from '../../assets/images/port22.jpg';
import port23 from '../../assets/images/port23.jpg';
import port24 from '../../assets/images/port24.jpg';
import port25 from '../../assets/images/Port25.jpg';



import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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
      title: 'LED Sign Board Installation',
      category: 'led',
      image: port2,
      client: 'Corporate Office Park'
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
        title: 'LED Sign Board Installation',
        category: 'led',
        image: port22,
        client: 'Corporate Office Park'
      },
      {
        id: 5,
        title: 'Retail Brand Campaign',
        category: 'outdoor',
        image: port23,
        client: 'Major Retail Chain'
      },
      {
        id: 6,
        title: 'LED Sign Board Installation',
        category: 'signage',
        image: port24,
        client: 'Corporate Office Park'
      },
      {
        id: 7,
        title: 'Retail Brand Campaign',
        category: 'outdoor',
        image: port25,
        client: 'Major Retail Chain'
      },
      {
        id: 8,
        title: 'LED Sign Board Installation',
        category: 'signage',
        image: port21,
        client: 'Corporate Office Park'
      },
      {
        id: 9,
        title: 'Retail Brand Campaign',
        category: 'advertising',
        image: port4,
        client: 'Major Retail Chain'
      },
      {
        id: 10,
        title: 'LED Sign Board Installation',
        category: 'led',
        image: port5,
        client: 'Corporate Office Park'
      },
      {
          id: 11,
          title: 'Retail Brand Campaign',
          category: 'advertising',
          image: port6,
          client: 'Major Retail Chain'
        },
        {
          id: 12,
          title: 'LED Sign Board Installation',
          category: 'led',
          image: port7,
          client: 'Corporate Office Park'
        },
        {
          id: 13,
          title: 'Retail Brand Campaign',
          category: 'outdoor',
          image: port8,
          client: 'Major Retail Chain'
        },
        {
          id: 14,
          title: 'LED Sign Board Installation',
          category: 'signage',
          image: port9,
          client: 'Corporate Office Park'
        },
        {
          id: 15,
          title: 'Retail Brand Campaign',
          category: 'outdoor',
          image: port10,
          client: 'Major Retail Chain'
        },
        {
          id: 16,
          title: 'LED Sign Board Installation',
          category: 'signage',
          image: port11,
          client: 'Corporate Office Park'
        },
        {
          id: 17,
          title: 'Retail Brand Campaign',
          category: 'advertising',
          image: port12,
          client: 'Major Retail Chain'
        },
        {
          id: 18,
          title: 'LED Sign Board Installation',
          category: 'led',
          image: port13,
          client: 'Corporate Office Park'
        },
        {
            id: 19,
            title: 'Retail Brand Campaign',
            category: 'advertising',
            image: port14,
            client: 'Major Retail Chain'
          },
          {
            id: 20,
            title: 'LED Sign Board Installation',
            category: 'led',
            image: port15,
            client: 'Corporate Office Park'
          },
          {
            id: 21,
            title: 'Retail Brand Campaign',
            category: 'outdoor',
            image: port16,
            client: 'Major Retail Chain'
          },
          {
            id: 22,
            title: 'LED Sign Board Installation',
            category: 'signage',
            image: port17,
            client: 'Corporate Office Park'
          },
          {
            id: 23,
            title: 'Retail Brand Campaign',
            category: 'outdoor',
            image: port18,
            client: 'Major Retail Chain'
          },
          {
            id: 24,
            title: 'LED Sign Board Installation',
            category: 'signage',
            image: port19,
            client: 'Corporate Office Park'
          },
          {
            id: 25,
            title: 'LED Sign Board Installation',
            category: 'signage',
            image: port20,
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