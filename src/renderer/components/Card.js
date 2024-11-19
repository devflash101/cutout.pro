import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, imageUrl, version, exploreLink, apiLink }) => {
  return (
    <div className="card">
      <span className="card-version">{version}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-links">
        <Link to={exploreLink} className="explore-link">Explore</Link>
        <a href={apiLink} className="api-link" target="_blank" rel="noopener noreferrer">API Document</a>
      </div>
    </div>
  );
};

export default Card;
