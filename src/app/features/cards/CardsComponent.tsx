import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImageList, ImageListItem } from '@mui/material';

import { AppDispatch, RootState } from '@/app/store';

import { fetchCards } from './cardsSlice';

interface CardsComponentProps {
  isShowName?: false;
  isShowCardId?: false;
}

const CardsComponent: React.FC<CardsComponentProps> = ({
  isShowName,
  isShowCardId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: RootState) => state.cards.entities);
  const loading = useSelector((state: RootState) => state.cards.loading);

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchCards());
    }
  }, []);

  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('zh-HK', {
      style: 'currency',
      currency: 'HKD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <ImageList
      sx={{ width: `100%`, height: `100%` }}
      cols={3}
      rowHeight={`auto`}
    >
      <>
        {cards.length > 0 &&
          cards.map((card) => {
            return (
              <div key={card.id} style={{ color: `#000` }}>
                <ImageListItem key={card.card_id} className="m-8px">
                  <img
                    srcSet={`https://www.onepiece-cardgame.com/images/cardlist/card/${card.card_id}.png?w=215&h=300&fit=crop&auto=format&dpr=2 2x`}
                    // src={`${card.imageurl}?w=215&h=300&fit=crop&auto=format`}
                    src={`https://www.onepiece-cardgame.com/images/cardlist/card/${card.card_id}.png?w=215&h=300&fit=crop&auto=format`}
                    alt={`card`}
                    loading="lazy"
                  />
                </ImageListItem>
                {isShowName && <div>{card.name}</div>}
                {isShowCardId && <div>{card.card_id}</div>}
                <div>
                  <b>{formatCurrency(card.price)}</b>
                </div>
              </div>
            );
          })}
      </>
    </ImageList>
  );
};

export default CardsComponent;
