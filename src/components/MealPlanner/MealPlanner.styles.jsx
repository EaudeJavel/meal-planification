import styled from 'styled-components';
import { blueColor, primaryColor, secondaryColor, accentColor, commonContainerStyles } from "../../styles";

export const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${blueColor};
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

export const MealPlannerContainer = styled.div`
  ${commonContainerStyles}
`;