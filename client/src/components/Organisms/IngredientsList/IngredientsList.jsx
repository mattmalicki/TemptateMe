import styles from "./IngredientsList.module.css";
import { IngredientsListItem } from "../../Molecules/IngredientsListItem/IngredientsListItem.jsx";
import { useIngredients } from "../../../hooks/index.js";

const IngredientsList = ({ ingredientsList }) => {
  const { ingredients } = useIngredients();
  return (
    ingredients && (
      <ul className={styles.IngredientsList}>
        {ingredientsList.map((item) => (
          <IngredientsListItem
            key={item.id}
            ingredient={ingredients.filter((ing) => ing._id === item.id)}
          />
        ))}
      </ul>
    )
  );
};

export { IngredientsList };
