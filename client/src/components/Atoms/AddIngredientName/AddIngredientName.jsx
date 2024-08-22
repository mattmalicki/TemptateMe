import { useEffect, useState } from "react";

import { AddDropdownList } from "../../Atoms/AddDropdownList/AddDropdownList.jsx";
import { ReactComponent as Icon } from "./iconAddIngredientName.svg";

import { useIngredients } from "../../../hooks/index.js";

import styles from "./AddIngredientName.module.css";
import { useDarkMode } from "../../../context/DarkModeContext.js";

const AddIngredientName = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [filter, setFilter] = useState("");
  const { ingredients } = useIngredients();
  const { isDark } = useDarkMode();

  const handleDataFromChild = (id) => {
    setId(id);
  };

  const handleCloseDropdown = (event) => {
    if (!event.target.dataset.scroll) {
      setOpenDropdown(false);
      window.removeEventListener("click", handleCloseDropdown);
    }
  };

  const handleOpenDropdown = (event) => {
    setOpenDropdown(true);
    setTimeout(() => {
      window.addEventListener("click", handleCloseDropdown);
    }, 100);
  };

  const changeValue = (event) => {
    setValue(event.target.dataset.value);
  };

  const onChange = (event) => {
    !openDropdown && setOpenDropdown(true);
    setFilter(event.target.value);
    setValue(event.target.value);
    window.addEventListener("click", handleCloseDropdown);
  };

  useEffect(() => {}, [openDropdown]);
  return (
    <label
      className={[styles.AddIngredientName, isDark && styles.isDark].join(" ")}
    >
      <input
        name="ingredientName"
        className={[styles.input, isDark && styles.isDark].join(" ")}
        onChange={onChange}
        value={value}
        data-scroll=""
        data-id={id}
      />
      <button
        className={styles.icon}
        type="button"
        onClick={handleOpenDropdown}
      >
        <Icon />
      </button>
      {openDropdown && (
        <AddDropdownList
          array={ingredients}
          filter={filter}
          sendDataToParent={handleDataFromChild}
          onItemClick={changeValue}
        />
      )}
    </label>
  );
};

export { AddIngredientName };
