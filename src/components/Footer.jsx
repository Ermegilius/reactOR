import "./Footer.css";

function Footer() {
  return (
    <footer>
      &copy; <span id="year">{new Date().getFullYear()}</span> by Ermegilius
      (aka Vladimir Beliakov)
    </footer>
  );
}

export default Footer;
