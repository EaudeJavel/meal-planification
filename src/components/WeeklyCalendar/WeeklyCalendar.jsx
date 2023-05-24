import React, { useMemo } from "react";
import { format, startOfWeek, addDays } from "date-fns";
import { MdCalendarMonth, MdLunchDining } from "react-icons/md";
import {
  CalendarContainer,
  HeadingContainer,
  Calendar,
  DayButton as StyledDayButton,
  WeeklyCalendarHeading,
} from "./WeeklyCalendar.styles";

function getFirstDayOfWeek(selectedDate) {
  return startOfWeek(selectedDate || new Date(), { weekStartsOn: 1 });
}

function getDaysOfWeek(today) {
  const start = startOfWeek(today, { weekStartsOn: today.getDay() });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

const DayButton = ({ day, selectedDate, setSelectedDate }) => (
  <StyledDayButton
    key={day.getTime()}
    onClick={() => setSelectedDate(day)}
    isSelected={selectedDate?.getTime() === day.getTime()}
  >
    <div className="picto">
      {" "}
      <MdLunchDining />{" "}
    </div>
    <div className="day-name">
      {format(day, "EEEE dd MMMM")}
    </div>
  </StyledDayButton>
);

function WeeklyCalendar({ selectedDate, setSelectedDate }) {
  const today = new Date();
  const firstDayOfWeek = getFirstDayOfWeek(selectedDate);
  const daysOfWeek = useMemo(() => getDaysOfWeek(today), [today]);

  return (
    <CalendarContainer>
      <HeadingContainer>
        <div className="flex-container">
          <MdCalendarMonth />
          <WeeklyCalendarHeading>
            Week of the {format(firstDayOfWeek, "dd MMMM")}
          </WeeklyCalendarHeading>
        </div>
        <div className="line"></div>
      </HeadingContainer>
      <Calendar>
        {daysOfWeek.map((day) => (
          <DayButton
            key={day.getTime()}
            day={day}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </Calendar>
    </CalendarContainer>
  );
}

export default WeeklyCalendar;