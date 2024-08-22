import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./AddDropdownList.module.css";

const AddDropdownList = ({
  array,
  filter = "",
  isCentered = false,
  onItemClick,
  sendDataToParent = () => {},
}) => {
  const { isDark } = useDarkMode();
  return (
    <div
      className={[styles.AddDropdownList, isDark && styles.isDark].join(" ")}
      data-scroll=""
    >
      <ul className={styles.list} data-scroll="">
        {array &&
          array
            .filter((item) =>
              item.ttl
                ? item.ttl.toLowerCase().includes(filter.toLowerCase())
                : item
            )
            .map((item, index) => (
              <li
                key={index}
                className={[
                  styles.listItem,
                  isCentered && styles.isCentered,
                  isDark && styles.isDark,
                ].join(" ")}
                onClick={(event) => {
                  onItemClick(event);
                  sendDataToParent(
                    item._id ? item._id : item.title ? item.title : item
                  );
                }}
                data-value={
                  item.ttl ? item.ttl : item.title ? item.title : item
                }
                data-scroll=""
              >
                {item.ttl ? item.ttl : item.title ? item.title : item}
              </li>
            ))}
      </ul>
    </div>
  );
};

export { AddDropdownList };
