import React from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar/WeeklyCalendar';
import { AppSection, Heading } from '../styles';

function HomePage() {
  return (
    <>
      <AppSection>
        <Heading>Planifier ma semaine</Heading>
        <WeeklyCalendar />
      </AppSection>
    </>
  );
}

export default HomePage;
