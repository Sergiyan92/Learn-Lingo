// import HomePage from "./pages/HomePage";

// import { Route, Routes } from "react-router-dom";
// import TeachersPage from "./pages/TeachersPage";
// import HomePage from "./pages/HomePage";
// import Favorites from "./components/favorites/Favorites";
import LoginForm from "./components/login/LoginForm";
import Registration from "./components/registration/Registration";

function App() {
  function handleCloseModal(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Registration onClose={handleCloseModal} />
      <LoginForm onClose={handleCloseModal} />
    </>
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/teachers" element={<TeachersPage />} />
    //   <Route path="/favorites" element={<Favorites />} />
    // </Routes>
  );
}

export default App;
