import React from 'react';
import PictureCard from './PictureCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const PictureCardMatrix = ({ items, onCardClick }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={3} sm={2} md={1} lg={1} xl={1} key={index}>
            <PictureCard 
              icon={item.icon}
              label={item.label}
              onClick={() => onCardClick(item)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PictureCardMatrix;
