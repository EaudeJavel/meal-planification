import MealDetailsCard from "./MealDetailsCard";
import {
  MealDetailsContainer,
  NextMealsContainer,
  RemainingMealsContainer,
} from "./MealDetails.styles";

function MealDetails({ meals }) {
  const nextTwoMeals = meals.slice(0, 2);
  const remainingMeals = meals.slice(2);

  return (
    <MealDetailsContainer>
      <NextMealsContainer>
        {nextTwoMeals.map((meal, i) => (
          <MealDetailsCard key={i} meal={meal} />
        ))}
      </NextMealsContainer>
      <hr />
      <RemainingMealsContainer>
        {remainingMeals.map((meal, i) => (
          <MealDetailsCard key={i} meal={meal} />
        ))}
      </RemainingMealsContainer>
    </MealDetailsContainer>
  );
}

export default MealDetails;
