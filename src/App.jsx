import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-poppins bg-background text-textPrimary h-screen">
      <Navbar />

      <main className="pt-32 px-6 tablet:px-12 laptop:px-16 laptop-l:px-24"></main>
    </div>
  );
}

export default App;
