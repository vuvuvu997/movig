import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoIcon from '../../../../images/logo-movig.png';
import MenuIcon from '../../../../images/menuIcon.png';
import CloseIcon from '../../../../images/closeIcon.png';

import { Menu } from './Menu';
export interface Props {
  status: boolean;
}
export interface HeaderProps {}
const useStyles = makeStyles(() => ({
  container: {
    position: 'sticky',
    top: '0',
    left: '0',
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 20px',
    position: 'relative',
    zIndex: 2,
    backgroundColor: '#fff',
    '@media(min-width:650px)': {
      padding: '24px 30px',
    },
    '@media(min-width:992px)': {
      padding: '40px 40px',
    },
  },
  wrapImage: {
    display: 'block',
    height: '30px',
    width: '81px',
  },
  buttonAction: {
    cursor: 'pointer',
    maxWidth: '24px',
    maxHeight: '24px',
    '@media (min-width: 1200px)': {
      display: 'none',
    },
  },
  drawer: {
    top: '100%',
  },
  wrapButton: {
    paddingTop: '50px',
    paddingBottom: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '@media (min-width: 1200px)': {
      display: 'none',
    },
  },
  wrapButtonDesktop: {
    display: 'none',
    '@media (min-width: 1200px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  buttonLink: {
    padding: '10px 0!important',
    minWidth: '221px!important',
    '@media (min-width: 1200px)': {
      padding: '10px 24px!important',
      minWidth: 'auto!important',
    },
  },
  menu: {},
  menuDesktop: {
    display: 'none',
    '@media(min-width: 1200px)': {
      display: 'block',
    },
  },
  wrapMenuLeft: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Box className={classes.wrapMenuLeft}>
            <Link className={classes.wrapImage} to="/">
              <Image src={LogoIcon} alt="logoIcon" />
            </Link>
            <Box className={classes.menuDesktop}>
              <Menu />
            </Box>
          </Box>
          <Box className={classes.wrapButtonDesktop}>
            <Box>
              <Button
                style={{ textTransform: 'inherit' }}
                className={classes.buttonLink}
                variant="contained"
              >
                Apply for a Loan
              </Button>
            </Box>
            <Box ml={2}>
              <Button
                style={{ textTransform: 'inherit' }}
                className={classes.buttonLink}
                variant="outlined"
              >
                Drive to Own Solution
              </Button>
            </Box>
          </Box>
          <Box
            className={classes.buttonAction}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Image src={openMenu ? CloseIcon : MenuIcon} alt="menuIcon" />
          </Box>
        </Box>
        <WrapMenu status={openMenu}>
          <Menu />
          <Box className={classes.wrapButton}>
            <Box>
              <Button
                style={{ textTransform: 'inherit' }}
                className={classes.buttonLink}
                variant="contained"
              >
                Apply for a Loan
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                style={{ textTransform: 'inherit' }}
                className={classes.buttonLink}
                variant="outlined"
              >
                Drive to Own Solution
              </Button>
            </Box>
          </Box>
        </WrapMenu>
      </Box>
    </>
  );
};

const Image = styled.img``;
const WrapMenu = styled.div<Props>`
  height: calc(100vh - 78px);
  position: absolute;
  top: ${(props) => (props.status ? '100%' : 'calc(78px - 100vh)')};
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
  transition: all 0.4s ease;
  @media (min-width: 1200px) {
    display: none;
  }
`;
