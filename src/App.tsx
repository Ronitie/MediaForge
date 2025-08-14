import { Navbar } from "./components/Navbar";
import { Footer } from "./components/statics/Footer";
import { FileContextProvider } from "./context/FileContextProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { BenefitsSection } from "./components/statics/BenefitsSection";
import ImageConverterPageRS from "./pages/ImgConverterRS";

function App() {
  return (
    <>
      <Navbar />
      <FileContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-converter" element={<ImageConverterPageRS />} />
        </Routes>
      </FileContextProvider>
      <BenefitsSection />
      <Footer />
    </>
  );
}

export default App;
