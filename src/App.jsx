import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-background text-textPrimary flex flex-col min-h-screen">
      <Router>
        <Navbar />

        <main className="flex-grow px-6 tablet:px-12 laptop:px-16 laptop-l:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
