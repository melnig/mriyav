"use client";

import { useEffect, useRef } from "react";
import "../styles/why-us.css";

interface WhyUsItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const whyUsData: WhyUsItem[] = [
  {
    id: 1,
    icon: "/icons/expertise.svg",
    title: "Expertise",
    description:
      "Our team brings years of experience in delivering top-notch digital solutions.",
  },
  {
    id: 2,
    icon: "/icons/innovation.svg",
    title: "Innovation",
    description:
      "We leverage cutting-edge technologies to create innovative products.",
  },
  {
    id: 3,
    icon: "/icons/client-focus.svg",
    title: "Client Focus",
    description:
      "Your vision is our priority—we build solutions tailored to your needs.",
  },
  {
    id: 4,
    icon: "/icons/quality.svg",
    title: "Quality Assurance",
    description:
      "We ensure the highest quality standards in every project we undertake.",
  },
  {
    id: 5,
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description:
      "Our dedicated support team is here to assist you around the clock.",
  },
  {
    id: 6,
    icon: "/icons/affordability.svg",
    title: "Affordability",
    description:
      "We provide competitive pricing without compromising on quality.",
  },
];

export default function WhyUs() {
  const itemsRef = useRef<React.RefObject<HTMLDivElement | null>[]>(
    whyUsData.map(() => useRef<HTMLDivElement | null>(null))
  );

  useEffect(() => {
    const itemsElements = itemsRef.current.map((ref) => ref.current);

    if (!itemsElements.length) return;

    const updateAnimation = () => {
      const scrollTop = window.scrollY;
      const section = document.querySelector(".why-us") as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollProgress = Math.min(
        Math.max(
          (scrollTop - sectionTop + window.innerHeight / 3) /
            (sectionHeight * 0.5),
          0
        ),
        1
      );

      itemsElements.forEach((item, index) => {
        const itemPosition = (index + 0.5) / whyUsData.length;
        if (scrollProgress >= itemPosition - 0.1 && item) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", updateAnimation);
    updateAnimation();

    return () => window.removeEventListener("scroll", updateAnimation);
  }, []);

  return (
    <section className="why-us">
      <div className="why-us-container">
        <h2 className="why-us-title">Why Choose Us</h2>
        <div className="why-us-grid">
          {whyUsData.map((item, index) => (
            <div
              key={item.id}
              className="why-us-item"
              ref={itemsRef.current[index]}
            >
              <div className="why-us-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="why-us-item-title">{item.title}</h3>
              <p className="why-us-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
