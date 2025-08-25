import imgEmptyState from "../assets/Frame 2115.png";
import { Link } from "react-router-dom";
import { UseCart } from "../context/CartContext";

export default function PurchaseConfirmed() {
  const { clearCart } = UseCart();

  const handleGoBack = () => {
    clearCart();
  };

  return (
    <div className="w-full bg-[#2F2E41] pt-20 px-4 flex justify-center">
      <div className="w-full max-w-screen-lg mx-4 sm:mx-4 bg-white rounded-lg shadow-md flex flex-col p-6">
        <div className="flex flex-col items-center">
          <p className="text-[20px] sm:text-[22px] font-bold text-[#2F2E41] text-center max-w-[250px] sm:max-w-full mb-6">
            Compra realizada com sucesso!
          </p>

          <img
            src={imgEmptyState}
            alt="Empty State"
            className="w-[178px] h-[264px] object-contain mb-6"
          />

          <Link
            to="/"
            onClick={handleGoBack}
            className="w-[173px] h-[40px] rounded-[4px] flex items-center justify-center bg-[#009EDD] text-white font-bold text-[12px] p-2 hover:bg-[#0080b3] transition-colors"
          >
            VOLTAR
          </Link>
        </div>
      </div>
    </div>
  );
}
