
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Halls", path: "/hall" },
    { name: "Gallery", path: "/gallery" },
    { name: "Packages", path: "/packages" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Contact", path: "/contact" },
  ];

  const featureLinks = [
    { name: "Wedding Budget Calculator", path: "/wedding-budget" },
    { name: "Decoration Themes", path: "/decoration-themes" },
    { name: "Digital Invitation Maker", path: "/invitation-maker" },
    { name: "Guest RSVP Management", path: "/guest-rsvp" },
    { name: "Seating Arrangement", path: "/seating-arrangement" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setLoginOpen(false);
    setFeaturesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#17140f] text-white shadow-lg">
      <div className="bg-[#b99753] py-2 text-center text-xs tracking-widest text-[#17140f]">
        MAKE YOUR SPECIAL DAY UNFORGETTABLE
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b99753] text-2xl text-[#d5b36a]">
            A
          </div>

          <div>
            <h1 className="text-xl font-serif tracking-widest text-[#d5b36a]">
              AJWA
            </h1>
            <p className="text-[10px] tracking-[3px] text-gray-300">
              MARRIAGE HALL
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-[#d5b36a]"
                    : "text-gray-300 hover:text-[#d5b36a]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* More Features Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-gray-300 transition hover:text-[#d5b36a]">
              More Features
              <span>⌄</span>
            </button>

            <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-2 rounded-xl border border-[#b99753]/30 bg-[#211d16] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {featureLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-[#b99753] text-[#17140f]"
                        : "text-gray-300 hover:bg-[#b99753] hover:text-[#17140f]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex items-center gap-2 rounded-full border border-[#b99753] px-5 py-2.5 text-sm text-[#d5b36a] hover:bg-[#b99753] hover:text-[#17140f]"
            >
              Login
              <span>{loginOpen ? "⌃" : "⌄"}</span>
            </button>

            {loginOpen && (
              <div className="absolute right-0 top-14 w-52 rounded-xl border border-[#b99753]/30 bg-[#211d16] p-2 shadow-xl">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-sm hover:bg-[#b99753] hover:text-black"
                >
                  Customer Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-sm hover:bg-[#b99753] hover:text-black"
                >
                  Customer Register
                </Link>

                <div className="my-1 border-t border-white/10" />

                <Link
                  to="/admin-login"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-sm text-[#d5b36a] hover:bg-[#b99753] hover:text-black"
                >
                  Admin Login
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/booking"
            className="rounded-full bg-[#b99753] px-6 py-3 text-sm font-semibold text-[#17140f] transition hover:bg-[#d5b36a]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#d5b36a] lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#17140f] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive ? "text-[#d5b36a]" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Features */}
          <div className="mt-5 border-t border-white/10 pt-4">
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex w-full items-center justify-between text-left text-[#d5b36a]"
            >
              More Features
              <span>{featuresOpen ? "−" : "+"}</span>
            </button>

            {featuresOpen && (
              <div className="mt-4 flex flex-col gap-4 pl-3">
                {featureLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-sm ${
                        isActive
                          ? "text-[#d5b36a]"
                          : "text-gray-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Login */}
          <div className="mt-5 border-t border-white/10 pt-4">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex w-full items-center justify-between text-left text-[#d5b36a]"
            >
              Login Options
              <span>{loginOpen ? "−" : "+"}</span>
            </button>

            {loginOpen && (
              <div className="mt-3 flex flex-col gap-3 pl-3">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="text-sm text-gray-300"
                >
                  Customer Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="text-sm text-gray-300"
                >
                  Customer Register
                </Link>

                <Link
                  to="/admin-login"
                  onClick={closeMenu}
                  className="text-sm text-[#d5b36a]"
                >
                  Admin Login
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/booking"
            onClick={closeMenu}
            className="mt-5 block rounded-full bg-[#b99753] px-5 py-3 text-center text-sm font-semibold text-[#17140f]"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
