import styles from "./RecipesList.module.css";
import { SearchItem } from "../../Atoms/SearchItem/SearchItem.jsx";
import { useRecipes } from "../../../hooks/index.js";

const RecipesList = () => {
  const { recipes } = useRecipes();
  return (
    <ul className={styles.RecipesList}>
      {recipes.map((recipe, index) => (
        <li key={recipe._id} className={styles.RecipesListItem}>
          <SearchItem
            id={recipe._id}
            title={recipe.title}
            imgSrc={recipe.thumb}
          />
        </li>
      ))}
    </ul>
  );
};

export { RecipesList };
