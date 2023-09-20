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

import Image from 'next/image';

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
        <Box sx={{ my: 2 }} color={`black`}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </>
  );
};

export default HideAppBar;
