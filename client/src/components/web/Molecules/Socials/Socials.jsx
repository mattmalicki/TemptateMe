import styles from "./Socials.module.css";
import { SocialIcon } from "../../Atoms/SocialIcon/SocialIcon.jsx";
import { ReactComponent as FacebokIcon } from "./icon-facebook.svg";
import { ReactComponent as YoutubeIcon } from "./icon-youtube.svg";
import { ReactComponent as TwitterIcon } from "./icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "./icon-instagram.svg";

const Socials = ({ isBigger = false }) => {
  return (
    <div className={styles.Socials}>
      <SocialIcon styles={!isBigger ? styles.fbXS : styles.fbS}>
        <FacebokIcon />
      </SocialIcon>
      <SocialIcon styles={!isBigger ? styles.ytXS : styles.ytS}>
        <YoutubeIcon />
      </SocialIcon>
      <SocialIcon styles={!isBigger ? styles.twitterXS : styles.twitterS}>
        <TwitterIcon />
      </SocialIcon>
      <SocialIcon styles={!isBigger ? styles.instaXS : styles.instaS}>
        <InstagramIcon />
      </SocialIcon>
    </div>
  );
};

export { Socials };
