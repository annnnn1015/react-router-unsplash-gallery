import Navbar from "./components/Navbar";
import About from "./pages/About";
import Album from "./pages/Album";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPage from "./pages/AlbumPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<Album />}>
            <Route index element={<AlbumIndex />}></Route>
            <Route path=":id" element={<AlbumPage />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
