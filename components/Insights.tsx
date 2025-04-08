"use client";

import { useEffect, useRef, useState } from "react";
import "../styles/insights.css";

interface InsightItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const insightsData: InsightItem[] = [
  {
    id: 1,
    image: "/insights/insight1.jpg",
    title: "The Future of Web Development in 2025",
    description:
      "Exploring the trends and technologies shaping the web development landscape.",
    link: "/insights/future-of-web-dev",
  },
  {
    id: 2,
    image: "/insights/insight2.jpg",
    title: "How AI is Transforming UX Design",
    description:
      "A deep dive into the role of AI in creating intuitive user experiences.",
    link: "/insights/ai-ux-design",
  },
  {
    id: 3,
    image: "/insights/insight3.jpg",
    title: "Scaling Your Startup with Custom Tech",
    description:
      "Lessons from building scalable solutions for fast-growing startups.",
    link: "/insights/scaling-startup",
  },
];

export default function Insights() {
  const itemsRef = useRef<React.RefObject<HTMLDivElement | null>[]>(
    insightsData.map(() => useRef<HTMLDivElement | null>(null))
  );
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    insightsData.map(() => false)
  );

  useEffect(() => {
    const itemsElements = itemsRef.current.map((ref) => ref.current);

    if (!itemsElements.length) return;

    const updateAnimation = () => {
      const scrollTop = window.scrollY;
      const section = document.querySelector(".insights") as HTMLElement;
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
        const itemPosition = (index + 0.5) / insightsData.length;
        if (
          scrollProgress >= itemPosition - 0.1 &&
          item &&
          !visibleItems[index]
        ) {
          item.classList.add("visible");
          setVisibleItems((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
          console.log(`Item ${index + 1} became visible`); // Дебаг-лог
        }
      });
    };

    window.addEventListener("scroll", updateAnimation);
    updateAnimation();

    return () => window.removeEventListener("scroll", updateAnimation);
  }, [visibleItems]);

  return (
    <section className="insights">
      <div className="insights-container">
        <h2 className="insights-title">Insights</h2>
        <div className="insights-grid">
          {insightsData.map((item, index) => (
            <div
              key={item.id}
              className="insights-item"
              ref={itemsRef.current[index]}
            >
              <div className="insights-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="insights-item-title">
                <MatrixText text={item.title} isVisible={visibleItems[index]} />
              </h3>
              <p className="insights-item-description">{item.description}</p>
              <a href={item.link} className="insights-link">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatrixText({ text, isVisible }: { text: string; isVisible: boolean }) {
  return (
    <span
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease" }}
    >
      {text}
    </span>
  );
}
