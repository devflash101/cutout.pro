import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardData from '../constants/cardData';
import Card from '../components/Card';
import getAssetPath from '../utils/assetUtils';
import './MainPage.css';
import account_icon from '../../../public/assets/account-icon.png';

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to sign-in page on logout
    navigate('/auth/sign-in');
  };

  return (
    <div className="main-page">
      <nav className="navbar">
        <div>
          <h1>A fully integrated suite of AI products</h1>
            <p>With us, you don't need to spend millions of dollars to improve the accuracy of artificial intelligence
    algorithms, and you no longer need to worry about hiring AI experts to train models, tune parameters,
    and deploy stable services.</p>
        </div>

        <div className="account-icon">
          <img
            src={account_icon} // Add an account icon image to your public/assets folder
            alt="Account"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-item">John Doe</p> {/* Fake name */}
              <p className="dropdown-item">Upgrade</p>
              <p className="dropdown-item">Account Settings</p>
              <p className="dropdown-item" onClick={handleLogout}>Log Out</p>
            </div>
          )}
        </div>
      </nav>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.image}
            version={card.version}
            exploreLink={card.exploreLink}  // Use exploreLink from cardData
            apiLink={card.apiLink}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
