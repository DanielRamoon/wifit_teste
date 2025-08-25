import type { Movie } from "../../types/movie";
import { formatPriceBRL } from "../../utils/formatPrice";
import BuyButton from "../buttom/ButtonCard";
import { useCart } from "../../hooks/useCart";

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  const { addToCart, cartItems } = useCart();
  const itemInCart = cartItems.find((item) => item.id === movie.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between w-full sm:w-full max-w-[328px] h-[324px] mb-4">
      <div className="flex justify-center">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-[147px] h-[188px] object-cover rounded-md"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center space-y-2 mt-2">
        <h2 className="font-sans text-[12px] font-bold text-center text-[#333333]">
          {movie.title}
        </h2>

        <span className="font-sans text-[16px] font-bold text-center text-[#2F2E41]">
          {formatPriceBRL(movie.price)}
        </span>
      </div>

      <div className="mt-2">
        <BuyButton quantity={quantity} onClick={() => addToCart(movie)} />
      </div>
    </div>
  );
}
