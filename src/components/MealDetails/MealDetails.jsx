import { Link } from "react-router-dom";
import {
  MealDetailsContainer,
  MealName,
  MealDate,
  Button,
  NextMealsContainer,
  RemainingMealsContainer,
  MealDetailsCard,
} from "./MealDetails.styles";

function MealDetails({ meals }) {
  if (!Array.isArray(meals)) {
    return <p>Loading meals...</p>;
  }

  const nextTwoMeals = meals.slice(0, 2);
  const remainingMeals = meals.slice(2);

  return (
    <MealDetailsContainer>
      <NextMealsContainer>
        {nextTwoMeals.map((meal, i) => (
          <MealDetailsCard key={i}>
            <MealName>{meal.attributes.name}</MealName>
            <MealDate>{meal.attributes.date}</MealDate>
            <Link to={`/meal/${meal.id}`}>
              <Button>View Meal</Button>
            </Link>
          </MealDetailsCard>
        ))}
      </NextMealsContainer>
      <hr />
      <RemainingMealsContainer>
        {remainingMeals.map((meal, i) => (
          <MealDetailsCard key={i}>
            <MealName>{meal.attributes.name}</MealName>
            {/* <MealDate>{meal.attributes.day}</MealDate> */}
            <Link to={`/meal/${meal.attributes.id}`}>
              <Button>View Meal</Button>
            </Link>
          </MealDetailsCard>
        ))}
      </RemainingMealsContainer>
    </MealDetailsContainer>
  );
}

export default MealDetails;