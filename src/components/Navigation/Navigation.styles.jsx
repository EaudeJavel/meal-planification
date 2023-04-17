import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { blueColor, primaryColor, secondaryColor, accentColor, commonContainerStyles, commonBoxShadow } from "../../styles";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${primaryColor};
  padding: 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled(RouterNavLink)`
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${accentColor};
  ${commonBoxShadow}
`;