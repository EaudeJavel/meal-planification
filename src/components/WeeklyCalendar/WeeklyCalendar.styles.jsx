import styled from 'styled-components';
import { paleOrange, deepTaupe, milkChocolate, plumpPurple } from "../../styles";

export const WeeklyCalendarHeading = styled.h2`
  width: 100%;
  font-size: 16px;
  color: ${deepTaupe};
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
`;

export const DayButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${deepTaupe};
  position: relative;
  margin: 14px;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  .day-number {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;
