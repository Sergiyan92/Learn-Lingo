import { Route, Routes } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";
import HomePage from "./pages/HomePage";
import Favorites from "./components/favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
