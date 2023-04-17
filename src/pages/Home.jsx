import React from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar/WeeklyCalendar';
import { AppSection, Heading, SubHeading } from '../styles';

function HomePage() {
  return (
    <>
      <AppSection>
        <Heading>Meal Planner</Heading>
        <SubHeading>Meal of the Day</SubHeading>
        <WeeklyCalendar />
      </AppSection>
    </>
  );
}

export default HomePage;
