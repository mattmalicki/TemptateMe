import { useEffect } from "react";
import styles from "./CategoriesPage.module.css";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../../redux/categories/operations.js";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  });
  return <div className={styles.CategoriesPage}>TESTING</div>;
};

export { CategoriesPage };
