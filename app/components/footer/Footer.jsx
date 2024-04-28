import styles from "./Footer.module.css";

function Footer() {
  const date = new Date().getFullYear();
 
  return (
    <footer className={styles.footer}>
      <p>
        © {date} Copyright :{" "}
        <a
          href="https://github.com/kmoin1309"
          target="_blank"
        >
          Moinuddin Quazi
        </a>
      </p>
    </footer>
  );
}

export default Footer;
