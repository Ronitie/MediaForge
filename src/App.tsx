import { Navbar } from "./components/Navbar";
import { Footer } from "./components/statics/Footer";
import { FileContextProvider } from "./context/FileContextProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { BenefitsSection } from "./components/statics/BenefitsSection";
import ImageConverterPage from "./pages/ImgConverter";

function App() {
  return (
    <>
      <Navbar />
      <FileContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-converter" element={<ImageConverterPage />} />
        </Routes>
      </FileContextProvider>
      <BenefitsSection />
      <Footer />
    </>
  );
}

export default App;
