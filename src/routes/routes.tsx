import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import PurchaseConfirmed from "../pages/PurchaseConfirmed";
import Navbar from "../components/Navbar";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Confirmed" element={<PurchaseConfirmed />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
