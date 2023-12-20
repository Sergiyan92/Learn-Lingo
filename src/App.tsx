import { Route, Routes } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";
import HomePage from "./pages/HomePage";
import Favorites from "./components/favorites/Favorites";
// import BookTrial from "./components/book-trial/BookTrial";
function App() {
  // function handleCloseModal(): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    // <>
    //   <BookTrial onClose={handleCloseModal} />
    // </>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
