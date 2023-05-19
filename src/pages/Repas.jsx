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
    return <p>Loading meals...</p>;
  }

  if (isError) {
    return <p>Error fetching meals.</p>;
  }

  return (
    <AppSection>
      <Heading>Tes prochains repas</Heading>
      <Suspense fallback={<p>Loading meal details...</p>}>
        <MealDetails meals={mealsData} />
      </Suspense>
    </AppSection>
  );
}

export default Meal;