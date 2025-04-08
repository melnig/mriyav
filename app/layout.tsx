"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import dynamic from "next/dynamic";
import { CTAClickProvider } from "../context/CTAClickContext";

// Динамічно імпортуємо BackgroundCanvas і Home із вимкненим SSR
const BackgroundCanvas = dynamic(
  () => import("../components/BackgroundCanvas"),
  { ssr: false }
);
const Home = dynamic(() => import("./page"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, [isClient]);

  if (!isClient) {
    return (
      <html lang="en">
        <body />
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <BackgroundCanvas />
        <Header
          onCTAClick={() => setIsFormOpen(true)}
          scrollProgress={scrollProgress}
        />
        <main className="container">
          {/* Обгортаємо Home у CTAClickProvider */}
          <CTAClickProvider onCTAClick={() => setIsFormOpen(true)}>
            <Home />
          </CTAClickProvider>
        </main>
        <Footer />
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </body>
    </html>
  );
}
