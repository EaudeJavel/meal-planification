import styled from "styled-components";
import {
  paleOrange,
  deepTaupe,
  plumpPurple,
  commonContainerStyles,
  commonBoxShadow,
  darkBrown,
  darkerBrown,
} from "../../styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormLabel = styled.label`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 10px;
  color: ${paleOrange};
`;

export const TextInput = styled.input`
  border: none;
  width: 100%;
  min-height: 42px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${darkerBrown};
  font-weight: 400;
  color: ${paleOrange};

  ::-webkit-input-placeholder {
    color: ${paleOrange};
  }
  ::-moz-placeholder {
    color: ${paleOrange};
  }
  :-ms-input-placeholder {
    color: ${paleOrange};
  }
  :-moz-placeholder {
    color: ${paleOrange};
  }

  &:focus {
    outline: none;
  }
`;

export const TextSelect = styled.select`
  border: none;
  width: 100%;
  min-height: 42px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${darkerBrown};
  font-weight: 400;
  color: ${paleOrange};

  ::-webkit-input-placeholder {
    color: ${paleOrange};
  }
  ::-moz-placeholder {
    color: ${paleOrange};
  }
  :-ms-input-placeholder {
    color: ${paleOrange};
  }
  :-moz-placeholder {
    color: ${paleOrange};
  }

  &:focus {
    outline: none;
  }
`;

export const TextInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
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

export const IngredientsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const IngredientInputGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CreateMealContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  ${commonContainerStyles}
  align-items: normal;
`;

export const InlineTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: ${paleOrange};
  margin: 12px 0 12px 0;
`;