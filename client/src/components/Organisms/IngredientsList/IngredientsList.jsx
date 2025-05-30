import styles from "./IngredientsList.module.css";
import { IngredientsListItem } from "../../Molecules/IngredientsListItem/IngredientsListItem.jsx";
import {
  useIngredients,
  useRecipes,
  useShopping,
} from "../../../hooks/index.js";

const IngredientsList = ({ ingredientsList }) => {
  const { ingredients } = useIngredients();
  const { shoppingList } = useShopping();
  const { recipes } = useRecipes();

  const isChecked = (ingredientId) => {
    if (
      shoppingList
        .filter((item) => item.recipeId === recipes._id)
        .filter((item) => item.ingredientId === ingredientId).length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className={styles.head}>
        <span>Ingredients</span>
        <div className={styles.numberList}>
          <span>Number</span>
          <span>Add to list</span>
        </div>
      </div>
      {ingredients && (
        <ul className={styles.IngredientsList}>
          {ingredientsList.map((item) => (
            <IngredientsListItem
              key={item.id}
              ingredient={ingredients.filter((ing) => ing._id === item.id)[0]}
              measure={item.measure}
              isChecked={isChecked(item.id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export { IngredientsList };
