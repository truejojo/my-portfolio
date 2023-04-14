import { Outlet } from "react-router-dom";
import GameNav from "../main/GameNav";

const GameLayout = () => (
  <>
    <GameNav />
      <Outlet />
  </>
);

export default GameLayout;
