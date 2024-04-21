import styles from "./Socialcon.module.css";

const SocialIcon = ({ link, className, isBigger, children }) => {
  const isDark = false;
  let classes;
  if (isBigger) {
    classes = `${className} ${isDark ? styles.SocialBiggerDark : styles.SocialBigger}`;
  } else {
    classes = `${className} ${isDark ? styles.SocialIconDark : styles.SocialIcon}`;
  }
  return (
    <a href={link} className={classes}>
      {children}
    </a>
  );
};

export { SocialIcon };
