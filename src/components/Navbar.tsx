import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useMemo } from "react";

export default function Navbar() {
  const { cartItems } = useCart();

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <header className="w-full h-[80px] flex items-center justify-around px-12 py-4 bg-[#2F2E41] text-white ml-8 mt-16">
      <Link
        to="/"
        className="font-sans font-bold text-[20px] leading-none tracking-normal cursor-pointer relative left-5 sm:relative sm:right-0"
      >
        WeMovies
      </Link>

      <Link
        to="/cart"
        className="flex items-center gap-3 cursor-pointer relative left-5 sm:relative sm:left-0"
      >
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
