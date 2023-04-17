import styled from 'styled-components';
import { blueColor, primaryColor, secondaryColor, accentColor, commonContainerStyles } from "../../styles";

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

export const MealPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;