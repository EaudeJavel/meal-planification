import { Link } from "react-router-dom";
import { MealName, MealDate, Button, MealDetailsCard as Card } from "./MealDetails.styles";

const MealDetailsCard = ({ meal }) => {
  return (
    <Card>
      <MealDate>{meal.attributes.date}</MealDate>
      <MealName>{meal.attributes.name}</MealName>
      <Link to={`/meal/${meal.id}`}>
        <Button>Voir ma recette</Button>
      </Link>
    </Card>
  );
};

export default MealDetailsCard;
