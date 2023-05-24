import React from 'react';
import { Suspense } from "react";
import { useQuery } from '@tanstack/react-query';
import { AppSection, Heading } from "../styles";
import { fetchPlannedMeals } from '../components/Api';
const MealDetails = React.lazy(() => import("../components/MealDetails/MealDetails"));

function Meal() {
  const { isLoading, isError, data: mealsData } = useQuery(
    ['plannedMeals'],
    async () => {
      const response = await fetchPlannedMeals();
      return response;
    }
  );

  if (isLoading) {
    return <Heading>Meals loading...</Heading>;
  }

  if (isError) {
    return <Heading>Need back-end connection</Heading>;
  }

  return (
    <AppSection>
      <Heading>Your next meals</Heading>
      <Suspense fallback={<p>Loading meal details...</p>}>
        <MealDetails meals={mealsData} />
      </Suspense>
    </AppSection>
  );
}

export default Meal;