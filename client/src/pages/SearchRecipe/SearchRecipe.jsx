import { useEffect, useState } from "react";
import styles from "./SearchRecipe.module.css";
import { useLocation } from "react-router-dom";
import { Recipe } from "../../components/Templates/Recipe/Recipe";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { useDispatch } from "react-redux";

const SearchRecipePage = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    const urlId = location.pathname.split("/")[2];
    if (urlId) {
      setId(urlId);
    }
  }, [location]);

  return !id ? (
    <div className={styles.Recipe}>THIS IS A TEST!</div>
  ) : (
    <Recipe id={id} />
  );
};

export { SearchRecipePage };
