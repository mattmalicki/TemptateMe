import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.UserImage}>
        <img
          className={styles.image}
          alt="User avatar"
          src="../../../images/start-page.png"
        />
      </div>
      <span className={styles.UserName}>Test</span>
    </div>
  );
};

export { UserInfo };
