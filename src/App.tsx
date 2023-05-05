import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Numbers from "./pages/games/Numbers";
import Letters from "./pages/games/Letters";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Retentivity from "./pages/games/Retentivity";
import MainLayout from "./components/layouts/MainLayout";
import GameLayout from "./components/layouts/GameLayout";
import AuthProvider from "./components/context/AuthProvider";
import AuthLayoutProtected from "./components/layouts/AuthLayoutProtected";

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<GameLayout />}>
          <Route index element={<Games />} />
          <Route element={<AuthLayoutProtected />}>
            <Route path="numbers" element={<Numbers />} />
            <Route path="letters" element={<Letters />} />
            <Route path="retentivity" element={<Retentivity />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </AuthProvider>
);

export default App;
