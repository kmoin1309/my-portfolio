import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styles from "./SocilIcons.module.css";

function SocialIcons() {
  return (
    <div className={styles.socialIconsContainer}>
      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/md-moinuddin-quazi-7a5942244/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>

      <a
        className={styles.icon}
        href="https://github.com/kmoin1309"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a
        className={styles.icon}
        href="https://wa.me/+918766996609"
        target="_blank"
      >
        <FaWhatsapp />
      </a>

      <a
        className={styles.icon}
        href="mailto:moinoddinkazi13@gmail.com"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialIcons;
