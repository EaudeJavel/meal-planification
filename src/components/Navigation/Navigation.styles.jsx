import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { paleOrange, deepTaupe} from "../../styles";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${paleOrange};
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
  color: ${deepTaupe};
  font-size: 1rem;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 300;

  &:hover {
    color: pink;
  }

  &.active {
    font-weight: bold;
  }
`;