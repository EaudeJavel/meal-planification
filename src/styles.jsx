import styled, { css } from "styled-components";

// ****************************
// ******* APP STYlE **********
// ****************************

// ****************************
// ********* COLORS ***********
// ****************************

export const paleOrange = "#FBD7C1";
export const deepTaupe = "#7A695E";
export const milkChocolate = "#7A523A";
export const plumpPurple = "#5149AD";
export const darkBrown = "#3B322D";
export const darkerBrown = "#29231F";

export const commonBoxShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const commonSectionStyles = css`
  display: flex;
  background-color: ${darkBrown};
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 12px;
  padding: 24px;
`;

export const AppContainer = styled.div`
  ${commonSectionStyles}
  width: 100%;
  margin: 12px 12px 12px 6px;
  overflow-y: auto;
`;

export const commonContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${paleOrange};
  text-transform: capitalize;
  margin: 0;
`;

export const SubHeading = styled.h3`
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  color: ${paleOrange};
`;

export const InlineTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${paleOrange};
  margin: 12px 0 12px 0;
`;

export const InlineSubTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${paleOrange};
  margin: 0;
`;

export const AppSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

// ****************************
// *********** HOME ***********
// ****************************

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

// ****************************
// ******* INGREDIENTS ********
// ****************************

export const Ingredient = styled.li`
  color: ${paleOrange};
  font-size: 1rem;
  margin: 5px 0;
`;

export const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

// ****************************
// ********** CARDS ***********
// ****************************

export const RecipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 24px 0 24px 0;
`;

export const TestCard = styled.div`
  ${commonSectionStyles}
  background-color: ${darkerBrown};
  width: 180px;
  height: 220px;
  margin: 24px 12px 0 0;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  img {
    margin-bottom: 16px;
  }
`;

export const TestCardHeading = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: ${paleOrange};
  margin: 0 0 12px 0;
`;

export const TestCardSubHeading = styled.div`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${paleOrange};
  margin: 0;
`;
