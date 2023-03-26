import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Header from "./components/sites/Header";
import Footer from "./components/sites/Footer";

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
