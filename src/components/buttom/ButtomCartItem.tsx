import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      navigate(to || "/");
    }, 2000); // 2s
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`
        relative 
        overflow-hidden 
        w-full 
        h-[34px] 
        bg-[#009EDD] 
        text-white 
        font-bold 
        text-[12px] 
        leading-[100%] 
        font-sans 
        rounded-[4px] 
        px-[14px] 
        py-[8px] 
        flex items-center justify-center
        focus:outline-none 
        focus:shadow-outline
        transition-colors 
        duration-300
        ${loading ? "cursor-wait" : "hover:bg-[#0080b3]"} 
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center gap-2 text-white">
          <svg
            className="animate-spin h-4 w-4 text-wihite"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span>Finalizando...</span>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
