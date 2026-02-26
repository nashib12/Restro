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
import Blog from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import RoomDetails from "./Pages/RoomDetails";
import Services from "./Pages/Services";
import BlogDetail from "./Pages/BlogDetail";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-rooms" element={<Room />} >
          </Route>
            <Route path="/room-details" element={<RoomDetails />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blogs" element={<Blog />}>
            
          </Route>
          <Route path="/blog-details" element={<BlogDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="*" element={<Error />} />
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
