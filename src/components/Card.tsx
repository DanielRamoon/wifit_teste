import type { Movie } from "../types/movie";
import { formatPriceBRL } from "../utils/formatPrice";
import BuyButton from "./Button";
import { UseCart } from "../context/CartContext";
import { colors } from "../constants/colors";

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  const { addToCart, cartItems } = UseCart();
  const itemInCart = cartItems.find((item) => item.id === movie.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between w-[100%] sm:w-full max-w-[328px] h-[324px]">
      <div className="flex justify-center">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-[147px] h-[188px] object-cover rounded-md"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center space-y-2 mt-2">
        <h2
          className="font-sans text-[12px] font-bold text-center"
          style={{ color: colors.darkGray }}
        >
          {movie.title}
        </h2>

        <span
          className="font-sans text-[16px] font-bold text-center"
          style={{ color: colors.deepBlue }}
        >
          {formatPriceBRL(movie.price)}
        </span>
      </div>

      <div className="mt-2">
        <BuyButton quantity={quantity} onClick={() => addToCart(movie)} />
      </div>
    </div>
  );
}
