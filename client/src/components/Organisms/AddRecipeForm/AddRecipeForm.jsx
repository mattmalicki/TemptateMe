import { AddRecipeImage } from "../../Atoms/AddRecipeImage/AddRecipeImage.jsx";
import { AddRecipeInfo } from "../../Organisms/AddRecipeInfo/AddRecipeInfo.jsx";
import { AddIngredients } from "../AddIngredients/AddIngredients.jsx";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";
import { AddPreparation } from "../../Molecules/AddPreparation/AddPreparation.jsx";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../redux/recipes/operations.js";

import styles from "./AddRecipeForm.module.css";

const AddRecipeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
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
    const ingredientUnitEls = document.getElementsByName("ingredientUnit");
    const ingredients = [];
    for (let i = 0; i < ingredientNameEls.length; i++) {
      ingredients.push({
        _id: ingredientNameEls[i].dataset.id,
        measure: ingredientUnitEls[i].dataset.id,
      });
    }
    const recipe = {
      title: recipeName.value,
      description: recipeAbout.value,
      category: recipeCategory.value,
      time: recipeTime.value,
      instructions: recipePreparation.value,
      ingredients,
    };
    dispatch(addRecipe({ recipeImage, recipeInfo: recipe }));
  };
  return (
    <form className={styles.AddRecipeForm} onSubmit={handleSubmit}>
      <div className={styles.ImageAndInfo}>
        <div className={styles.Image}>
          <AddRecipeImage />
        </div>
        <div className={styles.ImageAndInfo}>
          <AddRecipeInfo />
        </div>
      </div>
      <AddIngredients />
      <AddPreparation />
      <div className={styles.AddRecipeButton}>
        <CurvedButton
          greenOrBlack={"black"}
          type="submit"
          title={"Add recipe"}
        />
      </div>
    </form>
  );
};

export { AddRecipeForm };
