import { useEffect, useState } from "react";
import styles from "./CategoriesList.module.css";
import { useDispatch } from "react-redux";
import { useCategories } from "../../../hooks/index.js";
import { fetchRecipesByCategory } from "../../../redux/recipes/operations.js";
import { useSearchParams } from "react-router-dom";

const CategoriesList = () => {
  const [category, setCategory] = useState("Breakfast");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { categoriesTitles } = useCategories();

  const onClick = (event) => {
    if (categoriesTitles.includes(event.target.id)) {
      setCategory(event.target.id);
      setSearchParams({ category: event.target.id });
    }
  };

  useEffect(() => {
    dispatch(fetchRecipesByCategory(category));
  }, [category, dispatch]);

  useEffect(() => {
    if (searchParams.get("category")) {
      setCategory(searchParams.get("category"));
    }
  }, [searchParams]);
  return (
    <ul className={styles.CategoriesList}>
      {categoriesTitles.map((item, index) => {
        return (
          <li key={index} className={styles.listItem}>
            <span
              className={`${category === item ? styles.marked : ""}`}
              onClick={onClick}
              id={item}
            >
              {item}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export { CategoriesList };
