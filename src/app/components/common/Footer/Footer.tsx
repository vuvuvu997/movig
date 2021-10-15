import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, typography } from 'shared/style';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
interface Props {}

const useStyle = makeStyles(() => ({
  container: {
    padding: '0 20px',
    '@media (min-width:1024px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: ' 80px 40px',
      flexDirection: 'row-reverse',
    },
  },
  copyRight: {},
}));
export const Footer = (props: Props) => {
  const classes = useStyle();
  const list = [
    { label: 'Linkedin', to: '' },
    { label: 'Terms & Conditions', to: '' },
    { label: 'Privacy Policy', to: '' },
  ];
  return (
    <Box className={classes.container}>
      <ListLink>
        {list.map((item) => (
          <ItemLink>
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          </ItemLink>
        ))}
      </ListLink>
      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '22px',
            color: color.netraul.black60,
            padding: '32px 0',
            fontFamily: typography.type.primary,
            '@media(min-width: 1024px)': {
              padding: 0,
            },
          }}
          className={classes.copyRight}
          align="center"
        >
          © 2021 Movig Pte. Ltd. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

const ListLink = styled.ul`
  padding-top: 80px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  boder-bottom: 1px solid #f8f6ff;
  border-bottom: 1px solid rgba(22, 22, 55, 0.1);
  @media (min-width: 1024px) {
    padding: 0;
    flex-direction: row;
    justify-content: flex-end;
    border: none;
  }
`;
const ItemLink = styled.li`
  margin-bottom: 24px;
  color: ${color.netraul.black60};
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-left: 40px;
  }
`;
