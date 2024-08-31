import styles from "./Recipe.module.css";
import { RecipeDetails } from "../../Molecules/RecipeDetails/RecipeDetails.jsx";
import { IngredientsList } from "../../Organisms/IngredientsList/IngredientsList.jsx";
import { PreparationList } from "../../Organisms/PreparationList/PreparationList.jsx";
import { useRecipes } from "../../../hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchShoppingList } from "../../../redux/shopping/operations.js";
import { fetchIngredients } from "../../../redux/ingredients/operations.js";

const Recipe = () => {
  const dispatch = useDispatch();

  const { recipes, isLoading } = useRecipes();

  useEffect(() => {
    dispatch(fetchShoppingList());
    dispatch(fetchIngredients());
  }, [dispatch]);

  return isLoading ? (
    <div>TEST</div>
  ) : (
    <>
      <RecipeDetails recipe={recipes} />
      <div className={styles.Recipe}>
        <IngredientsList ingredientsList={recipes.ingredients} />
        <PreparationList
          preparation={recipes.instructions}
          alt={recipes.title}
          src={recipes.thumb}
        />
      </div>
    </>
  );
};

export { Recipe };
