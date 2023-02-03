import AboutPage from "./pages/AboutPage";
import FactsPage from "./pages/FactsPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";

function ScrollContent() {
  return (
      <main id="main">
        <AboutPage/>
        <FactsPage/>
        <SkillsPage/>
        <ResumePage/>
        <PortfolioPage/>
        <ServicesPage/>
      </main>
  );
}

export default ScrollContent;