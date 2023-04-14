import { Outlet } from "react-router-dom";

const AuthLayoutProtected = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayoutProtected;
