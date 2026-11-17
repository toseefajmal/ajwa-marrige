
import { useState } from "react";
import { Search, CalendarDays, Eye, CheckCircle2, XCircle } from "lucide-react";

const Bookings = () => {
  const [search, setSearch] = useState("");

  const [bookings, setBookings] = useState([
    { id: "AJW-1001", name: "Muhammad Ahmed", phone: "03001234567", event: "Wedding", hall: "Royal Grand Hall", date: "18 Nov 2026", guests: 500, amount: "350,000", status: "Pending" },
    { id: "AJW-1002", name: "Ali Hassan", phone: "03111234567", event: "Mehndi", hall: "Crystal Banquet Hall", date: "20 Nov 2026", guests: 300, amount: "180,000", status: "Confirmed" },
    { id: "AJW-1003", name: "Usman Tariq", phone: "03221234567", event: "Reception", hall: "Luxury Marquee", date: "22 Nov 2026", guests: 800, amount: "450,000", status: "Pending" },
    { id: "AJW-1004", name: "Hassan Raza", phone: "03331234567", event: "Barat", hall: "Royal Grand Hall", date: "25 Nov 2026", guests: 600, amount: "300,000", status: "Cancelled" },
  ]);

  const updateStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
  };

  const filteredBookings = bookings.filter((booking) =>
    `${booking.name} ${booking.id} ${booking.event}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const statusColors = {
    Confirmed: "bg-green-50 text-green-700",
    Pending: "bg-yellow-50 text-yellow-700",
    Cancelled: "bg-red-50 text-red-600",
  };

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-bold text-[#211b13]">Bookings Management</h1>
        <p className="text-sm text-gray-500 mt-2">Manage all customer event reservations.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {[
          ["Total Bookings", bookings.length],
          ["Confirmed", bookings.filter(b => b.status === "Confirmed").length],
          ["Pending", bookings.filter(b => b.status === "Pending").length],
        ].map((item, i) => (
          <div key={i} className="bg-white border border-[#eee7da] rounded-xl p-6">
            <p className="text-sm text-gray-500">{item[0]}</p>
            <h2 className="text-3xl font-bold mt-3">{item[1]}</h2>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#eee7da] rounded-xl p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <h2 className="font-bold text-lg">All Bookings</h2>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search booking or customer..."
              className="border border-[#eee7da] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#b99753] w-full md:w-72"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="bg-[#faf8f3] text-xs uppercase text-gray-500">
              <tr>
                {["Booking ID", "Customer", "Event", "Hall", "Date", "Guests", "Amount", "Status", "Actions"].map(h => (
                  <th key={h} className="px-4 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t border-[#eee7da]">
                  <td className="px-4 py-5 text-sm font-semibold text-[#a27d3b]">{booking.id}</td>
                  <td className="px-4 py-5 text-sm">{booking.name}<p className="text-xs text-gray-400 mt-1">{booking.phone}</p></td>
                  <td className="px-4 py-5 text-sm">{booking.event}</td>
                  <td className="px-4 py-5 text-sm">{booking.hall}</td>
                  <td className="px-4 py-5 text-sm">{booking.date}</td>
                  <td className="px-4 py-5 text-sm">{booking.guests}</td>
                  <td className="px-4 py-5 text-sm">Rs. {booking.amount}</td>
                  <td className="px-4 py-5">
                    <span className={`px-3 py-1.5 rounded-full text-xs ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex gap-2">
                      <button title="Confirm booking" onClick={() => updateStatus(booking.id, "Confirmed")} className="text-green-600 hover:bg-green-50 p-2 rounded"><CheckCircle2 size={18} /></button>
                      <button title="Cancel booking" onClick={() => updateStatus(booking.id, "Cancelled")} className="text-red-500 hover:bg-red-50 p-2 rounded"><XCircle size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredBookings.length === 0 && <p className="text-center py-10 text-gray-500">No bookings found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
