import Card from "../components/Card";
import { useMovies } from "../hooks/useMovies";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-[#2F2E41] pt-20">
        <div className="animate-spin rounded-full w-[55px] h-[55px] border-4 border-t-white border-b-white border-l-transparent border-r-transparent"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  if (movies.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-[700px] flex flex-col items-center justify-start bg-[#2F2E41] text-white pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full justify-items-center mt-6">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
