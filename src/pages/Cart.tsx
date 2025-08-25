import { useEffect, useState } from "react";
import { UseCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import CartHeader from "../components/CartHeader";
import CartSummary from "../components/CartSummary";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    UseCart();
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
      <div className="w-full max-w-screen-lg mx-4 sm:mx-4 h-auto bg-white rounded-lg shadow-md flex flex-col p-2 sm:px-4 -mt-16">
        {cartItems.length > 0 && <CartHeader />}

        <div className="flex flex-col w-auto mr-4">
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
              <div className="flex justify-center mt-4 mb-4">
                <div className="w-full mr-3 sm:w-[96%] ml-3 h-[1px] bg-gray-300"></div>
              </div>

              <CartSummary total={total} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
