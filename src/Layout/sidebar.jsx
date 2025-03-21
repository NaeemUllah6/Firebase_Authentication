import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaFileInvoiceDollar, FaShoppingCart, FaUserFriends, FaUser, FaClipboardList, FaCog, FaBars, FaTimes } from "react-icons/fa";
const menuItems = [
  { name: "Dashboard", icon: <FaHome />, link: "/" },
  { name: "Analytics", icon: <FaChartBar />, link: "/analytics" },
  { name: "Billing", icon: <FaFileInvoiceDollar />, link: "/billing" },
  { name: "Invoice", icon: <FaFileInvoiceDollar />, link: "/invoice" },
  { name: "Order", icon: <FaShoppingCart />, link: "/order" },
  { name: "People", icon: <FaUserFriends />, link: "/people" },
  { name: "Profile", icon: <FaUser />, link: "/profile" },
  { name: "Reports", icon: <FaClipboardList />, link: "/reports" },
  { name: "Settings", icon: <FaCog />, link: "/settings" },
];

const Sidebar = () => {
  const [active, setActive] = useState("/dashboard");
  const [open, setOpen] = useState(false)
  const toggleSidebar = () => {
    setOpen(prevState => !prevState)
    console.log('icon')
  }
  const closeMenu = () => setOpen(false)
  return (
    <>
      <button className={`fixed  transition-all duration-400 block lg:hidden cursor-pointer  ${open ? '!text-white left-3 top-3 text-2xl' : 'text-black top-7 left-4 text-2xl'}`}
        style={{ zIndex: '99999' }}
        onClick={toggleSidebar}>
        {open ? <FaTimes/> :  <FaBars/>}
      </button>
      <div className={`bg-[#0D1321] z-30 h-screen fixed top-0 overflow-auto w-60 p-4 text-white transition-all duration-500 ${open ? 'translate-x-0' : '-translate-x-[250px] lg:translate-x-0'}`}>
        <h1 className="text-4xl font-bold mb-6 hidden lg:block">Jimmy<span className="text-yellow-500">Choo</span></h1>
        <div className="mt-10 lg:mt-0">
          <ul>
            {menuItems.map((item) => (
              <li onClick={closeMenu} key={item.name} className="mb-2">
                <Link
                  to={item.link}
                  onClick={() => setActive(item.link)}
                  className={`flex items-center p-3 rounded-lg text-xl transition-all duration-300 ${location.pathname === item.link ? "bg-red-600" : "hover:bg-gray-700"
                    }`}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;