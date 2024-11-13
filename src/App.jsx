import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-background text-textPrimary flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 tablet:px-12 laptop:px-16 laptop-l:px-24">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
