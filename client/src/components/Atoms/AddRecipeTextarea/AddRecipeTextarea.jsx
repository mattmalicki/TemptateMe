import { useEffect, useState } from "react";
import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./AddRecipeTextarea.module.css";

const AddRecipeTextarea = () => {
  const [value, setValue] = useState();
  const { isDark } = useDarkMode();
  function checkLocalStorage() {
    if (localStorage.getItem("recipeInfo")) {
      const { instructions } = JSON.parse(localStorage.getItem("recipeInfo"));
      setValue(instructions);
    }
  }
  useEffect(() => {
    checkLocalStorage();
  });
  return (
    <div
      className={[
        styles.AddRecipeDescriptionTextarea,
        isDark && styles.isDark,
      ].join(" ")}
    >
      <textarea
        id="recipePreparation"
        className={[
          styles.AddRecipeDescriptionInput,
          isDark && styles.isDark,
        ].join(" ")}
        value={value}
        placeholder="Enter recipe. Use enter to add steps."
        type="textarea"
        required
      ></textarea>
    </div>
  );
};

export { AddRecipeTextarea };
