import { useState } from "react";
import { NavLink } from "react-router-dom";
import DP from "../assets/DP.jpg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-gray-950/50 text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-blue-900 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            <div className="flex items-center">
              <NavLink to ="/">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                My Tech Academy
              </h1>
              </NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/courses" className={navLinkClass}>
                Courses
              </NavLink>

              <NavLink to="/mentor" className={navLinkClass}>
                Mentor
              </NavLink>

              <NavLink to="/signin" className={navLinkClass}>
                Sign In
              </NavLink>

              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">


            <NavLink to="/profile">
              <img src={DP} alt="" className="profile-icon w-9 h-9 rounded-full" />
            </NavLink>

            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-blue-950 border-t border-white/10">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/courses"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </NavLink>


              <NavLink
                to="/mentor"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Mentor
              </NavLink>


              <NavLink
                to="/signin"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </NavLink>

              <NavLink
                to="/login"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <img
                  src={DP}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="text-white text-sm font-medium">
                    User Profile
                  </p>
                  <p className="text-gray-400 text-xs">
                    user@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;