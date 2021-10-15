import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../common/Header/Header';
import { Footer } from '../common/Footer/Footer';
import { makeStyles } from '@mui/styles';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';
export interface PropsLayout {
  children: ReactNode;
}

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const DefaultLayout = ({ children }: PropsLayout) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};

const Main = styled.div`
  flex-grow: 1;
`;
