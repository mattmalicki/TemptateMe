import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./AddRecipeTextarea.module.css";

const AddRecipeTextarea = () => {
  const { isDark } = useDarkMode();
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
        placeholder="Enter recipe. Use enter to add steps."
        type="textarea"
      ></textarea>
    </div>
  );
};

export { AddRecipeTextarea };
