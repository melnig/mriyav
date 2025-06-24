"use client";

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
    title: "Blog for Solar Energy Solutions",
    description:
      "A responsive blog for solar energy solutions, built with PHP, MySQL, and JavaScript.",
    image: "/portfolio/project1.png",
    link: "https://solarmind.com.ua",
    category: "Web",
  },
  {
    id: 2,
    title: "Ukrainian Culture Showcase App",
    description:
      "A website for showcasing Ukrainian culture and heritage, built with React, Next.js.",
    image: "/portfolio/project2.png",
    link: "https://melnig.github.io/ukrainian-culture-showcase/",
    category: "Web",
  },
  {
    id: 3,
    title: "Space Landing Page",
    description:
      "A landing page for a space exploration project, built with React.js.",
    image: "/portfolio/project3.png",
    link: "https://melnig.github.io/space-landing/",
    category: "Web",
  },
  {
    id: 4,
    title: "LearnSphere",
    description:
      "A learning management system for online courses, built with Next.js and Node.js.",
    image: "/portfolio/project4.png",
    link: "https://bucolic-heliotrope-709218.netlify.app/login",
    category: "Web",
  },
  {
    id: 5,
    title: "Nexcent Landing Page",
    description:
      "A modern landing page for a tech company, built with React.js.",
    image: "/portfolio/project5.png",
    link: "https://melnig.github.io/nexcent/",
    category: "Web",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // За замовчуванням 1 слайд (для мобільних)
          spaceBetween={10} // Невеликий відступ на мобільних
          coverflowEffect={{
            rotate: 0, // Вимикаємо поворот на мобільних
            stretch: 0,
            depth: 0, // Вимикаємо глибину на мобільних
            modifier: 0, // Вимикаємо модифікатор
            slideShadows: false, // Вимикаємо тіні
          }}
          navigation={false} // Кнопки навігації вимкнені
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3, // 3 слайди на екранах ≥ 768px
              spaceBetween: 20, // Відступ на великих екранах
              coverflowEffect: {
                rotate: 50, // Повертаємо ефект coverflow на великих екранах
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              },
            },
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
