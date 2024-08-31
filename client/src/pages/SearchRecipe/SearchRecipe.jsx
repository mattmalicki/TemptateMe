import { useEffect, useState } from "react";
import styles from "./SearchRecipe.module.css";
import { fetchIngredients } from "../../redux/ingredients/operations.js";
import { fetchRecipesByQuery } from "../../redux/recipes/operations.js";
import { useDispatch } from "react-redux";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle.jsx";
import { CurvedInput } from "../../components/Molecules/CurvedInput/CurvedInput.jsx";
import { RecipesList } from "../../components/Organisms/RecipesList/RecipesList.jsx";
import useRecipes from "../../hooks/useRecipes.js";
import { NotFound } from "../../components/Atoms/NotFound/NotFound.jsx";
import { Helmet } from "react-helmet";

const SearchRecipePage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { recipes } = useRecipes();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const onChange = (event) => {
    const text = event.currentTarget.value;
    text && setText(text);
    !text && setText("");
  };

  const onClick = (event) => {
    event.preventDefault();
    dispatch(fetchRecipesByQuery({ query: text }));
  };

  return (
    <div className={styles.SearchRecipe}>
      <Helmet>
        <title>Search recipe</title>
      </Helmet>
      <PageTitle title="Search" />
      <CurvedInput
        greenOrBlack="green"
        buttonText="Search"
        placeholderText="Beef"
        onChange={onChange}
        onClick={onClick}
        onSubmit={onClick}
      />
      {recipes.length > 0 ? (
        <RecipesList />
      ) : (
        <NotFound title="Try looking for something else..." />
      )}
    </div>
  );
};

export { SearchRecipePage };
