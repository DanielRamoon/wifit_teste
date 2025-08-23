import { formatPriceBRL } from "../utils/formatPrice";
import svg from "../assets/Vector.svg";

interface CartItemProps {
  image: string;
  name: string;
  price: number; // número
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export default function CartItem({
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
    <div className="flex justify-evenly items-center py-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full mt-10 sm:w-2/5">
        <img
          src={image}
          alt={name}
          className="w-32 h-36 object-cover rounded-md"
        />
        <div className="flex justify-between w-full mt-2 sm:flex-col sm:mt-0 sm:ml-6">
          <h3 className="text-[14px] font-bold text-[#2F2E41] relative left-2">
            {name}
          </h3>
          <p className="text-[16px] font-bold text-[#2F2E41] sm:mt-1 relative left-2">
            {formatPriceBRL(price)}
          </p>
        </div>
      </div>

      <div className="flex items-center w-1/5 gap-x-2">
        <button
          onClick={onDecrease}
          className="rounded-full border-2 border-[#009EDD] w-6 h-6 flex items-center justify-center text-[#009EDD] font-extrabold hover:bg-[#E6F4FB]"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-[62px] h-[26px] text-center text-[#2F2E41] border border-gray-300 rounded-md font-sans"
        />
        <button
          onClick={onIncrease}
          className="rounded-full border-2 border-[#009EDD] w-6 h-6 flex items-center justify-center text-[#009EDD] font-extrabold hover:bg-[#E6F4FB]"
        >
          +
        </button>
      </div>

      <div className="w-1/5 text-left text-[#2F2E41] font-bold text-[16px]">
        {formatPriceBRL(subtotal)}
      </div>

      <div className="w-[40px] flex justify-end">
        <button
          onClick={onRemove}
          className="text-[#009EDD] hover:text-[#007bb5]"
        >
          <img src={svg} alt="Ícone de Lixeira" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
