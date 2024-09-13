import { AddRecipeImage } from "../../Atoms/AddRecipeImage/AddRecipeImage.jsx";
import { AddRecipeInfo } from "../../Organisms/AddRecipeInfo/AddRecipeInfo.jsx";
import { AddIngredients } from "../AddIngredients/AddIngredients.jsx";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";
import { AddPreparation } from "../../Molecules/AddPreparation/AddPreparation.jsx";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../redux/recipes/operations.js";

import styles from "./AddRecipeForm.module.css";
import { useDarkMode } from "../../../context/DarkModeContext.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDark } = useDarkMode();
  const [recipeData, setRecipeData] = useState();

  const onChange = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const {
      recipeImage,
      recipeName,
      recipeAbout,
      recipeCategory,
      recipeTime,
      recipePreparation,
    } = form;
    const ingredientNameEls = document.getElementsByName("ingredientName");
    const ingredientAmountEls = document.getElementsByName("ingredientAmount");
    const ingredientUnitEls = document.getElementsByName("ingredientUnit");
    const ingredients = [];

    for (let i = 0; i < ingredientNameEls.length; i++) {
      ingredients.push({
        id: ingredientNameEls[i].dataset.id,
        measure: [
          ingredientAmountEls[i].value,
          ingredientUnitEls[i].dataset.id,
        ].join(" "),
      });
    }

    const recipeInfo = {
      title: recipeName.value,
      description: recipeAbout.value,
      category: recipeCategory.value,
      time: recipeTime.value,
      instructions: recipePreparation.value,
      ingredients,
    };
    setRecipeData({ recipeImage: recipeImage.files[0], recipeInfo });
    localStorage.setItem("recipeInfo", JSON.stringify(recipeInfo));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(recipeData));
    localStorage.removeItem("recipeInfo");
    navigate("/recipe");
  };

  const handleReset = () => {
    setRecipeData({});
    localStorage.removeItem("recipeInfo");
    localStorage.removeItem("recipeImage");
    navigate(0);
  };

  return (
    <form
      className={styles.AddRecipeForm}
      onSubmit={handleSubmit}
      onChange={onChange}
    >
      <div className={styles.ImageAndInfo}>
        <div className={styles.Image}>
          <AddRecipeImage />
        </div>
        <div className={styles.Info}>
          <AddRecipeInfo />
        </div>
      </div>
      <AddIngredients />
      <AddPreparation />
      <div className={styles.AddRecipeButton}>
        {!isDark && (
          <CurvedButton
            greenOrBlack={"black"}
            type="submit"
            title={"Add recipe"}
          />
        )}
        {isDark && (
          <CurvedButton
            greenOrBlack={"green"}
            type="submit"
            title={"Add recipe"}
          />
        )}
      </div>
      <button className={styles.reset} type="button" onClick={handleReset}>
        Reset recipe
      </button>
    </form>
  );
};

export { AddRecipeForm };
