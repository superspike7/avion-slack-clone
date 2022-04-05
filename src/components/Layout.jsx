import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="h-screen w-screen bg-gray-50 grid grid-cols-[280px_1fr]">
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
