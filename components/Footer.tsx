"use client";

import Link from "next/link";
import "../styles/footer.css";

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
          <p>
            Email: <a href="mailto:info@mriyav.com">info@mriyav.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>

        {/* Соціальні мережі */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                  fill="currentColor"
                />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.52.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.43.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
                  fill="currentColor"
                />
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
