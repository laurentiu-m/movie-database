import MovieCardHome from "../components/MovieCardHome";
import { fetchPopularMovies } from "../api/tmdb";
import "../App.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setPopularMovies(data.results);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };

    getPopularMovies();
  }, []);

  console.log(popularMovies);

  return (
    <div className="flex flex-col gap-10 py-12">
      <div className="flex flex-col gap-8 items-center text-center mobile-l:max-w-[550px] mobile-l:m-auto laptop:max-w-[740px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold mobile-l:text-4xl tablet:text-5xl laptop:text-6xl">
            Explore the World of Cinema
          </h1>
          <p className="text-sm text-textSecondary mobile-l:text-base laptop:text-lg">
            Search for movies, add to your watchlist, and get ready for your
            next movie night.
          </p>
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Search Movies or TV Shows"
            className="w-full p-3 rounded-md border border-border bg-surface"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 laptop:gap-5">
        <h1 className="text-2xl font-semibold mobile-l:text-3xl laptop:text-4xl">
          Popular
        </h1>

        <div className="flex overflow-y-auto gap-4 pb-2 mobile-scrollbar laptop:pb-3">
          {popularMovies.map((movie) => (
            <MovieCardHome
              key={movie.id}
              title={movie.original_title}
              poster={movie.poster_path}
              genres={movie.genre_ids}
              date={movie.release_date}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 laptop:gap-5">
        <h1 className="text-2xl font-semibold mobile-l:text-3xl laptop:text-4xl">
          New Arrival
        </h1>

        <div className="flex overflow-y-auto gap-4 pb-2 mobile-scrollbar laptop:pb-3">
          <MovieCardHome />
          <MovieCardHome />
          <MovieCardHome />
          <MovieCardHome />
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-surface rounded-md py-6 text-center laptop:py-12">
        <div className="flex flex-col gap-1 max-w-[500px] m-auto laptop:max-w-[650px] laptop:gap-2">
          <h1 className="text-xl font-semibold mobile-l:text-2xl tablet:text-3xl laptop:text-5xl">
            Join Now to Personalize Your Movie Experience!
          </h1>
          <p className="text-sm text-textSecondary tablet:text-base laptop:text-lg">
            Create an account to unlock your watchlist, save favorites, and rank
            top picks for personalized recommendations!
          </p>
        </div>

        <button className="bg-primary rounded-md p-2 font-semibold w-[150px] m-auto">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Home;
