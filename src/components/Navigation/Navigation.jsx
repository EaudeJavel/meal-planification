import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Nav,
  NavLink,
  NavList,
  NavItem,
} from "./Navigation.styles";

const Navigation = ({ routes }) => {
  const location = useLocation();
  return (
      <Nav>
        <NavList>
          {routes.map(({ name, path }) => {
            return (
              <NavItem key={path}>
                <NavLink to={path}>{name.toLowerCase()}</NavLink>
                {location.pathname === path }
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
  );
};

export default Navigation;
