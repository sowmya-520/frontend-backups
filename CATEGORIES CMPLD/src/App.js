import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import DashboardPage from "./Components/DashboardPage";

function App() {
  return (
    <div>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
