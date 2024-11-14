const MovieCard = () => {
  return (
    <div className="flex-none w-[full] h-[250px] rounded-lg bg-surface mobile-l:h-[300px] tablet:h-[320px] laptop:h-[350px] laptop-l:h-[400px]">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="bg-border w-full h-full rounded-t-lg"></div>

        <div className="flex flex-col p-3">
          <h1 className="text-base font-semibold overflow-hidden whitespace-nowrap text-ellipsis w-full mobile-l:text-lg">
            Movie Title
          </h1>
          <p className="text-xs text-textSecondary overflow-hidden whitespace-nowrap text-ellipsis w-full mobile-l:text-sm">
            Action, Adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
