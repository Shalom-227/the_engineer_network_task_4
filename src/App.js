import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Weather";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Weather from "./pages/Weather";
import Welcome from "./pages/Home";
import { queryByAttribute } from "@testing-library/dom";
import Home from "./pages/Home";

function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;