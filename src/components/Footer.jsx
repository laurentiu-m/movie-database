import logo from "../assets/icons/logo.svg";

const Footer = () => {
  const links = ["Home", "Movies", "Watchlist"];
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-4 py-8 px-6 border-t-2 border-t-primary tablet:px-12 tablet:flex-row tablet:justify-between laptop:px-16 laptop-l:px-24">
      <div className="flex items-center gap-2 cursor-default">
        <img src={logo} alt="logo" className="w-6 h-6 tablet:w-8 tablet:h-8" />
        <h1 className="font-semibold mt-[5px] tablet:text-lg">MovieDB</h1>
      </div>

      <div className="flex items-center justify-center gap-8 text-sm uppercase font-semibold tablet:text-base">
        {links.map((link) => (
          <p
            className="cursor-pointer hover:text-primary transition-[color]"
            key={link}
          >
            {link}
          </p>
        ))}
      </div>

      <div className="text-center font-semibold text-textSecondary text-sm">
        <p>&copy; {currentYear} MovieDB</p>
      </div>
    </div>
  );
};

export default Footer;
