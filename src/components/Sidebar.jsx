import { MdFastfood } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  /* ACTIVE MENU */

  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 space-x-3 transition-all duration-300
    ${
      isActive
        ? "bg-green-200 text-hijau font-bold"
        : "text-gray-600 hover:bg-green-100 hover:text-hijau"
    }`;

  /* LOGOUT */

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-72 flex-col bg-white p-8 shadow-xl"
    >
      {/* LOGO */}

      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="text-5xl font-extrabold text-gray-900">
          Foodies
          <span className="text-green-500">.</span>
        </span>

        <span id="logo-subtitle" className="text-gray-400 font-medium mt-1">
          Restaurant Admin Dashboard
        </span>
      </div>

      {/* MENU */}

      <div id="sidebar-menu" className="mt-10">
        <ul className="space-y-4">
          {/* DASHBOARD */}

          <li>
            <NavLink to="/dashboard" className={menuClass}>
              <MdSpaceDashboard className="text-2xl" />

              <span>Dashboard</span>
            </NavLink>
          </li>

          {/* ORDERS */}

          <li>
            <NavLink to="/orders" className={menuClass}>
              <AiFillShopping className="text-2xl" />

              <span>Orders</span>
            </NavLink>
          </li>

          {/* CUSTOMERS */}

          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaUser className="text-2xl" />

              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>
        </ul>
      </div>

      {/* FOOTER */}

      <div id="sidebar-footer" className="mt-auto">
        {/* CARD */}

        <div className="bg-green-500 rounded-2xl p-5 shadow-lg mb-8">
          <p className="text-white text-sm leading-relaxed">
            Kelola menu restoran dan pantau pesanan pelanggan dengan mudah.
          </p>

          <button className="mt-5 w-full bg-white text-green-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
            Add Menu
          </button>
        </div>

        {/* USER */}

        <div className="flex items-center gap-4 mb-5">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="https://avatar.iran.liara.run/public/28"
            alt="avatar"
          />

          <div>
            <h3 className="font-bold text-gray-700">Admin Foodies</h3>

            <p className="text-sm text-gray-400">Restaurant Manager</p>
          </div>
        </div>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
        >
          <FiLogOut />
          Logout
        </button>

        {/* COPYRIGHT */}

        <div className="mt-8 text-center">
          <span className="font-bold text-gray-400">Foodies Dashboard</span>

          <p className="text-sm text-gray-400 mt-1">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
