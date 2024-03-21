import styles from "./RectangleButton.module.css";

const RectangleButton = ({
  title,
  type = "button",
  colorScheme = "green",
  onClick = () => {},
}) => {
  const classes = `${styles.RectangleButton} ${styles[`${colorScheme}`]}`;
  return (
    <button className={classes} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export { RectangleButton };

// title is a text that appears on button f.ex. 'Subscribe'

// type prop is a type of a button and a string. By default it's just a button
// but if you need it to be some other type
// just add attribute type whith the type you want
// when decalring component

// colorScheme by default is green but you can make it black or gray

// onClick is obvious. By default this prop is an empty function so
