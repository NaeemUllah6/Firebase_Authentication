import { useState, useEffect, useLayoutEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Sidebar from "./sidebar";
import { ProfileContext } from "../UserAuthentication/UserContext/User-context.jsx";
const Header = () => {
  const {profile} = useContext(ProfileContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("Dashboard");
  const [deleteToken, setdeleteToken] = useState('')
  const [open, setOpen] = useState(false)
  const dropdownOpen = () => {
    setOpen(!open)
  }
  const Logout = () => {
    Cookies.remove('token')
    setdeleteToken('You have logged out, ')
    navigate('/login')
  }
  const profileInfo = useRef(null)
useEffect(()=>{
  const handleoutsideClick = (e)=>{
    if(profileInfo.current && !profileInfo.current.contains(e.target)){
      setOpen(false)
    }
  }
  document.addEventListener('mousedown', handleoutsideClick);
  return ()=>document.removeEventListener('mousedown', handleoutsideClick)
},[])

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
          <button onClick={dropdownOpen} className="" type="button">
            <img className="rounded-full h-10 w-10" src={profile} alt="profile" />
          </button>
          <div id="dropdown" ref={profileInfo} className={`z-10  bg-white divide-y divide-gray-100 absolute top-20 right-1 rounded-lg shadow-sm dark:bg-gray-700 ${open ? 'block' : 'hidden'}`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li onClick={()=>setOpen(false)}>
                <Link to='/' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li onClick={()=>setOpen(false)}>
                <button  to='/login' onClick={Logout} href="#" className="block px-4 py-2 text-left hover:bg-gray-100 w-full dark:hover:bg-gray-600 dark:hover:text-white">Logout</button>
              </li>

            </ul>
        </div>
      </div>
      {deleteToken && <div>deleteToken</div>}
    </div>
  );
};
export default Header;
