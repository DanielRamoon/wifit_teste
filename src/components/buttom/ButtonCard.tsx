import ButtomShopping from "../../assets/mdaddshoppingcart 1.svg";

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
            ? "bg-[rgba(3,155,0,1)] hover:bg-green-700"
            : "bg-[#009EDD] hover:bg-[#0080b3]"
        }
      `}
    >
      {/* Ícone substituído pela imagem */}
      <img src={ButtomShopping} alt="Carrinho" className="w-4 h-4" />

      <span className="text-white text-[12px] font-normal text-center">
        {quantity}
      </span>

      <span className="text-[12px] font-bold text-center text-white">
        {text}
      </span>
    </button>
  );
}
