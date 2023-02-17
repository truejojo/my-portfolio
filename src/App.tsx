import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Nav />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
