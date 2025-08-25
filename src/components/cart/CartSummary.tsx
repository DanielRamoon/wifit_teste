import ButtonCartItem from "../buttom/ButtomCartItem";
import { formatPriceBRL } from "../../utils/formatPrice";

interface CartSummaryProps {
  total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="flex flex-col flex-grow overflow-y-auto gap-4 pb-2">
      <div className="flex justify-center mt-4 mb-1 px-4">
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-4 gap-4">
        <ButtonCartItem
          text="FINALIZAR PEDIDO"
          className="w-full sm:w-auto h-12 py-2"
          to="/confirmed"
        />
        <div className="flex w-full sm:w-auto justify-between items-center">
          <span className="text-[14px] font-bold text-[#999999]">TOTAL:</span>
          <span className="text-[24px] font-bold text-[#2F2E41]">
            {formatPriceBRL(total)}
          </span>
        </div>
      </div>
    </div>
  );
}
