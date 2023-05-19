import styled from "styled-components";
import { paleOrange, deepTaupe, commonSectionStyles, darkerBrown } from "../../styles";

export const CalendarContainer = styled.div`
  height: 100%;
  ${commonSectionStyles};
  margin: 0px 6px 12px 12px;

  .line {
    width: 100%;
    height: 1px;
    background-color: ${paleOrange};
    margin: 12px 0;
  }
`;

export const WeeklyCalendarHeading = styled.h2`
  width: 100%;
  font-size: 16px;
  margin-left: 32px;
  font-weight: 600;
  color: ${paleOrange};
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  color: ${paleOrange};

  .flex-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const Calendar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
`;

export const DayButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${paleOrange};
  position: relative;
  cursor: pointer;
  padding: ${({ isSelected }) => (isSelected ? "12px 0" : "0")};
  background-color: ${({ isSelected }) => (isSelected ? darkerBrown : "")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  .picto {
    margin-right: 32px;
  }

  .day-name {
    text-transform: capitalize;
  }
`;
