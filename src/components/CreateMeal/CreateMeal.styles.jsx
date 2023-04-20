import styled from "styled-components";
import {
  paleOrange,
  deepTaupe,
  milkChocolate,
  plumpPurple,
  commonContainerStyles,
  commonBoxShadow
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
  color: ${deepTaupe};
`;

export const TextInput = styled.input`
  border: none;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  background-color: ${paleOrange};
  font-weight: bold;
  color: ${deepTaupe};

  ::-webkit-input-placeholder {
    color: ${deepTaupe};
  }
  ::-moz-placeholder {
    color: ${deepTaupe};
  }
  :-ms-input-placeholder {
    color: ${deepTaupe};
  }
  :-moz-placeholder {
    color: ${deepTaupe};
  }

  &:focus {
    outline: none;
  }
`;

export const TextInputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  // .input-placeholder {
  //   display: none;
  // }
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
  width: 100%;
  margin-top: 3em;
  ${commonContainerStyles}
`;

export const Square = styled.span`
  display: inline-block;
  position: absolute;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: ${plumpPurple};
  ${commonBoxShadow}
`;
