interface ButtonCartItemProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function ButtonCartItem({
  text,
  onClick,
  className,
}: ButtonCartItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-[173px] 
        h-[34px] 
        bg-[#009EDD] 
        hover:bg-blue-600 
        text-white 
        font-bold 
        text-[12px] 
        leading-[100%] 
        font-sans 
        text-center 
        rounded-[4px] 
        px-[12px] 
        py-[8px] 
        opacity-100 
        focus:outline-none 
        focus:shadow-outline
        ${className}
      `}
    >
      {text}
    </button>
  );
}
