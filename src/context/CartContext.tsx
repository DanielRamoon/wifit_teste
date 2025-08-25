/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";
import type { ReactNode } from "react";
import type { CartContextType, CartItem } from "../types/cart";
import { usePersistedState } from "../hooks/usePersistedState";
import {
  addToCartLogic,
  increaseQuantityLogic,
  decreaseQuantityLogic,
  removeFromCartLogic,
} from "./cartUtils";
import type { Movie } from "../types/movie";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CART_STORAGE_KEY = "we-movies-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = usePersistedState<CartItem[]>(
    CART_STORAGE_KEY,
    []
  );

  const clearCart = () => setCartItems([]);

  const addToCart = (movie: Movie) =>
    setCartItems((prev) => addToCartLogic(prev, movie));
  const increaseQuantity = (id: number) =>
    setCartItems((prev) => increaseQuantityLogic(prev, id));
  const decreaseQuantity = (id: number) =>
    setCartItems((prev) => decreaseQuantityLogic(prev, id));
  const removeFromCart = (id: number) =>
    setCartItems((prev) => removeFromCartLogic(prev, id));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
