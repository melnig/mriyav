"use client";

import Link from "next/link";
import "../styles/footer.css";
import instLogo from "../public/icons/instagram-logo.svg";

export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип */}
        <div className="footer-logo" onClick={handleScrollToTop}>
          <Link href="/">
            <span className="logo-text">Mri</span>
            <span className="logo-y">y</span>
            <span className="logo-text">av</span>
          </Link>
        </div>

        {/* Навігація */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>
              <button onClick={() => handleScrollToSection("portfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("insights")}>
                Insights
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("about")}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Контакти */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          {/* <p>
            Email: <a href="mailto:info@mriyav.com">info@mriyav.com</a>
          </p> */}
          <p>
            Phone: <a href="tel:+1234567890">+38 (066) 827-92-33</a>
          </p>
        </div>

        {/* Соціальні мережі */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://www.instagram.com/mriyav.studio?igsh=ZmNpZXVidGx0NTB6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Mriyav. All rights reserved.</p>
      </div>
    </footer>
  );
}
