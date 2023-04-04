import React from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import { AppSection, ImageSection, Heading, SubHeading } from '../styles';

function HomePage() {
  return (
    <>
      <AppSection>
        <Heading>Meal Planner</Heading>
        <SubHeading>Meal of the Day</SubHeading>
        <WeeklyCalendar />
      </AppSection>
      <ImageSection
        imageUrl="https://your-placeholder-image-url.com/placeholder.jpg"
      />
    </>
  );
}

export default HomePage;
