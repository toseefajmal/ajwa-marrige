
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Payments", path: "/admin/payments" },
    { name: "Manage Halls", path: "/admin/halls" },

    // New Admin Modules
    { name: "Staff Management", path: "/admin/staff" },
    { name: "Food & Menu", path: "/admin/menu" },
    { name: "Services Management", path: "/admin/services" },
    { name: "Expenses Management", path: "/admin/expenses" },
    { name: "Customer Feedback", path: "/admin/feedback" },
    { name: "Notifications", path: "/admin/notifications" },
    { name: "Booking Calendar", path: "/admin/calendar" },
    { name: "Invoice Generation", path: "/admin/invoices" },
    { name: "Discount Management", path: "/admin/discounts" },

    { name: "Reports & Analytics", path: "/admin/reports" },
    { name: "Contacts", path: "/admin/contacts" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed top-5 left-4 z-[60] bg-[#17140f] text-[#d5b36a] w-10 h-10"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-[260px] h-screen
        bg-[#17140f] text-white flex flex-col
        transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Brand */}
        <div className="px-7 h-[105px] shrink-0 flex flex-col justify-center border-b border-white/10">
          <Link to="/admin" onClick={() => setMenuOpen(false)}>
            <h1 className="font-serif text-3xl tracking-[5px] text-[#d5b36a]">
              AJWA
            </h1>

            <p className="text-[9px] tracking-[4px] text-[#b9a783] mt-2">
              ADMIN PANEL
            </p>
          </Link>
        </div>

        {/* Menu Heading */}
        <div className="px-7 pt-9 pb-4 shrink-0">
          <p className="text-[10px] uppercase tracking-[2px] text-[#998b70]">
            Management
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 min-h-0 px-4 space-y-2 overflow-y-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 text-[12px] tracking-[1px]
                uppercase font-medium border-l-[3px] transition-all duration-300
                ${
                  isActive
                    ? "bg-[#b99753]/15 text-[#d5b36a] border-[#c5a15b]"
                    : "text-[#c3bcaf] border-transparent hover:bg-white/5 hover:text-[#d5b36a]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Branding */}
        <div className="px-7 py-6 shrink-0 border-t border-white/10">
          <p className="text-[11px] tracking-wider text-[#d5b36a]">
            AJWA MARRIAGE HALL
          </p>

          <p className="text-[10px] text-[#998b70] mt-2">
            Event Management System
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
