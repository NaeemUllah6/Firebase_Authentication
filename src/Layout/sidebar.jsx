import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome, FaChartBar, FaFileInvoiceDollar, FaShoppingCart, FaUserFriends, FaUser, FaClipboardList, FaCog, FaBars, FaTimes,
  FaChartPie,
  FaMoneyCheckAlt,
  FaFileInvoice,
  FaUsers,
  FaUserCircle,
  FaChartLine,
  FaClipboardCheck,
  FaTools,
  FaSitemap
} from "react-icons/fa";
const menuItems = [
  { name: "Dashboard", icon: <FaHome />, link: "/" },
  { name: "Analytics", icon: <FaChartPie />, link: "/analytics" },
  { name: "Billing", icon: <FaMoneyCheckAlt />, link: "/billing" },
  { name: "Invoice", icon: <FaFileInvoice />, link: "/invoice" },
  { name: "Order", icon: <FaShoppingCart />, link: "/order" },
  { name: "People", icon: <FaUsers />, link: "/people" },
  { name: "Profile", icon: <FaUserCircle />, link: "/profile" },
  { name: "Reports", icon: <FaChartLine />, link: "/reports" },
  { name: "Settings", icon: <FaCog />, link: "/settings" },
  // { name: "Todo", icon: <FaClipboardCheck />, link: "/todo" },
  { name: "Operation", icon: <FaTools />, link: "/crud" },
  { name: "BreadCrumb", icon: <FaSitemap />, link: "/breadcrumb" },
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
      <button className={`fixed  transition-all duration-400 block lg:hidden cursor-pointer  ${open ? '!text-white left-3 top-3 text-2xl' : 'text-black top-[30px] left-4 text-2xl'}`}
        style={{ zIndex: '99999' }}
        onClick={toggleSidebar}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`bg-[#0D1321] z-30 h-screen fixed top-0 w-60 text-white transition-all duration-500 ${open ? 'translate-x-0' : '-translate-x-[250px] lg:translate-x-0'}`}>
        <Link to='/' className="text-4xl font-bold mb-6 hidden lg:block p-4">Jimmy<span className="text-yellow-500">Choo</span></Link>
        <div className="mt-10 pt-2 mb-20 b lg:mt-0 overflow-auto h-[calc(100vh-110px)] p-4">
          <ul>
            {menuItems.map((item) => (
              <li onClick={closeMenu} key={item.name} className="mb-2">
                <Link
                  to={item.link}
                  onClick={() => setActive(item.link)}
                  className={`flex items-center p-2 rounded-lg text-lg transition-all duration-300 ${location.pathname === item.link ? "bg-red-600" : "hover:bg-gray-700"
                    }`}>
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