import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";

function App() {
  return (
    <div>
      <Main>
        <Routes>
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/login" element={<LoginPage />} />
          <Route  path="/register" element={<RegistrationPage />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
