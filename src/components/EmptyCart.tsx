import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center h-60 gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h13M17 13l2 5M6 18a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"
        />
      </svg>

      <h3 className="text-[20px] font-bold text-gray-400">CARRINHO VAZIO</h3>

      <Link
        to="/"
        className="flex items-center justify-center gap-3 w-[306.6667px] h-[40px] p-2 rounded-[4px] bg-[#009EDD] hover:bg-[#0080b3] transition text-white font-bold"
      >
        VOLTAR
      </Link>
    </div>
  );
}
