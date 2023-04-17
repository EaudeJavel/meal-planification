import styled from 'styled-components';
import { paleOrange, deepTaupe, milkChocolate, plumpPurple, commonContainerStyles, commonBoxShadow } from "../../styles";

export const MealDetailsContainer = styled.div``;

export const MealName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${deepTaupe};
`;

export const MealDate = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${deepTaupe};
`;

export const NextMealsContainer = styled.div``;

export const RemainingMealsContainer = styled.div``;

export const Button = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  background-color: ${plumpPurple};
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

export const MealDetailsCard = styled.div`
  background-color: ${milkChocolate};
  border-radius: 10px;
  padding: 20px;
  ${commonBoxShadow}
  margin-bottom: 20px;
`;