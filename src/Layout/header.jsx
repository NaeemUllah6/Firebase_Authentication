import { useState, useEffect, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Sidebar from "./sidebar";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("Dashboard");
  const [deleteToken, setdeleteToken] = useState('')
  const Logout = () => {
    Cookies.remove('token')
    setdeleteToken('You have logged out, ')
    navigate('/login')
  }


  useLayoutEffect(() => {
    const routeTitles = {
      "/": "Dashboard",
      "/analytics": "Analytics",
      "/billing": "Billing",
      "/invoice": "Invoice",
      "/order": "Order",
      "/people": "People",
      "/profile": "Profile",
      "/reports": "Reports",
      "/settings": "Settings",
      "/support": "Support",
      "/user": "User",
      "/todo": "Todo's",
      "/crud": "Crud Operations",
    };

    setTitle(routeTitles[location.pathname] || "Dashboard");
  }, [location.pathname]);

  return (
    <div className="w-full lg:w-[calc(100%-240px)] bg-white shadow py-6 end-0 fixed top-0 z-10">
      <div className="px-5 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="font-bold text-xl md:text-3xl text-black ps-8 lg:ps-0">{title}</p>
        </div>
        <button to='/login' className="text-red-600 border rounded px-4 py-1 md:py-2 hover:bg-red-600 hover:text-white transition-all duration-500" onClick={Logout}>Logout</button>
      </div>
      {deleteToken && <div>deleteToken</div>}
    </div>
  );
};
export default Header;
