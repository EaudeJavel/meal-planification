import styled from 'styled-components';
import { paleOrange, deepTaupe, milkChocolate, plumpPurple } from "../../styles";

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


export const SelectMealContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const FilteredMealsContainer = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 8px;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
`;

export const FilteredMeal = styled.li`
  padding: 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;

export const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: ${plumpPurple};
  color: #fff;
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