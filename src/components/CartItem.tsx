import { formatPriceBRL } from "../utils/formatPrice";
import svg from "../assets/Vector.svg";
import CartItemMobile from "./CartItemMobile"; // Importe o novo componente

interface CartItemProps {
  image: string;
  name: string;
  price: number;
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
    <>
      <div className="hidden sm:flex items-center py-2">
        <div className="flex items-center w-2/5 ml-4">
          <img
            src={image}
            alt={name}
            className="w-24 h-28 object-cover rounded-md"
          />
          <div className="ml-6">
            <h3 className="text-base font-bold text-[#2F2E41]">{name}</h3>
            <p className="text-sm text-[#999999]"> {formatPriceBRL(price)}</p>
          </div>
        </div>

        <div className="flex items-center w-1/5 gap-x-2 mr-6">
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
            className="w-16 h-8 text-center text-[#2F2E41] border border-gray-300 rounded-md font-sans"
          />
          <button
            onClick={onIncrease}
            className="rounded-full border-2 border-[#009EDD] w-6 h-6 flex items-center justify-center text-[#009EDD] font-extrabold hover:bg-[#E6F4FB]"
          >
            +
          </button>
        </div>

        <div className="w-1/5 text-left font-bold text-lg text-[#2F2E41] ">
          {formatPriceBRL(subtotal)}
        </div>

        <div className="w-1/5 flex justify-end">
          <button
            onClick={onRemove}
            className="text-[#009EDD] hover:text-[#007bb5]"
          >
            <img src={svg} alt="Ícone de Lixeira" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <CartItemMobile
        image={image}
        name={name}
        price={price}
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
      />
    </>
  );
}
