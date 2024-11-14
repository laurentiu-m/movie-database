import MovieCard from "../components/MovieCard";

const Movies = () => {
  return (
    <div className="flex flex-col gap-10 py-12">
      <div className="flex flex-col gap-4 max-w-[500px]">
        <h1 className="text-2xl font-semibold mobile-l:text-3xl laptop:text-4xl">
          Movies
        </h1>

        <input
          type="text"
          placeholder="Search Movies or TV Shows"
          className="w-full p-3 rounded-md border border-border bg-surface"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-6 laptop:grid-cols-4 laptop-l:grid-cols-5 desktop:grid-cols-6 desktop-l:grid-cols-7">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Movies;
