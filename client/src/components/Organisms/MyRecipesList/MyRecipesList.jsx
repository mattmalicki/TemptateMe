import styles from "./MyRecipesList.module.css";
import { MyRecipesListItem } from "../../Molecules/MyRecipesListItem/MyRecipesListItem";
import { useRecipes } from "../../../hooks/index.js";

const MyRecipesList = ({ isFavorites = false }) => {
  const { recipes } = useRecipes();
  return (
    Array.isArray(recipes) && (
      <ul className={styles.MyRecipesList}>
        {recipes.map((recipe) => {
          return (
            <MyRecipesListItem
              key={recipe._id}
              recipe={recipe}
              isFavorites={isFavorites}
            />
          );
        })}
      </ul>
    )
  );
};

export { MyRecipesList };
