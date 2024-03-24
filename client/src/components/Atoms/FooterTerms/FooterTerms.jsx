import styles from "./FooterTerms.module.css";

const FooterTerms = () => {
  return (
    <div className={styles.FooterTerms}>
      <div className={styles.rights}>© 2023 All Rights Reserved.</div>
      <div className={styles.terms}>Terms of Service</div>
    </div>
  );
};

export { FooterTerms };
