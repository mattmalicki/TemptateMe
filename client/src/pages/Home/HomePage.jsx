import { useDispatch } from "react-redux";
import { HomeInfo } from "../../components/Organisms/HomeInfo/HomeInfo.jsx";
import styles from "./HomePage.module.css";
import { fetchRecipes } from "../../redux/recipes/operations.js";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  function onLoad() {
    dispatch(fetchRecipes());
  }
  useEffect(() => {
    onLoad();
  });
  return (
    <div className={styles.HomePage}>
      <HomeInfo />
    </div>
  );
};

export { HomePage };
