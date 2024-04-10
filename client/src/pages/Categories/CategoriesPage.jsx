import { useEffect } from "react";
import styles from "./CategoriesPage.module.css";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../../redux/categories/operations.js";
import { CategoriesList } from "../../components/Molecules/CategoriesList/CategoriesList.jsx";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { RecipesList } from "../../components/Organisms/RecipesList/RecipesList.jsx";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  });
  return (
    <div className={styles.CategoriesPage}>
      <PageTitle title="Categories" />
      <CategoriesList />
      <RecipesList />
    </div>
  );
};

export { CategoriesPage };
