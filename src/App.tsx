import { Navbar } from "./components/Navbar";
import { Footer } from "./components/statics/Footer";
import { FileContextProvider } from "./context/FileContextProvider";
import { Route, Routes } from "react-router-dom";
import ImageConverterPage from "./pages/ImageConverter";
import Home from "./pages/Home";

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
      <Footer />
    </>
  );
}

export default App;
