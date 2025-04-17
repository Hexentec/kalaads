import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ currentPage }) => {
  return (
    <nav className="breadcrumb">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span className="separator">/</span>
          </li>
          <li>
            <span className="current">{currentPage}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;