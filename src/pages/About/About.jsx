import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Clients from '../../components/Clients/Clients';
import TeamMember from '../../components/TeamMember/TeamMember';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Founder Name',
      role: 'Founder & CEO',
      bio: 'With over 25 years in the advertising industry...',
      image: '/images/team/founder.jpg'
    },
    {
        name: 'Founder Name',
        role: 'Founder & CEO',
        bio: 'With over 25 years in the advertising industry...',
        image: '/images/team/founder.jpg'
      },
      {
        name: 'Founder Name',
        role: 'Founder & CEO',
        bio: 'With over 25 years in the advertising industry...',
        image: '/images/team/founder.jpg'
      },
    
  ];

  return (
    <div className="about-page">
      <Breadcrumb currentPage="About" />
      
      <section className="about-hero">
        <div className="container">
          <h1>Our Story Since 1999</h1>
          <p>Pioneering creative advertising solutions in Visakhapatnam</p>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <h2>From Humble Beginnings</h2>
            <p>Established in the year 1999, Kala Ads in Daba Gardens, Visakhapatnam has grown to become a top player in the category of Advertising Agencies in the region...</p>
            <p>Over the course of its journey, this business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.</p>
          </div>
          <div className="history-image">
            <img src="/images/about/old-office.jpg" alt="KalaAds early days" />
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission & Vision</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Mission</h3>
              <p>To deliver innovative and effective advertising solutions that help our clients stand out in their markets while maintaining the highest standards of quality and service.</p>
            </div>
            <div className="vision-card">
              <h3>Vision</h3>
              <p>To be the leading creative advertising agency in Eastern India, recognized for our creativity, reliability, and exceptional customer service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      
            <Clients />
          
    </div>
  );
};

export default About;