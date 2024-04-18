import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SliderNav from "./SliderNav";
import Home from "./Home";
import Products from "./Products";
import Users from "./Users";
import Orders from "./Orders";
import Account from "./Account";

function App() {
  return (
    <Router>
      <SliderNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
