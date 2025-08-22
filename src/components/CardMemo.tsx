import React from "react";
import type { Movie } from "../types/movie";
import { formatPriceBRL } from "../utils/formatPrice";
import BuyButton from "./Button";

interface CardProps {
  movie: Movie;
}

const CardComponent = ({ movie }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center w-full max-w-[328px] h-[324px] space-y-4">
      <div className="flex justify-center">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-[147px] h-[188px] object-cover rounded-md"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center space-y-3 relative top-2">
        <h2 className="font-sans text-[12px] font-bold text-center text-[#333333]">
          {movie.title}
        </h2>
        <span className="font-sans text-[16px] font-bold text-center text-[#2F2E41]">
          R$ {formatPriceBRL(movie.price)}
        </span>
      </div>

      <div className="relative top-4">
        <BuyButton onClick={() => console.log(`Comprou ${movie.title}`)} />
      </div>
    </div>
  );
};

export default React.memo(CardComponent);
