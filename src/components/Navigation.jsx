import React from 'react';
import { Nav, NavLink, NavList, NavItem } from '../styles';

const Navigation = ({ routes }) => {
  return (
    <Nav>
      <NavList>
        {routes.map(({ name, path }) => {
          return (
            <NavItem key={path}>
              <NavLink to={path}>{name}</NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
};

export default Navigation;
