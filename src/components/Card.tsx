import BuyButton from "../components/Button";

function Card() {
  const cards = Array.from({ length: 6 }, (_, i) => ({
    name: `Filme ${i + 1}`,
    price: (10 + i * 5).toFixed(2),
    image:
      "https://midias.imagemfilmes.com.br/capas/9030fd55-c808-4765-ba1a-30d8970059c5_m.jpg?2025-02-11T18:18:23.649762",
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#2F2E41] text-white pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full justify-items-center mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center w-full max-w-[328px] h-[324px] space-y-4"
          >
            <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.name}
                className="w-[147px] h-[188px] object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col items-center space-y-3 relative top-2">
              <h2 className="font-sans text-[12px] font-bold text-center text-[#333333]">
                {card.name}
              </h2>
              <span className="font-sans text-[16px] font-bold text-center text-[#2F2E41]">
                R$ {card.price}
              </span>
            </div>

            <div className="relative top-4">
              <BuyButton onClick={() => console.log(`Comprou ${card.name}`)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
