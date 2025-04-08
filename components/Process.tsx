"use client";

import { useEffect, useRef } from "react";
import "../styles/process.css";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "We explore your needs, market, and goals to lay a solid foundation.",
      details:
        "Our team conducts in-depth analysis of your business, target audience, and competitors. We identify opportunities and challenges to ensure a strong starting point for your project.",
      icon: "/icons/research.svg", // Шлях до іконки (можеш замінити на свою)
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We map out a strategy to turn your vision into a clear roadmap.",
      details:
        "We define project milestones, timelines, and resources. This step ensures that every aspect of your project aligns with your goals and sets the stage for smooth execution.",
      icon: "/icons/plan.svg",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create intuitive, stunning designs tailored to your brand.",
      details:
        "Our designers craft visually appealing and user-friendly interfaces. We focus on creating a seamless user experience that reflects your brand identity and engages your audience.",
      icon: "/icons/design.svg",
    },
    {
      number: "04",
      title: "Build",
      description:
        "We develop your solution with precision and cutting-edge tech.",
      details:
        "Our developers bring the design to life using the latest technologies. We ensure your solution is robust, scalable, and optimized for performance across all devices.",
      icon: "/icons/build.svg",
    },
    {
      number: "05",
      title: "Launch",
      description: "We deliver your project, ready to shine and grow.",
      details:
        "We thoroughly test your project to ensure it’s flawless. After launch, we provide support to help your solution thrive and adapt to future needs.",
      icon: "/icons/launch.svg",
    },
  ];

  const pathRef = useRef<SVGPathElement>(null);
  // Виправляємо типізацію: дозволяємо null у RefObject
  const stepsRef = useRef<React.RefObject<HTMLDivElement | null>[]>(
    steps.map(() => useRef<HTMLDivElement | null>(null))
  );

  useEffect(() => {
    const path = pathRef.current;
    const stepsElements = stepsRef.current.map((ref) => ref.current);

    if (!path || !stepsElements.length) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const updateAnimation = () => {
      const scrollTop = window.scrollY;
      const section = document.querySelector(".process") as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollProgress = Math.min(
        Math.max(
          (scrollTop - sectionTop + window.innerHeight / 3) /
            (sectionHeight * 0.8),
          0
        ),
        1
      );

      const offset = pathLength * (1 - scrollProgress);
      path.style.strokeDashoffset = `${offset}`;

      stepsElements.forEach((step, index) => {
        const stepPosition = (index + 0.5) / steps.length;
        if (scrollProgress >= stepPosition - 0.05 && step) {
          // Перевіряємо, що step не null
          step.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", updateAnimation);
    updateAnimation();

    return () => window.removeEventListener("scroll", updateAnimation);
  }, []);

  return (
    <section className="process">
      <div className="process-container">
        <h2 className="process-title">Our Process</h2>
        <svg className="process-path" preserveAspectRatio="none">
          <path
            ref={pathRef}
            d="M400,50 V204 H800 V520 H0 V804 H800 V1088 H0 V1402 H600"
            stroke="#4682B4"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step ${index % 2 === 0 ? "left" : "right"}`}
              ref={stepsRef.current[index]} // Передаємо RefObject
            >
              <img src={step.icon} alt={step.title} />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
