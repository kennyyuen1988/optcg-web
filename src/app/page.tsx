'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BottomNavigationWrapper } from '@/app/common/_context';
import { HideAppBar } from '@/app/common/_components';
import { CardsComponent } from '@/app/features/cards/';
import { store } from '@/app/store';

const opTheme = createTheme({
  palette: {
    primary: {
      main: '#332f54',
    },
  },
});

const Home = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={opTheme}>
          <main className="bg-white">
            <HideAppBar />
            <div className=" bg-hero-image bg-cover bg-center h-96 opacity-10">
              <CardsComponent />
            </div>
            <BottomNavigationWrapper />
          </main>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default Home;
