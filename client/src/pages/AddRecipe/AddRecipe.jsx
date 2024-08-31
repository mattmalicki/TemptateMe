import styles from "./AddRecipe.module.css";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { fetchPopularRecipes } from "../../redux/recipes/operations.js";
import { fetchAllCategories } from "../../redux/categories/operations.js";
import { useEffect } from "react";
import { AddRecipeForm } from "../../components/Organisms/AddRecipeForm/AddRecipeForm.jsx";
import { Helmet } from "react-helmet";

const AddRecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchPopularRecipes());
    dispatch(fetchAllCategories());
  }, [dispatch]);
  return (
    <div className={styles.AddRecipePage}>
      <Helmet>
        <title>Add recipe</title>
      </Helmet>
      <PageTitle title="Add recipe" />
      <div className={styles.AddRecipe}>
        <div className={styles.Recipe}>
          <AddRecipeForm />
        </div>
        {/* <div className={styles.Addon}>
          <div className={styles.socials}>
            <AddRecipeHeader>Follow us</AddRecipeHeader>
            <Socials />
          </div>
          <PopularRecipes />
        </div> */}
      </div>
    </div>
  );
};

export { AddRecipePage };
