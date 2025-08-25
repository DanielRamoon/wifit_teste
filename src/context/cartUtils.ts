import type { Movie } from "../types/movie";
import type { CartItem } from "../types/cart";

export function addToCartLogic(
  prevItems: CartItem[],
  movie: Movie
): CartItem[] {
  const existingItem = prevItems.find((item) => item.id === movie.id);
  if (existingItem) {
    return prevItems.map((item) =>
      item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...prevItems, { ...movie, quantity: 1 }];
}

export function increaseQuantityLogic(
  prevItems: CartItem[],
  id: number
): CartItem[] {
  return prevItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
}

export function decreaseQuantityLogic(
  prevItems: CartItem[],
  id: number
): CartItem[] {
  return prevItems
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
}

export function removeFromCartLogic(
  prevItems: CartItem[],
  id: number
): CartItem[] {
  return prevItems.filter((item) => item.id !== id);
}
