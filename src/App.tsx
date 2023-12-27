import { Route, Routes } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";
import HomePage from "./pages/HomePage";

import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
