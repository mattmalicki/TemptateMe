import styles from "./Favorites.module.css";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle";
import { Pagination } from "../../components/Atoms/Pagination/Pagination";
import { MyRecipesList } from "../../components/Organisms/MyRecipesList/MyRecipesList";
import { useRecipes } from "../../hooks/index.js";
import { useDispatch } from "react-redux";
import { fetchFavorites } from "../../redux/recipes/operations";
import { useEffect } from "react";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { page } = useRecipes();

  useEffect(() => {
    dispatch(fetchFavorites(page));
  }, [dispatch, page]);

  return (
    <div className={styles.Favorites}>
      <PageTitle title="Favorites" />
      <MyRecipesList />
      <Pagination />
    </div>
  );
};

export { FavoritesPage };
