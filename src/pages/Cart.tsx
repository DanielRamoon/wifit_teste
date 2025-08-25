import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";

import CartItem from "../components/cart/CartItem";
import EmptyCart from "../components/cart/EmptyCart";
import CartHeader from "../components/cart/CartHeader";
import CartSummary from "../components/cart/CartSummary";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-start justify-center bg-[#2F2E41] pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-[#2F2E41] pt-20">
      <div className="w-full max-w-screen-lg mx-auto h-auto bg-white rounded-lg shadow-md flex flex-col p-4 sm:p-6 -mt-16">
        {cartItems.length > 0 && <CartHeader />}

        <div className="flex flex-col">
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

              <CartSummary total={total} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
