import React, { useContext } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Search, ShoppingCart, Person } from '@mui/icons-material';

import { BottomNavigationContext } from '@/app/common/_context';

interface HomeBottomNavigationProps {
  handleChangeTab: (newValue: number) => void;
}

const HomeBottomNavigation: React.FC<HomeBottomNavigationProps> = ({
  handleChangeTab,
}) => {
  const { bottomNavigationValue } = useContext(BottomNavigationContext);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={bottomNavigationValue}
        onChange={(event, newValue) => handleChangeTab(newValue)}
      >
        <BottomNavigationAction icon={<Home />} />
        <BottomNavigationAction icon={<Search />} />
        <BottomNavigationAction icon={<ShoppingCart />} />
        <BottomNavigationAction icon={<Person />} />
      </BottomNavigation>
    </Paper>
  );
};

export default HomeBottomNavigation;
