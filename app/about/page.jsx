import styles from "./page.module.css";
import PageHeading from "../components/pageHeading/PageHeading";
import ExperienceList from "./components/experienceList/ExperienceList";
import SkillsList from "./components/skillsList/SkillsList";

function AboutPage() {
  return (
    <main className="container">
      <PageHeading
        secondaryTitle="My Study"
        primaryTitle={`ABOUT ME`}
      />

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Who am I ? </h2>
          <p>Hello there, My name is Moinuddin Quazi, I'm a MERN Developer.</p>
          <p>
            Over the years, I have delved into numerous technologies, created
            innovative websites, and contributed to various projects.
          </p>
          <p>
            I am continuously seeking opportunities that align with my skills and
            allow me to leverage everything I have learned.
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Education :</h2>
          <p>
            Studies Bachelor of Computer Science - Computer Science department
            at Terna Engineering College , Mumbai university. 2022 - 2026
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Experience :</h2>
          <ExperienceList />
        </div>

        {/* <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Certificates :</h2>
          <p>1&#41; Route certified Frontend Web Developer</p>
          <p>
            2&#41; Udemy certified The Ultimate React Course 2023: React, Redux
            & More
          </p>
          <p>
            3&#41; Information Technology Institute (ITI) certified Frontend Web
            Developer
          </p>
          <a
            className={styles.viewMore}
            href="https://github.com/RahmaaEsmail/certifications"
            target="_blank"
          >
            View More
          </a>
        </div> */}
      </div>

      <div className={styles.skillBox}>
        <h2 className={styles.aboutBoxTitle}>My Skills</h2>
        <SkillsList />
      </div>
    </main>
  );
}
export default AboutPage;
