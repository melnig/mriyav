import Hero from "../components/Hero";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import WhyUs from "../components/WhyUs";
import Insights from "../components/Insights";
import About from "../components/About";
import Contact from "../components/Contact";

// Прибираємо HomeProps, оскільки page.tsx не повинен приймати кастомні пропси
export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Portfolio />
      <WhyUs />
      <Insights />
      <About />
      <Contact />
    </>
  );
}
