import styled from 'styled-components';
import { plumpPurple, commonBoxShadow } from "../../styles";

export const Square = styled.div`
  position: absolute;
  bottom: 0;
  width: 14px;
  height: 14px;
  background-color: ${plumpPurple};
  transform: translateY(14px);
  ${commonBoxShadow}
`;