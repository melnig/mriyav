"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../styles/portfolio.css";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce platform built with React and Node.js.",
    image: "/portfolio/project1.jpg",
    link: "https://project1.com",
    category: "Web",
  },
  {
    id: 2,
    title: "Travel App",
    description:
      "A mobile app for booking travel destinations, built with Flutter.",
    image: "/portfolio/project2.jpg",
    link: "https://project2.com",
    category: "Mobile",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website with a modern design, built with Next.js.",
    image: "/portfolio/project3.jpg",
    link: "https://project3.com",
    category: "Web",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "A fitness tracking app with real-time analytics, built with React Native.",
    image: "/portfolio/project4.jpg",
    link: "https://project4.com",
    category: "Mobile",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "A modern website for a restaurant with online booking, built with Next.js.",
    image: "/portfolio/project5.jpg",
    link: "https://project5.com",
    category: "Web",
  },
];

export default function Portfolio() {
  useEffect(() => {
    // Динамічне завантаження Swiper для клієнтської сторони
    import("swiper").then(() => {});
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="portfolio-swiper"
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id} className="portfolio-slide">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <a
                      href={item.link}
                      className="portfolio-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-description">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
