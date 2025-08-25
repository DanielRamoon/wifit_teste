import ButtonCartItem from "../components/ButtomCartItem";
import { formatPriceBRL } from "../utils/formatPrice";

interface CartSummaryProps {
  total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="flex flex-col flex-grow overflow-y-auto gap-10 pb-6">
      <div className="flex flex-col sm:flex-row w-[97%] gap-4 sm:justify-between sm:items-center sm:mx-auto sm:max-w-[1048px]">
        <div className="flex justify-between items-center w-[97%] px-4 sm:w-auto sm:justify-end sm:px-0 sm:order-last">
          <span className="text-[14px] font-bold font-sans text-[#999999] leading-[100%]">
            TOTAL:
          </span>
          <span className="text-[24px] font-bold font-sans text-[#2F2E41] leading-[100%]">
            {formatPriceBRL(total)}
          </span>
        </div>

        <ButtonCartItem
          text="FINALIZAR PEDIDO"
          className="w-[90%] mx-auto h-12 py-2 sm:w-auto sm:mx-0 sm:order-none"
          to="/confirmed"
        />
      </div>
    </div>
  );
}
