import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import Background from '../../../../images/backgroundHeader.png';
import { color, typography } from 'shared/style';
export interface Props {
  imageBg: string;
}

export interface MenuProps {}

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <MenuItem className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </MenuItem>
  );
};

export const Menu = (props: MenuProps) => {
  const menus = [
    {
      to: '/what-we-offer',
      label: 'What we offer',
      exact: false,
    },
    {
      to: '/how-it-work',
      label: 'How it work',
      exact: false,
    },
    {
      to: 'testimonial',
      label: 'Testimonial',
      exact: false,
    },
    {
      to: 'about-us',
      label: 'About us',
      exact: false,
    },
  ];
  return (
    <MenuContainer imageBg={Background}>
      {menus.map((item) => (
        <MenuLink
          key={item.to}
          label={item.label}
          to={item.to}
          activeOnlyWhenExact={item.exact}
        />
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.ul<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  border-top: 1px solid rgba(22, 22, 55, 0.1);
  @media (min-width: 1200px) {
    flex-direction: row;
    margin-left: 87px;
    padding: 0;
    border: none;
  }
`;
const MenuItem = styled.li`
  font-weight: 600;
  color: ${color.netraul.black100};
  font-size: ${typography.size.m1}px;
  line-height: 30px;
  margin-top: 48px;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 0;
    position: absolute;
    height: 2px;
    top: 100%;
    left: 50%;
    background-color: ${color.netraul.black100};
    transition: all 0.4s ease;
  }
  &:hover::after {
    left: 0;
    width: 100%;
  }
  @media (min-width: 1200px) {
    margin-top: 0;
    margin-right: 40px;
    font-weight: 400;
    font-size: ${typography.size.s3}px;
    color: ${color.netraul.black60};
  }
  .active {
    font-weight: bold;
    width: 100%;
    left: 0;
  }
`;
