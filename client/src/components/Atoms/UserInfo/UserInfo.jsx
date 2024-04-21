import { useAuth } from "../../../hooks/index.js";
import styles from "./UserInfo.module.css";

const UserInfo = ({ onClick }) => {
  const { user } = useAuth();
  return (
    <div className={styles.UserInfo}>
      <div className={styles.UserImage} onClick={onClick}>
        <img className={styles.image} alt="User avatar" src={user.photoUrl} />
      </div>
      <span className={styles.UserName}>{user.name}</span>
    </div>
  );
};

export { UserInfo };
