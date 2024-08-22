import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  const { isDark } = useDarkMode();
  return (
    <h1 className={[styles.PageTitle, isDark && styles.isDark].join(" ")}>
      {title}
    </h1>
  );
};

export { PageTitle };
