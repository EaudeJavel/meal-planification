import React, { useState, useMemo } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import MealPlanner from '../MealPlanner/MealPlanner';
import { Square } from '../Square/Square.styles';
import { fr } from 'date-fns/locale';
import {
  CalendarContainer,
  Calendar,
  DayButton,
  WeeklyCalendarHeading,
} from "./WeeklyCalendar.styles";

function getFirstDayOfWeek(selectedDate) {
  return startOfWeek(selectedDate || new Date(), { weekStartsOn: 1 });
}

function getDaysOfWeek(today) {
  const start = startOfWeek(today, { weekStartsOn: today.getDay() });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

function WeeklyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  const firstDayOfWeek = getFirstDayOfWeek(selectedDate);
  const daysOfWeek = useMemo(() => getDaysOfWeek(today), [today]);

  return (
    <CalendarContainer>
      <WeeklyCalendarHeading>Semaine du {format(firstDayOfWeek, "dd MMMM", { locale: fr })}</WeeklyCalendarHeading>
      <Calendar>
        {daysOfWeek.map((day, index) => (
          <DayButton
            key={index}
            onClick={() => setSelectedDate(day)}
            isSelected={selectedDate?.getTime() === day.getTime()}
          >
            <div className="day-number">{format(day, "dd")}</div>
            <div className="day-name">{format(day, "EEEE", { locale: fr })}</div>
            {selectedDate?.getTime() === day.getTime() && <Square />}
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
