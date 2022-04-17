import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getStoredUser } from "../storage/user";
import Nav from "./Nav";

export default function Layout() {
  const user = getStoredUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("auth/login");
    }
  }, [user]);

  return (
    <div className="h-screen w-screen bg-gray-50 grid grid-cols-[280px_1fr]">
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
