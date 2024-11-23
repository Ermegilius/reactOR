import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerConteiner">
        &copy; <span id="year">{new Date().getFullYear()}</span> by Ermegilius
        (aka Vladimir Beliakov)
      </div>
    </footer>
  );
}

export default Footer;
