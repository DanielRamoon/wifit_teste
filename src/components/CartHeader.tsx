export default function CartHeader() {
  return (
    <div className="hidden sm:flex items-center h-[50px]">
      <span className="w-2/5 text-left ml-4">PRODUTO</span>

      <span className="w-1/5 text-left mr-4">QTD</span>

      <span className="w-1/5 text-left mr-4">SUBTOTAL</span>

      <span className="w-1/5 text-right"></span>
    </div>
  );
}
