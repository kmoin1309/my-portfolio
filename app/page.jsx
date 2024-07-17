"use client";
import { FaDownload } from "react-icons/fa";
import styles from "./page.module.css";
import SocialIcons from "./components/socialIcons/SocialIcons";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const FILE_NAME = "1K-3bZzPdUOIm2HdDWbiiVdAp2at9KRnY";

function HomePage() {
  return (
    <main className={`${styles.homeContainer}`}>
      <div className={`${styles.imgBackground}`}>
        <div className={styles.shape}></div>
        <div className={styles.imageBox}>
          <Image
            className={styles.personalImage}
            src="/assests/home/homeImage.jpg"
            alt="personal image"
            width={350}
            height={500}
          />
        </div>
      </div>
      <div className={styles.homeTextContainer}>
        <h1 className={styles.primaryHeading}>
          Hi, <span>I'm Moinuddin I'm a</span>
          <br />
        </h1>
        <h1 className={styles.primaryHeading}>
          <TypeAnimation
            sequence={[
              "Full Stack Developer.",
              1000,
              "Web-Developer.",
              1000,
              "Programmer.",
              1000,
              "Tech Enthusiast.",
              1000,
            ]}
            // wrapper=""
            speed={50}
            style={{
              fontSize: "4rem",
              lineHeight: "1.6",
              display: "inline-block",
              fontWeight: 700,
              color: "var(--main-light-color)",
              font: "bold",
            }}
            repeat={Infinity}
          />
        </h1>

        <SocialIcons />

        <div className={styles.buttonBox}>
          <a
            href={`https://drive.google.com/u/1/uc?id=${FILE_NAME}&export=download`}
            rel="noreferrer"
            download
            target="_self"
            className={styles.button}
          >
            <span className={styles.buttonTxt}>Download CV</span>
            <span className={styles.buttonIcon}>
              <FaDownload />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
export default HomePage;
// https://drive.google.com/uc?export=download&id=1K-3bZzPdUOIm2HdDWbiiVdAp2at9KRnY
//drive.google.com/file/d/1K-3bZzPdUOIm2HdDWbiiVdAp2at9KRnY/view?usp=sharing