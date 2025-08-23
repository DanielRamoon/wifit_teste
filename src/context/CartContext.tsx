import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types/movie";

interface CartItem extends Movie {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (movie: Movie) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "we-movies-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Falha ao carregar o carrinho do localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Falha ao salvar o carrinho no localStorage", error);
    }
  }, [cartItems]);

  const addToCart = (movie: Movie) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === movie.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...movie, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
