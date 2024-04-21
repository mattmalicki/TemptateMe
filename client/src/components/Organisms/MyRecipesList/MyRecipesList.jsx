import styles from "./MyRecipesList.module.css";
import { MyRecipesListItem } from "../../Molecules/MyRecipesListItem/MyRecipesListItem";
import { useRecipes } from "../../../hooks/index.js";

const MyRecipesList = () => {
  const { recipes } = useRecipes();
  return (
    <ul className={styles.MyRecipesList}>
      {recipes.map((recipe) => {
        return <MyRecipesListItem key={recipe._id} recipe={recipe} />;
      })}
    </ul>
  );
};

export { MyRecipesList };
