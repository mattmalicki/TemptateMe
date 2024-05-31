import styles from "./Recipe.module.css";
import { RecipeDetails } from "../../Molecules/RecipeDetails/RecipeDetails.jsx";
import { IngredientsList } from "../../Organisms/IngredientsList/IngredientsList.jsx";
import { PreparationList } from "../../Organisms/PreparationList/PreparationList.jsx";
import { useRecipes } from "../../../hooks";

const Recipe = () => {
  const { recipes, isLoading } = useRecipes();
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
