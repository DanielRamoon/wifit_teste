import { formatPriceBRL } from "../utils/formatPrice";
import svg from "../assets/Vector.svg";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export default function CartItemMobile({
  image,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const subtotal = price * quantity;

  return (
    <div className="flex sm:hidden flex-row w-full mt-4 items-center gap-4 pr-2">
      <img
        src={image}
        alt={name}
        className="w-24 h-28 object-cover rounded-md"
      />

      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-[14px] font-bold font-sans text-[#2F2E41] w-25">
            {name}
          </h3>
          <div className="flex items-center gap-3 ml-2 ">
            <p className="text-[16px] font-bold font-sans text-[#2F2E41] whitespace-nowrap">
              {formatPriceBRL(price)}
            </p>
            <button
              onClick={onRemove}
              className="text-[#009EDD] hover:text-[#007bb5]"
            >
              <img src={svg} alt="Ícone de Lixeira" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 ">
          <div className="flex items-center gap-1 ">
            <button
              onClick={onDecrease}
              className="rounded-full border-2 border-[#009EDD] w-6 h-6 flex items-center justify-center text-sm text-[#009EDD] font-extrabold hover:bg-[#E6F4FB]"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 h-6 text-center text-sm text-[#2F2E41] border border-gray-300 rounded-md font-sans"
            />
            <button
              onClick={onIncrease}
              className="rounded-full border-2 border-[#009EDD] w-6 h-6 flex items-center justify-center text-sm text-[#009EDD] font-extrabold hover:bg-[#E6F4FB]"
            >
              +
            </button>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[12px] font-sans text-[#999999]">
              SUBTOTAL
            </span>
            <span className="text-[16px] font-bold font-sans text-[#2F2E41]">
              {formatPriceBRL(subtotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
