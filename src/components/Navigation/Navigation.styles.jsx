import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { paleOrange, deepTaupe, commonSectionStyles, darkerBrown} from "../../styles";

export const Nav = styled.nav`
  ${commonSectionStyles};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(RouterNavLink)`
  width: 100%;
  height: 100%;
  color: ${paleOrange};
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  padding: 5px 10px;


  &.active {
    font-weight: bold;
    background-color: ${darkerBrown};
  }
`;