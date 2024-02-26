import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import DashboardPage from "./Components/DashboardPage";
import ProductPage from "./Components/ProductPage";
import DetailsPage  from "./Components/DetailsPage";
import CartPage from "./Components/CartPage";
import OrdersPage from "./Components/OrdersPage";
import Logout from "./Components/Logout";
// import CheckoutPage from "./Components/CheckoutPage";
function App() {
  return (
    <div>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/:category" element={<ProductPage/>}/>
          <Route path="/:category/product/:product_id/" element={<DetailsPage/>}/>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
