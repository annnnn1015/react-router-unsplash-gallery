import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
