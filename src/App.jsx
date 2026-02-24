import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import WhatsAppBtn from "./Components/WhatsAppBtn";
import BackToTop from "./Components/BackToTop";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Marque from "./Components/Marque"
import About from "./Pages/About";
import Room from "./Pages/Room";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-rooms" element={<Room />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <WhatsAppBtn />
        <BackToTop />
        <Marque />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
