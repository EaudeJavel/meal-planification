import styled from 'styled-components';
import { paleOrange, deepTaupe, milkChocolate, plumpPurple } from "../../styles";

export const WeeklyCalendarHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: ${deepTaupe};
  margin-bottom: 10px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

export const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
`;

export const DayButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: ${plumpPurple};
  }
`;
