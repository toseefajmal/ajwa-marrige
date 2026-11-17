
import {
  CalendarDays,
  Users,
  Wallet,
  Building2,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Eye,
  Crown,
  MessageSquare,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "248",
      change: "+12.5%",
      icon: CalendarDays,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Customers",
      value: "186",
      change: "+8.2%",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Total Revenue",
      value: "Rs. 8.5M",
      change: "+15.3%",
      icon: Wallet,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Available Halls",
      value: "03",
      change: "All Active",
      icon: Building2,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  const monthlyRevenue = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 65 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 75 },
    { month: "May", value: 60 },
    { month: "Jun", value: 85 },
    { month: "Jul", value: 70 },
    { month: "Aug", value: 90 },
    { month: "Sep", value: 65 },
    { month: "Oct", value: 95 },
    { month: "Nov", value: 80 },
    { month: "Dec", value: 100 },
  ];

  const bookings = [
    {
      id: "AJW-1001",
      customer: "Muhammad Ahmed",
      event: "Wedding",
      hall: "Royal Grand Hall",
      date: "18 Nov 2026",
      amount: "350,000",
      status: "Confirmed",
    },
    {
      id: "AJW-1002",
      customer: "Ali Hassan",
      event: "Mehndi",
      hall: "Crystal Banquet Hall",
      date: "20 Nov 2026",
      amount: "180,000",
      status: "Pending",
    },
    {
      id: "AJW-1003",
      customer: "Usman Tariq",
      event: "Reception",
      hall: "Luxury Marquee",
      date: "22 Nov 2026",
      amount: "450,000",
      status: "Confirmed",
    },
    {
      id: "AJW-1004",
      customer: "Hassan Raza",
      event: "Barat",
      hall: "Royal Grand Hall",
      date: "25 Nov 2026",
      amount: "300,000",
      status: "Cancelled",
    },
  ];

  const upcomingEvents = [
    {
      name: "Muhammad Ahmed",
      event: "Wedding Ceremony",
      hall: "Royal Grand Hall",
      date: "18 Nov 2026",
      guests: "500 Guests",
    },
    {
      name: "Ali Hassan",
      event: "Mehndi Night",
      hall: "Crystal Banquet Hall",
      date: "20 Nov 2026",
      guests: "300 Guests",
    },
    {
      name: "Usman Tariq",
      event: "Reception",
      hall: "Luxury Marquee",
      date: "22 Nov 2026",
      guests: "800 Guests",
    },
  ];

  const statusStyle = {
    Confirmed: "bg-green-50 text-green-700",
    Pending: "bg-yellow-50 text-yellow-700",
    Cancelled: "bg-red-50 text-red-600",
  };

  return (
    <div className="space-y-8">

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[#a27d3b] font-semibold tracking-wider uppercase">
            Admin Overview
          </p>
          <h1 className="text-3xl font-bold text-[#211b13] mt-2">
            Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Welcome back! Here is what's happening at Ajwa Marriage Hall.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white border border-[#eee7da] rounded-xl px-4 py-3">
          <CalendarDays className="text-[#b99753]" size={20} />
          <div>
            <p className="text-xs text-gray-400">Today</p>
            <p className="text-sm font-semibold">14 November 2026</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white border border-[#eee7da] rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                  <Icon size={23} />
                </div>

                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                  {item.change}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-5">{item.title}</p>

              <h2 className="text-2xl font-bold text-[#211b13] mt-2">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Revenue Chart and Booking Summary */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Revenue Chart */}
        <div className="xl:col-span-2 bg-white border border-[#eee7da] rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-[#211b13]">
                Revenue Overview
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Monthly revenue performance
              </p>
            </div>

            <span className="bg-[#f5f0e5] text-[#a27d3b] text-sm font-semibold px-4 py-2 rounded-lg">
              2026
            </span>
          </div>

          <div className="flex items-center gap-2 mt-7">
            <h3 className="text-3xl font-bold text-[#211b13]">Rs. 8.5M</h3>
            <span className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp size={14} /> 15.3%
            </span>
          </div>

          <div className="h-64 flex items-end justify-between gap-2 mt-8 border-b border-l border-[#eee7da] px-2">
            {monthlyRevenue.map((item) => (
              <div
                key={item.month}
                className="flex-1 h-full flex flex-col justify-end items-center group"
              >
                <div
                  title={`${item.month}: ${item.value}%`}
                  className="w-full max-w-9 bg-[#c6a363] hover:bg-[#17140f] rounded-t-md transition-all duration-300"
                  style={{ height: `${item.value}%` }}
                />
                <span className="absolute opacity-0 group-hover:opacity-100 text-[10px] bg-[#17140f] text-white px-2 py-1 rounded -translate-y-2">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-3 text-[10px] sm:text-xs text-gray-400">
            {monthlyRevenue.map((item) => (
              <span key={item.month}>{item.month}</span>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white border border-[#eee7da] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-[#211b13]">
            Booking Summary
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Overall booking status
          </p>

          <div className="flex justify-center mt-8">
            <div
              className="w-44 h-44 rounded-full flex items-center justify-center"
              style={{
                background:
                  "conic-gradient(#b99753 0% 65%, #e9d9b8 65% 85%, #e5e7eb 85% 100%)",
              }}
            >
              <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">248</span>
                <span className="text-xs text-gray-400">Total Bookings</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 rounded-full bg-[#b99753]" />
                Confirmed
              </span>
              <span className="font-semibold text-sm">161</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 rounded-full bg-[#e9d9b8]" />
                Pending
              </span>
              <span className="font-semibold text-sm">50</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 rounded-full bg-gray-300" />
                Cancelled
              </span>
              <span className="font-semibold text-sm">37</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white border border-[#eee7da] rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-lg font-bold text-[#211b13]">
              Recent Bookings
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Latest customer reservations
            </p>
          </div>

          <a
            href="/admin/bookings"
            className="text-sm text-[#a27d3b] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-[#faf8f3] text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-4">Booking ID</th>
                <th className="px-4 py-4">Customer</th>
                <th className="px-4 py-4">Event</th>
                <th className="px-4 py-4">Hall</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-t border-[#eee7da] hover:bg-[#faf8f3] transition"
                >
                  <td className="px-4 py-5 text-sm font-semibold text-[#a27d3b]">
                    {booking.id}
                  </td>
                  <td className="px-4 py-5 text-sm font-medium">
                    {booking.customer}
                  </td>
                  <td className="px-4 py-5 text-sm">{booking.event}</td>
                  <td className="px-4 py-5 text-sm">{booking.hall}</td>
                  <td className="px-4 py-5 text-sm text-gray-500">
                    {booking.date}
                  </td>
                  <td className="px-4 py-5 text-sm font-semibold">
                    Rs. {booking.amount}
                  </td>
                  <td className="px-4 py-5">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusStyle[booking.status]}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <a
                      href="/admin/bookings"
                      className="text-[#a27d3b] hover:text-black"
                      title="View bookings"
                    >
                      <Eye size={18} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="mb-5">
          <h2 className="text-lg font-bold text-[#211b13]">
            Upcoming Events
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Events scheduled at Ajwa Marriage Hall
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-[#eee7da] rounded-2xl p-5 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-[#f5f0e5] text-[#a27d3b] flex items-center justify-center">
                  <Crown size={21} />
                </span>

                <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
                  Upcoming
                </span>
              </div>

              <h3 className="font-bold text-lg mt-5">{event.name}</h3>
              <p className="text-sm text-[#a27d3b] mt-1">{event.event}</p>

              <div className="space-y-3 mt-5 text-sm text-gray-500">
                <p className="flex items-center gap-2">
                  <Building2 size={16} /> {event.hall}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} /> {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <Users size={16} /> {event.guests}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Information */}
      <div className="bg-[#17140f] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-[#d5b36a]">
            <MessageSquare size={19} />
            <span className="text-sm font-semibold">Customer Support</span>
          </div>
          <h2 className="text-xl font-bold mt-3">
            Stay connected with your customers
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Review customer inquiries and respond to booking questions.
          </p>
        </div>

        <a
          href="/admin/contacts"
          className="bg-[#c6a363] text-[#17140f] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white transition text-center"
        >
          View Messages
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
