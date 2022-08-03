import { Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/Authentication/GoogleAuth";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
