import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import PurchaseConfirmed from "../pages/PurchaseConfirmed";
import Navbar from "../components/header/Navbar";

function Routes() {
  return (
    <>
      <Navbar />
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Confirmed" element={<PurchaseConfirmed />} />
      </RouterRoutes>
    </>
  );
}

export default Routes;
