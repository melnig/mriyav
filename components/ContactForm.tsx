// components/ContactForm.tsx

import "../styles/contactform.css";

export default function ContactForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="contact-form-overlay">
      <div className="contact-form">
        <button className="contact-form-close" onClick={onClose}>
          <svg
            className="close-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="contact-form-title">Get in Touch</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-form-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-form-input"
          />
          <textarea
            placeholder="Your Message"
            className="contact-form-textarea"
          ></textarea>
          <button type="submit" className="contact-form-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
