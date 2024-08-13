import { useEffect, useState } from "react";
import styles from "./SearchRecipe.module.css";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { fetchRecipesByQuery } from "../../redux/recipes/operations.js";
import { useDispatch } from "react-redux";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { CurvedInput } from "../../components/Molecules/CurvedInput/CurvedInput.jsx";
import { RecipesList } from "../../components/Organisms/RecipesList/RecipesList.jsx";

const SearchRecipePage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("Beef");

  useEffect(() => {
    dispatch(fetchRecipesByQuery({ query: "Beef" }));
  }, []);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const onChange = (event) => {
    const text = event.currentTarget.value;
    text && setText(text);
    !text && setText("Beef");
  };

  const onClick = () => {
    dispatch(fetchRecipesByQuery({ query: text }));
  };

  return (
    <div className={styles.SearchRecipe}>
      <PageTitle title="Search" />
      <CurvedInput
        greenOrBlack="green"
        buttonText="Search"
        placeholderText="Beef"
        onChange={onChange}
        onClick={onClick}
      />
      <RecipesList />
    </div>
  );
};

export { SearchRecipePage };
