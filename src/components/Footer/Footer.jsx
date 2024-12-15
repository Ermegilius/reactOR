import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerConteiner}>
        <p>
          &copy; <span id="year">{new Date().getFullYear()}</span> by Ermegilius (aka Vladimir Beliakov)
        </p>
      </div>
    </footer>
  );
}

export default Footer;