import styled from "styled-components";
import {
  paleOrange,
  deepTaupe,
  milkChocolate,
  plumpPurple,
  commonContainerStyles,
} from "../../styles";

export const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${deepTaupe};
`;

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

export const InlineButton = styled.div`
  font-size: 1rem;
  color: ${deepTaupe};
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
  }
`;

export const MealPlannerContainer = styled.div`
  margin-top: 5em;
  width: 100%;
  ${commonContainerStyles}
`;
