// components/BuyButton.tsx
import { ShoppingCart } from "lucide-react";

interface BuyButtonProps {
  quantity?: number;
  text?: string;
  onClick?: () => void;
}

export default function BuyButton({
  quantity = 0,
  text = "ADICIONAR NO CARRINHO",
  onClick,
}: BuyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-3 w-[306.6667px] h-[40px] p-2 rounded-[4px] bg-[#009EDD] hover:bg-[#0080b3] transition"
    >
      {/* Ícone do carrinho */}
      <ShoppingCart size={13} className="text-white" />

      {/* Quantidade */}
      <span className="text-white text-[12px] font-normal text-center">
        {quantity}
      </span>

      {/* Texto */}
      <span className="text-[12px] font-bold text-center text-white">
        {text}
      </span>
    </button>
  );
}
