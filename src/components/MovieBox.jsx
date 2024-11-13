const MovieBox = () => {
  return (
    <div className="flex-none w-[170px] h-[310px] rounded-md p-2 bg-surface">
      <div className="w-full h-full flex flex-col justify-between gap-2">
        <div className="bg-border w-full h-full rounded-md"></div>

        <div className="flex flex-col gap-1">
          <p className="text-xs text-textSecondary">USA, 2024</p>
          <h1 className="text-base font-semibold overflow-hidden whitespace-nowrap text-ellipsis w-full">
            Movie Title
          </h1>
          <p className="text-xs text-textSecondary overflow-hidden whitespace-nowrap text-ellipsis w-full">
            Action, Adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
