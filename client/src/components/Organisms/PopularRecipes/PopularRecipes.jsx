import styles from "./PopularRecipes.module.css";
import { AddRecipeHeader } from "../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx";
import { PopularList } from "../../Molecules/PopularList/PopularList.jsx";

const PopularRecipes = () => {
  return (
    <div className={styles.PopularRecipes}>
      <AddRecipeHeader>Popular Recipes</AddRecipeHeader>
      <PopularList />
    </div>
  );
};

export { PopularRecipes };
