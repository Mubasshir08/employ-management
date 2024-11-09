import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ showSidebar, setShowSidebar }) {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin'; // Check if on Admin page

  return (
    <>
      <div
        className={`top-0 left-0 w-[50vw] bg-black p-10 pr-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="text-4xl text-white absolute top-6 right-6 cursor-pointer z-50 transition-transform duration-300"
          onClick={() => setShowSidebar(false)}
        >
          x
        </button>
        <ul className="mt-10 ml-6 text-center">
          <li className="py-3">
            <Link to="/" onClick={() => setShowSidebar(false)}>
              Home
            </Link>
          </li>
          <li className="-ml-2.5">
            <Link to={isAdminPage ? "/employees" : "/dashboard"} onClick={() => setShowSidebar(false)}>
              {isAdminPage ? "Employees" : "Dashboard"}
            </Link>
          </li>
        </ul>
      </div>

      {!showSidebar && (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-5 top-3"
          fill="#fff"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="80" height="10"></rect>
          <rect y="30" width="80" height="10"></rect>
          <rect y="60" width="80" height="10"></rect>
        </svg>
      )}
    </>
  );
}

export default Sidebar;
