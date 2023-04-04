import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Add this import

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const AppSection = styled.div`
  width: 50%;
  padding: 24px;
`;

export const ImageSection = styled.div`
  width: 50%;
  background-image: url('https://via.placeholder.com/1920x1080');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  background-color: #2C2C2C;
  color: #FFFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 24px;
`;

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

export const Nav = styled.nav`
  background-color: #353535;
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;

export const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #E8517A;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  background-color: #353535;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E8517A;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const IngredientInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const IngredientsContainer = styled.div`
  margin-bottom: 16px;
`;

export const TextInput = styled.input`
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const MealDetailsContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  color: #333333;
`;

export const MealName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MealDate = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MealItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const IngredientsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const IngredientList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const IngredientItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const NextMealsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

export const RemainingMealsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;