import type { Movie } from "./movie";

export interface CartItem extends Movie {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (movie: Movie) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
