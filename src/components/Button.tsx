import { ShoppingCart } from "lucide-react";
import { colors } from "../constants/colors";

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
  const hasItems = quantity > 0;

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 w-[306.6667px] h-[40px] p-2 rounded-[4px] transition
        ${
          hasItems
            ? `bg-[${colors.green}] hover:bg-${colors.green}`
            : `bg-[${colors.blue}] hover:bg-[${colors.blueHover}]`
        }
      `}
    >
      <ShoppingCart size={13} className="text-white" />
      <span className="text-white text-[12px] font-normal text-center">
        {quantity}
      </span>
      <span className="text-[12px] font-bold text-center text-white">
        {text}
      </span>
    </button>
  );
}
