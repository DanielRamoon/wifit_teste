import ButtonCartItem from "../components/ButtomCartItem";
import { formatPriceBRL } from "../utils/formatPrice";

interface CartSummaryProps {
  total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="flex flex-col flex-grow overflow-y-auto gap-6 pb-6">
      <div className="w-full flex justify-between items-center max-w-[95%]">
        <ButtonCartItem
          text="FINALIZAR PEDIDO"
          onClick={() => console.log("Finalizar Pedido")}
          className="relative left-8"
        />
        <div className="flex items-center gap-2 pb-6">
          <span className="text-[14px] font-bold font-sans text-[#999999] leading-[100%]">
            TOTAL:
          </span>
          <span className="text-[24px] font-bold font-sans text-[#2F2E41] leading-[100%]">
            {formatPriceBRL(total)}
          </span>
        </div>
      </div>
    </div>
  );
}
