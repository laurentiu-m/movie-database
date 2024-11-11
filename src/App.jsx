import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-background text-textPrimary flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 tablet:px-12 laptop:px-16 laptop-l:px-24">
        <h1>MovieDb</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;
