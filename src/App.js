import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
