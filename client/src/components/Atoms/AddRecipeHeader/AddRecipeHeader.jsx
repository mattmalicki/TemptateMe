import styles from "./AddRecipeHeader.module.css";

const AddRecipeHeader = ({ children }) => {
  return <h1 className={styles.formHeader}>{children}</h1>;
};

export { AddRecipeHeader };
