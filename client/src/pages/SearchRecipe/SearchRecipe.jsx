import { useEffect, useState } from "react";
import styles from "./SearchRecipe.module.css";
import { useLocation } from "react-router-dom";
import { Recipe } from "../../components/Templates/Recipe/Recipe";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { useDispatch } from "react-redux";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { CurvedInput } from "../../components/Molecules/CurvedInput/CurvedInput.jsx";

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

  return (
    <div className={styles.SearchRecipe}>
      <PageTitle title="Search" />
      <CurvedInput greenOrBlack="green" buttonText="Search" />
    </div>
  );
};

export { SearchRecipePage };
