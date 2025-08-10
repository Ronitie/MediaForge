import { BenefitsSection } from "./components/statics/BenefitsSection";
import { HeroSection } from "./components/statics/HeroSection";
import { Navbar } from "./components/Navbar";
import { ToolsSection } from "./components/ToolsSection";
import { Footer } from "./components/statics/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <BenefitsSection />
      <Footer />
    </>
  );
}

export default App;
