import React from 'react';
import './PictureCard.css';

const PictureCard = ({ icon, label, onClick }) => {
  return (
    <div className="picture-card" onClick={onClick} style={{ margin: '5px', cursor: 'pointer' }}>
      <img src={icon} alt={label} className="picture-icon" />
      <span className="picture-label">{label}</span>
    </div>
  );
};

export default PictureCard;

