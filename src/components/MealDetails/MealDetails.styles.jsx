import styled from 'styled-components';
import { paleOrange, deepTaupe, milkChocolate, plumpPurple, commonContainerStyles, commonBoxShadow } from "../../styles";

export const MealDetailsContainer = styled.div``;

export const NextMealsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const RemainingMealsContainer = styled.div``;

export const MealDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: ${deepTaupe};
  padding: 20px;
  ${commonBoxShadow}
  margin-bottom: 20px;
`;

export const MealName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${paleOrange};
`;

export const MealDate = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${paleOrange};
`;

export const Button = styled.button`
  max-width: 250px;
  min-height: 50px;
  font-size: 1rem;
  padding: 10px 20px;
  background-color: ${plumpPurple};
  color: ${paleOrange};
  border: none;
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