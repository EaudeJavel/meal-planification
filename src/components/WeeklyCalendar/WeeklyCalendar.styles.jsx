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
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin-bottom: 6em;
`;

export const DayButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  color: ${deepTaupe};
  position: relative;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
  }

  .day-number {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;
