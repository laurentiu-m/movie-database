const Login = () => {
  return (
    <div className="flex flex-col gap-10 py-12 max-w-[450px] m-auto">
      <h1 className="text-2xl font-semibold mobile-l:text-3xl laptop:text-4xl">
        Login
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-md border border-border bg-surface"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md border border-border bg-surface"
        />
        <input
          type="submit"
          value="Login"
          className="bg-primary p-3 rounded-md font-semibold text-lg cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
