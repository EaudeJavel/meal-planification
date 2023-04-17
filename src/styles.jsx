import styled, { css } from 'styled-components';

// ****************************
// ******* APP STYlE **********
// ****************************

// ****************************
// ********* COLORS ***********
// ****************************



export const paleOrange = '#FBD7C1';
export const deepTaupe = '#7A695E';
export const milkChocolate = '#7A523A';
export const plumpPurple = '#5149AD';

export const commonBoxShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const commonContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  ${commonBoxShadow}
  margin-bottom: 20px;
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #3f4fa2;
  margin: 0;
`;

export const ImageSection = styled.div`
  width: 100%;
  background: center / cover no-repeat;
`;

export const AppSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${paleOrange};
  align-items: center;
  margin: 40px 0;
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #3f4fa2;
`;