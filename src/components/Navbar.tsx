import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { UseCart } from "../context/CartContext";
import { useMemo } from "react";

export default function Navbar() {
  const { cartItems } = UseCart();

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <header className="w-full max-w-screen-lg mx-auto h-8 mt-4 flex items-center justify-between px-8 sm:px-4 bg-[#2F2E41] text-white">
      <Link
        to="/"
        className="font-sans font-bold text-[20px] leading-none tracking-normal cursor-pointer"
      >
        WeMovies
      </Link>

      <Link to="/cart" className="flex items-center gap-3 cursor-pointer">
        <div className="flex flex-col text-right leading-tight">
          <span className="font-sans font-bold text-[14px] hidden sm:block">
            Meu Carrinho
          </span>
          <span className="font-sans font-bold text-[12px]">
            {totalItems} itens
          </span>
        </div>
        <ShoppingCart size={24} />
      </Link>
    </header>
  );
}
