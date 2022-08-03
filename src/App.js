import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );
  return (
    <>
      <Routes>
        {isLoggedIn ? null : <Route path="/" element={<AuthPage />} />}
        {isLoggedIn && <Route path="*" element={<MainPage />} />}
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </>
  );
};
console.log(JSON.parse(localStorage.getItem("loggedIn")));
export default App;
