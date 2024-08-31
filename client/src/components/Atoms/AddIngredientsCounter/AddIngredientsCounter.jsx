import { ReactComponent as IconMinus } from "./iconMinus.svg";
import { ReactComponent as IconPlus } from "./iconPlus.svg";

import styles from "./AddIngredientsCounter.module.css";
import { useDarkMode } from "../../../context/DarkModeContext";

const AddIngredientsCounter = ({ plusCb, minusCb, counter }) => {
  const { isDark } = useDarkMode();
  return (
    <div
      className={[styles.AddIngredientsCounter, isDark && styles.isDark].join(
        " "
      )}
    >
      <button type="button" onClick={minusCb} className={styles.button}>
        <div className={[styles.minusIcon, isDark && styles.isDark].join(" ")}>
          <IconMinus />
        </div>
      </button>
      {counter}
      <button type="button" onClick={plusCb} className={styles.button}>
        <div className={styles.plusIcon}>
          <IconPlus />
        </div>
      </button>
    </div>
  );
};

export { AddIngredientsCounter };
