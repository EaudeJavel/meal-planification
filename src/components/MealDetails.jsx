import { MealDetailsContainer, MealName, MealDate, Button, NextMealsContainer, RemainingMealsContainer} from "../styles";
import { Link } from "react-router-dom";

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
          <div key={i}>
            <MealName>{meal.attributes.name}</MealName>
            <MealDate>{meal.attributes.day}</MealDate>
            <Link to={`/meal/${meal.id}`}>
              <Button>View Meal</Button>
            </Link>
            <br />
          </div>
        ))}
      </NextMealsContainer>
      <hr />
      <RemainingMealsContainer>
        {remainingMeals.map((meal, i) => (
          <div key={i}>
            <MealName>{meal.attributes.name}</MealName>
            <MealDate>{meal.attributes.day}</MealDate>
            <Link to={`/meal/${meal.id}`}>
              <Button>View Meal</Button>
            </Link>
            <br />
          </div>
        ))}
      </RemainingMealsContainer>
    </MealDetailsContainer>
  );
}

export default MealDetails;