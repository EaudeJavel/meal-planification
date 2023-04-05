import styled, { css } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const commonBoxShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const blueColor = '#3f4fa2';
const primaryColor = '#464f6f';
const secondaryColor = '#6d7bac';
const highlightColor = '#ffdca3';
const accentColor = '#e66b61';

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${blueColor};
  margin: 0;
`;

export const ImageSection = styled.div`
  width: 100%;
  background: center / cover no-repeat;
`;

const commonContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${primaryColor};
  border-radius: 8px;
  ${commonBoxShadow}
  margin-bottom: 20px;
`;

export const CreateMealContainer = styled.div`
  ${commonContainerStyles}
`;

export const MealPlannerContainer = styled.div`
  ${commonContainerStyles}
`;

export const AppSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

export const FormLabel = styled.label`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 10px;
  color: ${blueColor};
`;

export const TextInput = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid ${secondaryColor};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  background-color: ${accentColor};
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6b5c;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${blueColor};
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const IngredientInputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MealDetailsContainer = styled.div``;

export const MealName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${accentColor};
`;

export const MealDate = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${accentColor};
`;

export const NextMealsContainer = styled.div``;

export const RemainingMealsContainer = styled.div``;

export const IngredientsTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${blueColor};
`;

export const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const IngredientItem = styled.li`
  font-size: 1.1rem;
  color: ${primaryColor};
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${accentColor};
  ${commonBoxShadow}
`;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MealDetailsCard = styled.div`
  background-color: ${primaryColor};
  border-radius: 10px;
  padding: 20px;
  ${commonBoxShadow}
  margin-bottom: 20px;
`;

export const MealPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const MealIngredientsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const IngredientCard = styled.div`
  background-color: ${primaryColor};
  border-radius: 10px;
  padding: 20px;
  ${commonBoxShadow}
  margin-bottom: 20px;
  flex-basis: calc(50% - 10px);
`;

export const SelectMealContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const WeeklyCalendarHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: ${blueColor};
  margin-bottom: 10px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

export const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
`;

export const DayButton = styled.button`
  background-color: ${highlightColor};
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: ${accentColor};
  }
`;
