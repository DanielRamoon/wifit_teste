import { api } from "./client";
import type { Movie } from "../types/movie";

export async function fetchMovies(): Promise<Movie[]> {
  const response = await api.get<{ products: Movie[] }>("/movies");
  return response.data.products;
}
