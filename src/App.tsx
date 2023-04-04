import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generic from "./pages/Generic";
import Games from "./pages/Games";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="generic" element={<Generic />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
