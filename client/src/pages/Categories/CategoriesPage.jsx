import { useEffect } from "react";
import styles from "./CategoriesPage.module.css";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../../redux/categories/operations.js";
import { CategoriesList } from "../../components/Molecules/CategoriesList/CategoriesList.jsx";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { RecipesList } from "../../components/Organisms/RecipesList/RecipesList.jsx";
import { Pagination } from "../../components/Atoms/Pagination/Pagination.jsx";
import useRecipes from "../../hooks/useRecipes.js";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { pageAmount } = useRecipes();

  useEffect(() => {
    dispatch(fetchAllCategories());
  });
  return (
    <div className={styles.CategoriesPage}>
      <PageTitle title="Categories" />
      <CategoriesList />
      <RecipesList />
      {pageAmount > 1 && <Pagination />}
    </div>
  );
};

export { CategoriesPage };
