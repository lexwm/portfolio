import AboutPage from "./pages/about/AboutPage";
import FactsPage from "./pages/facts/FactsPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ServicesPage from "./pages/services/ServicesPage";
import TestimonialsPage from "./pages/TestimonialsPage";

function ScrollContent() {
  return (
      <main id="main">
        <AboutPage/>
        <FactsPage/>
        <SkillsPage/>
        <ResumePage/>
        <PortfolioPage/>
        <ServicesPage/>
        <TestimonialsPage/>
      </main>
  );
}

export default ScrollContent;