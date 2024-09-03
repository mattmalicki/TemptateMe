import styles from "./AddRecipe.module.css";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { fetchAllCategories } from "../../redux/categories/operations.js";
import { useEffect } from "react";
import { AddRecipeForm } from "../../components/Organisms/AddRecipeForm/AddRecipeForm.jsx";
import { Helmet } from "react-helmet";
import useIngredients from "../../hooks/useIngredients.js";
import useCategories from "../../hooks/useCategories.js";

const AddRecipePage = () => {
  const { ingredients } = useIngredients();
  const { categories } = useCategories();
  const dispatch = useDispatch();

  useEffect(() => {
    !ingredients && dispatch(fetchIngredients());
    !categories && dispatch(fetchAllCategories());
  }, [ingredients, categories, dispatch]);
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
      </div>
    </div>
  );
};

export { AddRecipePage };
