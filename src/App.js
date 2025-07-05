import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
