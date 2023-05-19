import styled from "styled-components";
import {
  paleOrange,
  deepTaupe,
  plumpPurple,
  commonContainerStyles,
  darkerBrown,
} from "../../styles";

export const Helper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  border-radius: 6px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: ${paleOrange};
    border-radius: 50%;
    cursor: pointer;
  }

  .content svg {
    min-width: 20px;
    min-height: 20px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${paleOrange};
    color: ${darkerBrown};
    padding: 20px;
    max-width: 400px;
    max-height: 400px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
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
  color: ${paleOrange};
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
  }
`;

export const MealPlannerContainer = styled.div`
  width: 100%;
  ${commonContainerStyles}
`;
