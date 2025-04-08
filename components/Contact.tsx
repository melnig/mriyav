"use client";

import { useState, useEffect, useRef } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  // Анімація появи форми при скролі
  useEffect(() => {
    const formElement = formRef.current;
    if (!formElement) return;

    const updateAnimation = () => {
      const scrollTop = window.scrollY;
      const sectionTop = formElement.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight > sectionTop + 100) {
        formElement.classList.add("visible");
      }
    };

    window.addEventListener("scroll", updateAnimation);
    updateAnimation();

    return () => window.removeEventListener("scroll", updateAnimation);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Імітація відправки (заміни на реальний API-запит, якщо потрібно)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500); // Затримка для анімації "сканування"
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-form-wrapper" ref={formRef}>
          {isSubmitted ? (
            <div className="contact-success">
              <p>Your message has been sent!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
                {isSubmitting && <div className="scan-line"></div>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
