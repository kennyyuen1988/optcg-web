// src/features/cards/CardsComponent.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { fetchCards } from './cardsSlice';

const CardsComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Specify the type here
  const cards = useSelector((state: RootState) => state.cards.entities);
  const loading = useSelector((state: RootState) => state.cards.loading);

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchCards());
    }
  }, []);

  // render your component based on the state
  return <div>{/* your JSX here */}</div>;
};

export default CardsComponent;
