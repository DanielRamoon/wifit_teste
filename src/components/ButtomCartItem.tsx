import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

interface ButtonCartItemProps {
  text: string;
  className?: string;
  to?: string;
}

export default function ButtonCartItem({
  text,
  className = "",
  to = "#",
}: ButtonCartItemProps) {
  return (
    <Link
      to={to}
      className={`
        w-full 
        h-[34px] 
        bg-[${colors.blue}] 
        hover:bg-[${colors.blueHover}] 
        text-white 
        font-bold 
        text-[12px] 
        leading-[100%] 
        font-sans 
        text-center 
        rounded-[4px] 
        px-[14px] 
        py-[8px] 
        flex items-center justify-center
        focus:outline-none 
        focus:shadow-outline
        ${className}
      `}
    >
      {text}
    </Link>
  );
}
