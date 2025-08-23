import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import CartHeader from "../components/CartHeader";
import CartSummary from "../components/CartSummary";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className="w-full flex justify-center bg-[#2F2E41] pt-20 px-4">
      <div className="w-full max-w-[1048px] h-auto bg-white rounded-lg shadow-md flex flex-col p-8 pb-12">
        {cartItems.length > 0 && <CartHeader />}

        <div className="flex flex-col flex-grow overflow-y-auto gap-6 pb-6">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  name={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}

              <div className="flex justify-items-start mb-6">
                <div className="w-full max-w-[95%] h-[1px] bg-gray-200"></div>
              </div>

              <CartSummary total={total} />
              <div></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
