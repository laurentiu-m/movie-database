import MovieBox from "../components/MovieBox";
import "../App.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 py-12">
      <div className="flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Explore the World of Cinema</h1>
          <p className="text-sm text-textSecondary">
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

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Popular</h1>

        <div className="flex overflow-y-auto gap-4 pb-2">
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">New Arrival</h1>

        <div className="flex overflow-y-auto gap-4 pb-2">
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-surface rounded-md py-6 px-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">
            Join Now to Personalize Your Movie Experience!
          </h1>
          <p className="text-sm text-textSecondary">
            Create an account to unlock your watchlist, save favorites, and rank
            top picks for personalized recommendations!
          </p>
        </div>

        <button className="bg-primary rounded-md p-2 font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Home;
