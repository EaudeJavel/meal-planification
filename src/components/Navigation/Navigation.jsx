import React from 'react';
import { 
  Nav,
  NavLink, 
  NavList, 
  NavItem, 
  NavigationContainer 
} from "./Navigation.styles";

const Navigation = ({ routes }) => {
  return (
    <NavigationContainer>
      <Nav>
        <NavList>
          {routes.map(({ name, path }) => {
            return (
              <NavItem key={path}>
                <NavLink to={path}>{name.toLowerCase()}</NavLink>
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    </NavigationContainer>
  );
};

export default Navigation;
