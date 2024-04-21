import styles from "./HomeInfo.module.css";
import { AboutApp } from "../../Molecules/AboutApp/AboutApp.jsx";
import { CurvedInput } from "../../Molecules/CurvedInput/CurvedInput.jsx";
import { HomeToRecipes } from "../../Molecules/HomeToRecipes/HomeToRecipes.jsx";

const HomeInfo = () => {
  return (
    <div className={styles.HomeInfo}>
      <AboutApp />
      <div className={styles.toRecipes}>
        <HomeToRecipes />
        <div className={styles.input}>
          <CurvedInput
            greenOrBlack="black"
            placeholderText="Search by title"
            buttonText="Search"
          />
        </div>
      </div>
    </div>
  );
};

export { HomeInfo };
