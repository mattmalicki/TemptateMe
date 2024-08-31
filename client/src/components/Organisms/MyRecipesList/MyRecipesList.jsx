import styles from "./MyRecipesList.module.css";
import { MyRecipesListItem } from "../../Molecules/MyRecipesListItem/MyRecipesListItem";
import { useRecipes } from "../../../hooks/index.js";
import { NotFound } from "../../Atoms/NotFound/NotFound.jsx";
import { Loader } from "../../Atoms/Loader/Loader.jsx";

const MyRecipesList = ({ isFavorites = false }) => {
  const { recipes, isLoading } = useRecipes();
  return isLoading ? (
    <Loader />
  ) : recipes.length > 0 ? (
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
  ) : (
    <NotFound title="There are no recipes." />
  );
};

export { MyRecipesList };
