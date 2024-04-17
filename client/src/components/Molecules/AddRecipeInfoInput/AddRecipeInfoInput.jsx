import { useEffect, useState } from "react";
import styles from "./AddRecipeInfoInput.module.css";
import { ReactComponent as IconDropdown } from "./icon-dropdown.svg";
import { useCategories } from "../../../hooks/index.js";
import { AddDropdownList } from "../../Atoms/AddDropdownList/AddDropdownList.jsx";

const AddRecipeInfoInput = ({
  placeholder,
  idName,
  isCategory = false,
  isTime = false,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { categoriesTitles } = useCategories();
  const [value, setValue] = useState("Breakfast");
  const [timeArray, setTimeArray] = useState([]);

  const handleCloseDropdown = (event) => {
    if (!event.target.dataset.scroll) {
      setOpenDropdown(false);
      window.removeEventListener("click", handleCloseDropdown);
      return;
    }
    return;
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
    setValue(event.target.value);
  };

  // useEffect(() => {}, [openDropdown]);

  useEffect(() => {
    if (isTime) {
      const array = [];
      for (let i = 10; i < 200; i = i + 5) {
        array.push(i.toString());
      }
      setTimeArray(array);
    }
  }, [isTime]);

  return (
    <label className={styles.AddCategoryInfo}>
      {placeholder}
      <div className={styles.inputContainer}>
        <input
          id={idName}
          className={styles.input}
          type="text"
          onChange={onChange}
          value={value}
          data-scroll=""
        />
        {(isCategory || isTime) && (
          <button
            className={styles.icon}
            type="button"
            onClick={handleOpenDropdown}
          >
            <IconDropdown />
          </button>
        )}
        {isCategory && openDropdown && (
          <AddDropdownList array={categoriesTitles} onItemClick={changeValue} />
        )}
        {isTime && openDropdown && (
          <AddDropdownList
            array={timeArray}
            isCentered={true}
            onItemClick={changeValue}
          />
        )}
      </div>
    </label>
  );
};

export { AddRecipeInfoInput };
