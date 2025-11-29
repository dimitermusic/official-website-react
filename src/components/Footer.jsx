import Icons from "./Icons";
import "../styles/GlobalStyles.css";
import "../styles/Footer.css";

export default function Footer() {
  // Get and dynamically render current year
  let thisYear = new Date().toDateString().slice(11);

  return (
    <footer id="footer" className="global-section">
      <div className="global-container">
        <Icons />
        <p id="copyright-text">
          © {thisYear} Dimiter Yordanov. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
