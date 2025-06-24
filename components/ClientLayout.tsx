"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import dynamic from "next/dynamic";
import { CTAClickProvider } from "../context/CTAClickContext";

const BackgroundCanvas = dynamic(
  () => import("../components/BackgroundCanvas"),
  {
    ssr: false,
  }
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <BackgroundCanvas />
      <Header
        onCTAClick={() => setIsFormOpen(true)}
        scrollProgress={scrollProgress}
      />
      <main className="container">
        <CTAClickProvider onCTAClick={() => setIsFormOpen(true)}>
          {children}
        </CTAClickProvider>
      </main>
      <Footer />
      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
}
