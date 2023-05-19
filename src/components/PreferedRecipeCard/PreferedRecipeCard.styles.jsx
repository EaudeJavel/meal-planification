import styled from "styled-components";
import {
  paleOrange,
  deepTaupe,
  commonSectionStyles,
  darkerBrown,
} from "../../styles";

export const CardContainer = styled.div`
  ${commonSectionStyles}
  background-color: ${darkerBrown};
  width: 180px;
  height: 220px;
  margin: 0 12px 0 0;
  cursor: pointer;

  img {
    margin-bottom: 16px;
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: ${paleOrange};
  margin: 0 0 12px 0;
`;

export const CardSubtitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${paleOrange};
  margin: 0;
`;
