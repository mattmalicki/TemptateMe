import styles from "./AddRecipe.module.css";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { fetchPopularRecipes } from "../../redux/recipes/operations.js";
import { fetchAllCategories } from "../../redux/categories/operations.js";
import { useEffect } from "react";
import { AddRecipeForm } from "../../components/Organisms/AddRecipeForm/AddRecipeForm.jsx";
import { PopularRecipes } from "../../components/Organisms/PopularRecipes/PopularRecipes.jsx";
import { Socials } from "../../components/Molecules/Socials/Socials.jsx";

const AddRecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchPopularRecipes());
    dispatch(fetchAllCategories());
  }, [dispatch]);
  return (
    <div className={styles.AddRecipePage}>
      <PageTitle title="Add recipe" />
      <div className={styles.AddRecipe}>
        <div className={styles.Recipe}>
          <AddRecipeForm />
        </div>
        <div className={styles.Addon}>
          <Socials />
          <PopularRecipes />
        </div>
      </div>
    </div>
  );
};

export { AddRecipePage };
