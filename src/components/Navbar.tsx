import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full h-[80px] flex items-center justify-around px-12 py-4 bg-[#2F2E41] text-white ml-8 mt-16">
      {/* Logo */}
      <h1 className="font-sans font-bold text-[20px] leading-none tracking-normal cursor-pointer relative left-5 sm:relative sm:right-0">
        WeMovies
      </h1>

      {/* Carrinho */}
      <div className="flex items-center gap-3 cursor-pointer relative left-5 sm:relative sm:left-0">
        <div className="flex flex-col text-right leading-tight">
          <span className="font-sans font-bold text-[14px] hidden sm:block">
            Meu Carrinho
          </span>
          <span className="font-sans font-bold text-[12px]">0 itens</span>
        </div>
        <ShoppingCart size={24} />
      </div>
    </header>
  );
}
