const MovieCardHome = ({ title, poster, genres, date }) => {
  return (
    <div className="flex-none w-[170px] h-[310px] rounded-md p-2 bg-surface mobile-l:w-[220px] mobile-l:h-[380px] mobile-l:p-3 tablet:w-[250px] tablet:h-[420px]">
      <div className="w-full h-full flex flex-col justify-between gap-2">
        <div className="bg-border w-full h-full rounded-md">
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs text-textSecondary">{date}</p>
          <h1 className="text-base font-semibold overflow-hidden whitespace-nowrap text-ellipsis w-full mobile-l:text-lg">
            {title}
          </h1>
          <p className="text-xs text-textSecondary overflow-hidden whitespace-nowrap text-ellipsis w-full mobile-l:text-sm">
            Action, Adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardHome;
