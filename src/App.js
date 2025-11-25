import { Routes, Route  } from "react-router-dom";
import HomePage from "./pages/Weather";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Weather from "./pages/Weather";
import Welcome from "./pages/Home";
import { queryByAttribute } from "@testing-library/dom";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
   </>
  );
}

export default App;