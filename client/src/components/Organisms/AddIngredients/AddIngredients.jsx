import styles from "./AddIngredients.module.css";
import { AddRecipeHeader } from "../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx";
import { AddIngredientsCounter } from "../../Atoms/AddIngredientsCounter/AddIngredientsCounter.jsx";
import { AddIngredientsItem } from "../../Molecules/AddIngredientsItem/AddIngredientsItem.jsx";
import { useEffect, useState } from "react";

const AddIngredients = () => {
  const [counter, setCounter] = useState([]);

  function checkLocalStorage() {
    if (localStorage.getItem("recipeInfo")) {
      console.log("rest");
      const recipe = JSON.parse(localStorage.getItem("recipeInfo"));
      createArray(recipe?.ingredients?.length);
      return;
    }
    setCounter([1]);
  }

  function createArray(length) {
    const array = [];
    for (let index = 0; index < length; index++) {
      array.push(index + 1);
    }
    setCounter(array);
  }

  const handleMinus = () => {
    if (counter.length > 1) {
      const copyArray = counter.slice(0, -1);
      setCounter(copyArray);
      const recipe = JSON.parse(localStorage.getItem("recipeInfo"));
      const newArray = recipe.ingredients.slice(0, -1);
      recipe.ingredients = newArray;
      localStorage.setItem("recipeInfo", JSON.stringify(recipe));
    }
  };
  const handlePlus = () => {
    const copyArray = [...counter];
    copyArray.push(copyArray[copyArray.length - 1] + 1);
    setCounter(copyArray);
    const recipe = JSON.parse(localStorage.getItem("recipeInfo"));
    recipe.ingredients.push({ id: null, measure: "0 g" });
    localStorage.setItem("recipeInfo", JSON.stringify(recipe));
  };
  const handleClose = (event) => {
    const value = event.target.closest("button").dataset.counter;
    if (counter.length > 1) {
      const copyArray = counter.filter((item) => item !== Number(value));
      setCounter(copyArray);
      const recipe = JSON.parse(localStorage.getItem("recipeInfo"));
      const newArray = recipe.ingredients.filter(
        (_, index) => index !== Number(value) - 1
      );
      recipe.ingredients = newArray;
      localStorage.setItem("recipeInfo", JSON.stringify(recipe));
    }
  };

  useEffect(() => {}, [counter]);

  useEffect(() => {
    checkLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.AddIngredients}>
      <div className={styles.header}>
        <AddRecipeHeader>Ingredients</AddRecipeHeader>
        <AddIngredientsCounter
          minusCb={handleMinus}
          plusCb={handlePlus}
          counter={counter.length}
        />
      </div>
      <div className={styles.inputsStyles}>
        <ul className={styles.inputs}>
          {counter.map(
            (item) =>
              item !== 0 && (
                <AddIngredientsItem
                  key={item}
                  id={item}
                  onClose={handleClose}
                />
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export { AddIngredients };
