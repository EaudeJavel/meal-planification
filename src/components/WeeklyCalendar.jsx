import React, { useState } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import MealPlanner from './MealPlanner';

function WeeklyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 1 });
    return addDays(start, i);
  });

  return (
    <div>
      <div className='calendar'>
        {daysOfWeek.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(day)}
            className='day'
          >
            {format(day, 'EEEE dd MMMM')}
          </button>
        ))}
      </div>
      {selectedDate && (
        <MealPlanner
          selectedDate={selectedDate}
          onCancel={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
}

export default WeeklyCalendar;
