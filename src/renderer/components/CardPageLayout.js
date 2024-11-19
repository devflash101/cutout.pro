import './CardPageLayout.css';
import { Outlet, useLocation } from 'react-router-dom';
import cardData from '../constants/cardData';

const CardPageLayout = ({ title }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const cardContent = cardData.find(item => item.exploreLink === pathname);

  return (
    <div className="card-page-layout">
      <nav className="navbar">{cardContent?.title}</nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default CardPageLayout;
