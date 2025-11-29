import "../styles/Footer.css";
import Icons from "./Icons";

export default function Footer() {
  // Get and dynamically render current year
  let thisYear = new Date().toDateString().slice(11);

  return (
    <footer id="footer" className="awal-credits-section">
      <div className="awal-container">
        <Icons />
        <p id="copyright-text">
          © {thisYear} Dimiter Yordanov. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
