import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
  Slide,
  Avatar,
} from '@mui/material';

import { CardsComponent } from '@/app/features/cards/';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const HideAppBar = () => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <div className="mx-auto flex">
              <Box pr={2}>
                <Avatar>
                  <Image
                    src="/images/onePieceLogo.svg"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </Avatar>
              </Box>
              <div className="bg-hero-title w-40 h-10 bg-contain bg-no-repeat bg-center" />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <CardsComponent />
      </Container>
    </>
  );
};

export default HideAppBar;
