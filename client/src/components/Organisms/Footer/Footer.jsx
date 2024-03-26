import styles from "./Footer.module.css";
import { Navigation } from "../Navigation/Navigation.jsx";
import { Socials } from "../../Molecules/Socials/Socials.jsx";
import { FooterTerms } from "../../Atoms/FooterTerms/FooterTerms.jsx";
import { Newsletter } from "../../Molecules/Newsletter/Newsletter.jsx";
import { FooterInfo } from "../../Molecules/FooterInfo/FooterInfo.jsx";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <footer className={styles.Footer}>
          <FooterInfo />
          <Navigation isFooter={true} />
          <Newsletter />
          <div className={styles.Socials}>
            <Socials />
          </div>
        </footer>
      </div>
      <FooterTerms />
    </>
  );
};

export { Footer };
