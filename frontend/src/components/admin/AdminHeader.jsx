
import { useLocation } from "react-router-dom";

const AdminHeader = () => {
  const location = useLocation();

  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/bookings": "Bookings Management",
    "/admin/customers": "Customers",
    "/admin/payments": "Payments",
    "/admin/halls": "Manage Halls",
    "/admin/reports": "Reports & Analytics",
    "/admin/contacts": "Contact Messages",
  };

  const currentPage = pageTitles[location.pathname] || "Admin Panel";

  return (
    <header className="h-[85px] bg-white border-b border-[#e8e0d2] px-6 md:px-10 flex items-center justify-between sticky top-0 z-30">

      {/* Page Information */}
      <div className="pl-12 lg:pl-0">
        <p className="text-[10px] uppercase tracking-[2px] text-[#a18b65]">
          AJWA MANAGEMENT SYSTEM
        </p>

        <h1 className="text-lg md:text-xl font-semibold text-[#29241c] mt-1">
          {currentPage}
        </h1>
      </div>

      {/* Admin Profile */}
      <div className="flex items-center gap-3">

        <div className="hidden sm:block text-right">
          <p className="text-xs font-semibold text-[#29241c]">
            Administrator
          </p>

          <p className="text-[10px] text-[#a18b65] mt-1">
            System Manager
          </p>
        </div>

        <div className="w-11 h-11 rounded-full bg-[#17140f] border-2 border-[#d5b36a] flex items-center justify-center">
          <span className="font-serif text-lg text-[#d5b36a]">
            A
          </span>
        </div>

      </div>

    </header>
  );
};

export default AdminHeader;
