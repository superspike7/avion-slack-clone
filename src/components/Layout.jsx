import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Outlet, useNavigate } from "react-router-dom";
import { getStoredUser } from "../storage/user";
import Nav from "./Nav";

export default function Layout() {
  const user = getStoredUser();
  const navigate = useNavigate();
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    if (!user) {
      return navigate("auth/login");
    }
  }, [user]);

  const handleToggle = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="h-screen w-screen bg-gray-50 flex">
      <Nav showNav={showMobileNav} />
      <div className="flex-1 flex flex-col sm:block">
        <div className="h-12 w-full bg-primary sm:hidden flex justify-end">
          <button
            className="mr-4 text-2xl text-white"
            onClick={handleToggle}
          >
            {showMobileNav ? <CgClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
