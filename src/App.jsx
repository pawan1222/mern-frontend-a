import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Users from "./components/Users";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
     <div className="App-Container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
        <footer style={{ textAlign: "center", padding: "20px 0" }}>
          <h3>This is footer</h3>
        </footer>
      </BrowserRouter>
    </div>
  );
}
export default App;