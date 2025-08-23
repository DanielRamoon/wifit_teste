import imgEmptyState from "../assets/Group.png";

export default function EmptyState() {
  return (
    <div className="w-full flex justify-center min-h-screen bg-[#2F2E41] pt-20 px-4">
      <div className="w-full max-w-[90%] sm:max-w-[1000px] h-[500px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center">
          <p className="text-[20px] sm:text-[20px] font-bold text-[#2F2E41] text-center max-w-[250px] sm:max-w-full mb-6">
            Parece que não há nada por aqui :(
          </p>

          <div className="mb-4">
            <img
              src={imgEmptyState}
              alt="Empty State"
              className="w-[178.63px] h-[264px] object-contain"
            />
          </div>

          <div className="mb-6 w-[178.63px] sm:w-[447px] h-[1.36px] bg-[#3F3D56]"></div>

          <button
            onClick={() => window.location.reload()}
            className="w-[173px] h-[40px] rounded-[4px] flex items-center justify-center bg-[#009EDD] text-white font-bold text-[12px] p-2 relative top-5"
          >
            Recarregar página
          </button>
        </div>
      </div>
    </div>
  );
}
