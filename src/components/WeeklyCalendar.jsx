import React, { useState } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import MealPlanner from './MealPlanner';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

const DayButton = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E8517A;
  }
`;

function WeeklyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: today.getDay() });
    return addDays(start, i);
  });

  return (
    <CalendarContainer>
      <h2>Select a day</h2>
      <Calendar>
        {daysOfWeek.map((day, index) => (
          <DayButton
            key={index}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, 'EEEE dd MMMM')}
          </DayButton>
        ))}
      </Calendar>
      {selectedDate && (
        <MealPlanner
          selectedDate={selectedDate}
          onCancel={() => setSelectedDate(null)}
        />
      )}
    </CalendarContainer>
  );
}

export default WeeklyCalendar;
