
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Home from "../pages/home/Home.jsx";
import Favorites from "../pages/favorite/Favorite.jsx";
import Details from "../pages/details/Details.jsx";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;