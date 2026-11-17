
import { Routes, Route } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "../pages/auth/ProtectedRoute";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Customer Pages
import Home from "../pages/customer/Home";
import About from "../pages/customer/About";
import Hall from "../pages/customer/Hall";
import Gallery from "../pages/customer/Gallery";
import Packages from "../pages/customer/Packages";
import Booking from "../pages/customer/Booking";
import Contact from "../pages/customer/Contact";
import MyBookings from "../pages/customer/MyBookings";

// New Customer Features
import WeddingBudgetCalculator from "../pages/customer/WeddingBudgetCalculator";
import DecorationThemeSelection from "../pages/customer/DecorationThemeSelection";
import DigitalInvitationMaker from "../pages/customer/DigitalInvitationMaker";
import GuestRSVP from "../pages/customer/GuestRSVP";
import SeatingArrangementPreview from "../pages/customer/SeatingArrangementPreview";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Bookings from "../pages/admin/Bookings";
import Customers from "../pages/admin/Customers";
import Payments from "../pages/admin/Payments";
import ManageHalls from "../pages/admin/ManageHalls";
import Reports from "../pages/admin/Reports";

import Staff from "../pages/admin/Staff";
import Menu from "../pages/admin/Menu";
import Services from "../pages/admin/Services";
import Expenses from "../pages/admin/Expenses";
import Feedback from "../pages/admin/Feedback";
import Notifications from "../pages/admin/Notifications";
import Calendar from "../pages/admin/Calendar";
import Invoices from "../pages/admin/Invoices";
import Discount from "../pages/admin/Discount";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-login" element={<Login />} />

      {/* Customer Routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hall" element={<Hall />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="packages" element={<Packages />} />
        <Route path="contact" element={<Contact />} />

        <Route
          path="booking"
          element={
            <ProtectedRoute role="customer">
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route path="my-bookings" element={<MyBookings />} />

        {/* New Customer Features */}
        <Route
          path="wedding-budget"
          element={<WeddingBudgetCalculator />}
        />

        <Route
          path="decoration-themes"
          element={<DecorationThemeSelection />}
        />

        <Route
          path="invitation-maker"
          element={<DigitalInvitationMaker />}
        />

        <Route
          path="guest-rsvp"
          element={<GuestRSVP />}
        />

        <Route
          path="seating-arrangement"
          element={<SeatingArrangementPreview />}
        />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="customers" element={<Customers />} />
        <Route path="payments" element={<Payments />} />
        <Route path="halls" element={<ManageHalls />} />
        <Route path="reports" element={<Reports />} />

        <Route path="staff" element={<Staff />} />
        <Route path="menu" element={<Menu />} />
        <Route path="services" element={<Services />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="discount" element={<Discount />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
