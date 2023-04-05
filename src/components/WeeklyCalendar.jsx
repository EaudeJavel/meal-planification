import React, { useState } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import MealPlanner from './MealPlanner';
import {
  CalendarContainer,
  Calendar,
  DayButton,
  WeeklyCalendarHeading,
} from "../styles";

function WeeklyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: today.getDay() });
    return addDays(start, i);
  });

  return (
    <CalendarContainer>
      <WeeklyCalendarHeading>Select a day</WeeklyCalendarHeading>
      <Calendar>
        {daysOfWeek.map((day, index) => (
          <DayButton
            key={index}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, "EEEE dd MMMM")}
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
