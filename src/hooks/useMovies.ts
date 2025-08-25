import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";

import { fetchMovies } from "../api/movies";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar filmes.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return { movies, loading, error };
}
