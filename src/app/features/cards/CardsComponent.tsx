import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImageList, ImageListItem } from '@mui/material';

import { AppDispatch, RootState } from '@/app/store';

import { fetchCards } from './cardsSlice';

const CardsComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: RootState) => state.cards.entities);
  const loading = useSelector((state: RootState) => state.cards.loading);

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchCards());
    }
  }, []);

  return (
    <ImageList
      sx={{ width: `100%`, height: `100%` }}
      cols={3}
      rowHeight={`auto`}
    >
      <>
        {cards.map((card) => {
          return (
            <ImageListItem key={card.id} className="m-8px">
              <img
                srcSet={`${card.imageurl}?w=215&h=300&fit=crop&auto=format&dpr=2 2x`}
                src={`${card.imageurl}?w=215&h=300&fit=crop&auto=format`}
                alt={`card`}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </>
    </ImageList>
  );
};

export default CardsComponent;
