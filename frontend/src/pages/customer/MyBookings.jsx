
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(
      localStorage.getItem("ajwaBookings") || "[]"
    );

    setBookings(savedBookings);
  }, []);

  const filters = ["All", "Confirmed", "Pending", "Cancelled"];

  const filteredBookings =
    activeFilter === "All"
      ? bookings
      : bookings.filter(
          (booking) => booking.bookingStatus === activeFilter
        );

  const getStatusStyle = (status) => {
    if (status === "Confirmed" || status === "Paid") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Partially Paid") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-red-100 text-red-700";
  };

  const formatDate = (date) => {
    if (!date) return "Not selected";

    return new Date(date + "T00:00:00").toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#faf8f3]">

      {/* Page Header */}
      <section className="bg-[#17140f] px-5 py-16 text-center md:py-20">
        <p className="mb-3 text-xs tracking-[4px] text-[#d5b36a]">
          AJWA MARRIAGE HALL
        </p>

        <h1 className="font-serif text-3xl text-white md:text-5xl">
          My Bookings
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
          Manage your event reservations and keep track of your special
          occasions with Ajwa Marriage Hall.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

        {/* Summary Cards */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-[#e9e2d4] bg-white p-6">
            <p className="text-sm text-gray-500">Total Bookings</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17140f]">
              {bookings.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#e9e2d4] bg-white p-6">
            <p className="text-sm text-gray-500">Confirmed</p>
            <h2 className="mt-3 text-3xl font-semibold text-green-700">
              {bookings.filter(
                (b) => b.bookingStatus === "Confirmed"
              ).length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#e9e2d4] bg-white p-6">
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="mt-3 text-3xl font-semibold text-yellow-600">
              {bookings.filter(
                (b) => b.bookingStatus === "Pending"
              ).length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#e9e2d4] bg-white p-6">
            <p className="text-sm text-gray-500">Cancelled</p>
            <h2 className="mt-3 text-3xl font-semibold text-red-600">
              {bookings.filter(
                (b) => b.bookingStatus === "Cancelled"
              ).length}
            </h2>
          </div>

        </div>

        {/* Bookings Section */}
        <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>
            <h2 className="font-serif text-2xl text-[#17140f]">
              Your Reservations
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              View your event bookings and payment details.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  activeFilter === filter
                    ? "bg-[#b99753] text-[#17140f]"
                    : "border border-[#e5ddce] bg-white text-gray-600 hover:border-[#b99753]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>

        {/* Booking Cards */}
        <div className="space-y-5">

          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div
                key={booking.bookingId}
                className="overflow-hidden rounded-2xl border border-[#e9e2d4] bg-white shadow-sm transition hover:shadow-md"
              >

                {/* Booking Header */}
                <div className="flex flex-col justify-between gap-4 border-b border-[#eee8dc] p-5 md:flex-row md:items-center md:px-7">

                  <div>
                    <p className="text-xs tracking-wider text-[#a77d32]">
                      BOOKING ID: {booking.bookingId}
                    </p>

                    <h3 className="mt-2 font-serif text-xl text-[#17140f]">
                      {booking.eventType}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {booking.hall}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${getStatusStyle(
                      booking.bookingStatus
                    )}`}
                  >
                    {booking.bookingStatus}
                  </span>

                </div>

                {/* Booking Details */}
                <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3 md:px-7">

                  <div>
                    <p className="text-xs text-gray-400">Customer Name</p>
                    <p className="mt-2 text-sm font-semibold text-[#17140f]">
                      {booking.fullName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Phone Number</p>
                    <p className="mt-2 text-sm font-semibold text-[#17140f]">
                      {booking.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Event Date</p>
                    <p className="mt-2 text-sm font-semibold text-[#17140f]">
                      {formatDate(booking.eventDate)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Event Time</p>
                    <p className="mt-2 text-sm font-semibold text-[#17140f]">
                      {booking.eventTime}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Expected Guests</p>
                    <p className="mt-2 text-sm font-semibold text-[#17140f]">
                      {booking.guests} Guests
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Selected Package</p>
                    <p className="mt-2 text-sm font-semibold text-[#17140f]">
                      {booking.package || "Not selected"}
                    </p>
                  </div>

                </div>

                {/* Payment Details */}
                <div className="border-t border-[#eee8dc] bg-[#fcfaf6] p-5 md:px-7">

                  <h4 className="mb-4 font-serif text-lg text-[#17140f]">
                    Payment Information
                  </h4>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <div>
                      <p className="text-xs text-gray-400">
                        Payment Method
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[#17140f]">
                        {booking.paymentMethod || "Not selected"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Payment Status
                      </p>

                      <span
                        className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          booking.paymentStatus
                        )}`}
                      >
                        {booking.paymentStatus || "Pending"}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Total Amount
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[#a77d32]">
                        To be confirmed by management
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-[#d8c9ac] bg-white px-5 py-16 text-center">

              <h3 className="font-serif text-2xl text-[#17140f]">
                No Bookings Found
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                {activeFilter === "All"
                  ? "You haven't submitted any booking requests yet."
                  : `You don't have any ${activeFilter.toLowerCase()} bookings.`}
              </p>

              {activeFilter === "All" && (
                <Link
                  to="/booking"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b99753] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#17140f]"
                >
                  Book Your Event
                  <span>→</span>
                </Link>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default MyBookings;
