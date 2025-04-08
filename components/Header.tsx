"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import "../styles/header.css";

interface HeaderProps {
  onCTAClick: () => void;
  scrollProgress: number;
}

export default function Header({ onCTAClick, scrollProgress }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, isClient]);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Закриваємо меню після кліку
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div
            className="logo"
            onClick={handleScrollToTop}
            style={{ cursor: "pointer" }}
          >
            <span className="logo-text">Mri</span>
            <span className="logo-y">y</span>
            <span className="logo-text">av</span>
          </div>

          <button
            className={`hamburger ${isMenuOpen ? "hamburger-open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="hamburger-line hamburger-line-top"></span>
            <span className="hamburger-line hamburger-line-middle"></span>
            <span className="hamburger-line hamburger-line-bottom"></span>
          </button>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <button
                  className="nav-link"
                  onClick={() => handleScrollToSection("portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  onClick={() => handleScrollToSection("insights")}
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  onClick={() => handleScrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  onClick={() => handleScrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="nav-cta" onClick={() => setIsFormOpen(true)}>
                  Start Your Journey
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
}
