"use client";

import { useState, useEffect } from "react";
import "../styles/hero.css";
import { useCTAClick } from "../context/CTAClickContext";

export default function Hero() {
  const { onCTAClick } = useCTAClick(); // Отримуємо onCTAClick із контексту

  const titles = [
    "We Build Your Future",
    "We Shape Your Dreams",
    "We Create Solutions",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const currentTitle = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedText.length === currentTitle.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }
  }, [displayedText, isDeleting, currentTitleIndex, titles, isClient]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{displayedText}</h1>
            <p className="hero-subtitle">
              Custom web solutions that turn your dreams into reality.
            </p>
            <button className="hero-cta" onClick={onCTAClick}>
              Start Your Journey
            </button>
          </div>
          <div className="hero-gif">
            <img
              src="/web_development.gif"
              alt="Web Development Animation"
              className="web-dev-gif"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
