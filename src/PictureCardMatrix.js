import React from 'react';
import PictureCard from './PictureCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const PictureCardMatrix = ({ items, onCardClick }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={index}>
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
