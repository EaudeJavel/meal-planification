import styled from 'styled-components';
import { paleOrange, deepTaupe, milkChocolate, plumpPurple, commonContainerStyles } from "../../styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 10px;
  color: ${deepTaupe};
`;

export const TextInput = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid ${deepTaupe};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
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

export const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${deepTaupe};
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

export const CreateMealContainer = styled.div`
  ${commonContainerStyles}
`;