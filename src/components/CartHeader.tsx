export default function CartHeader() {
  return (
    <div className="hidden sm:flex justify-evenly items-center h-[50px] ml-10">
      <span className="w-2/5 text-left">PRODUTO</span>
      <span className="w-1/5 text-left">QTD</span>
      <span className="w-1/5 text-left">SUBTOTAL</span>
      <span className="w-[40px]"></span>
    </div>
  );
}
