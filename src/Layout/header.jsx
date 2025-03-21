import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Sidebar from "./sidebar";
const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState("Dashboard");
  const [deleteToken, setdeleteToken] = useState('')
  const Logout = () => {
    Cookies.remove('token')
    setdeleteToken('You have logged out, ')
  }


  useEffect(() => {
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
    };

    setTitle(routeTitles[location.pathname] || "Dashboard");
  }, [location.pathname]);

  return (
    <div className="w-full bg-white shadow py-5 me-0 fixed top-0 z-10">
      <div className="px-5 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <p className="font-bold text-3xl text-black ps-8 lg:ps-0">{title}</p>
      </div>
        <Link to='/login' className="text-red-600 border rounded px-4 py-2 hover:bg-red-600 hover:text-white duration-300" onClick={Logout}>Logout</Link>
      </div>
      {deleteToken && <div>deleteToken</div>}
    </div>
  );
};
export default Header;
