import { useEffect, useState } from "react";
import styles from "./CategoriesList.module.css";
import { useDispatch } from "react-redux";
import { useCategories, useRecipes } from "../../../hooks/index.js";
import {
  fetchRecipesByCategory,
  updatePage,
} from "../../../redux/recipes/operations.js";
import { useSearchParams } from "react-router-dom";

const CategoriesList = () => {
  const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { categoriesTitles } = useCategories();
  const { page } = useRecipes();

  const onClick = (event) => {
    dispatch(updatePage(0));
    if (categoriesTitles.includes(event.target.id)) {
      setCategory(event.target.id);
      setSearchParams({ category: event.target.id });
    }
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      setCategory(searchParams.get("category"));
    } else {
      setCategory("Breakfast");
    }
  }, [searchParams]);

  useEffect(() => {
    category && dispatch(fetchRecipesByCategory({ category, page }));
  }, [category, page, dispatch]);

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
