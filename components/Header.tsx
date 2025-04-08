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

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
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
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
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
