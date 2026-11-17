
import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";
import AdminFooter from "../components/admin/AdminFooter";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#f8f6f1]">

      {/* Admin Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 min-h-screen flex flex-col">

        {/* Admin Header */}
        <AdminHeader />

        {/* Admin Pages */}
        <main className="flex-1 p-5 md:p-8">
          <Outlet />
        </main>

        {/* Admin Footer */}
        <AdminFooter />

      </div>

    </div>
  );
};

export default AdminLayout;
