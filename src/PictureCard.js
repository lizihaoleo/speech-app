import React from 'react';

const PictureCard = ({ icon, label, onClick }) => {
  return (
    <div onClick={() => onClick(label)} style={{ margin: '10px', cursor: 'pointer' }}>
      <img src={icon} alt={label} style={{ width: '100px', height: '100px' }} />
    <div> {label} </div>
    </div>
  );
};

export default PictureCard;
