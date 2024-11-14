import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  return (
    <div className="flex flex-col gap-10 py-12">
      <h1 className="text-2xl font-semibold mobile-l:text-3xl laptop:text-4xl">
        Watchlist
      </h1>

      <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-6 laptop:grid-cols-4 laptop-l:grid-cols-5 desktop:grid-cols-6 desktop-l:grid-cols-7">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Watchlist;
