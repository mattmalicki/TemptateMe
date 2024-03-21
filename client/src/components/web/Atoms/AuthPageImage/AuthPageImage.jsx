import styles from "./AuthPageImage.module.css";

const AuthPageImage = () => {
  return (
    <div className={styles.container}>
      <img
        src="../../../../images/auth-page.png"
        alt="Laptop wyświetlający stronę internetową Technocrack"
        srcset="
                    ../../../../images/auth-page-1596.png 1596w,
                    ../../../../images/auth-page-3192.png 3192w
                    "
        sizes="(min-width: 1024px) 532px, (min-width: 768px) 409px, 285px"
      />
    </div>
  );
};

export { AuthPageImage };
