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
import { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import useRecipes from "../../../hooks/useRecipes.js";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes } = useRecipes();
  const { isDark } = useDarkMode();
  const [recipeImage, setRecipeImage] = useState();
  const [recipeInfo, setRecipeInfo] = useState();

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
    localStorage.setItem("recipeInfo", JSON.stringify(recipeInfo));
    setRecipeInfo(recipeInfo);
    recipeImage.files[0] && setRecipeImage(recipeImage.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      Loading.pulse();
      if (!recipeImage || !recipeInfo) {
        Notify.failure("Please fill evry informations including image.");
        return;
      }
      dispatch(addRecipe({ recipeImage, recipeInfo }));
      localStorage.removeItem("recipeInfo");
      localStorage.removeItem("recipeImage");
      setTimeout(() => {
        navigate(`/recipe/${recipes._id}`);
      }, 1000);
      return;
    } catch (err) {
      Notify.failure("Something went wrong. ");
      console.log(err);
      return;
    } finally {
      Loading.remove();
    }
  };

  function dataUrlToFile(dataurl, filename) {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const handleReset = () => {
    setRecipeInfo({});
    setRecipeImage({});
    localStorage.removeItem("recipeInfo");
    localStorage.removeItem("recipeImage");
    navigate(0);
  };

  function checkLocalStorage() {
    const recipeInfo = JSON.parse(localStorage.getItem("recipeInfo"));
    const recipeImage = localStorage.getItem("recipeImage");
    if (recipeInfo) {
      setRecipeInfo(recipeInfo);
    }
    if (recipeImage) {
      setRecipeImage(dataUrlToFile(recipeImage));
    }
  }

  useEffect(() => {
    checkLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
