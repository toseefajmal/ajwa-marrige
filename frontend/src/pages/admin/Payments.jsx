
import { useEffect, useState } from "react";
import {
  Search,
  Wallet,
  CheckCircle2,
  Clock,
  Receipt,
} from "lucide-react";

const Payments = () => {
  const [search, setSearch] = useState("");
  const [payments, setPayments] = useState([]);

  // Load customer bookings from localStorage
  useEffect(() => {
    const savedBookings = JSON.parse(
      localStorage.getItem("ajwaBookings") || "[]"
    );

    setPayments(savedBookings);
  }, []);

  // Update payment status
  const handleStatusChange = (bookingId, newStatus) => {
    const updatedPayments = payments.map((payment) =>
      payment.bookingId === bookingId
        ? { ...payment, paymentStatus: newStatus }
        : payment
    );

    setPayments(updatedPayments);

    localStorage.setItem(
      "ajwaBookings",
      JSON.stringify(updatedPayments)
    );
  };

  // Search payments
  const filtered = payments.filter((payment) =>
    `${payment.bookingId} ${payment.fullName} ${payment.phone} ${payment.paymentMethod}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Payment summary
  const paidCount = payments.filter(
    (payment) => payment.paymentStatus === "Paid"
  ).length;

  const pendingCount = payments.filter(
    (payment) =>
      !payment.paymentStatus ||
      payment.paymentStatus === "Pending"
  ).length;

  const getStatusStyle = (status) => {
    if (status === "Paid") {
      return "bg-green-50 text-green-700";
    }

    if (status === "Partially Paid") {
      return "bg-blue-50 text-blue-700";
    }

    if (status === "Failed") {
      return "bg-red-50 text-red-700";
    }

    return "bg-yellow-50 text-yellow-700";
  };

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-7">

      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#211b13]">
          Payments Management
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Track customer payment methods and manage payment status.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-5">

        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Wallet className="text-green-600" size={25} />

          <p className="text-sm text-gray-500 mt-4">
            Paid Transactions
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {paidCount}
          </h2>
        </div>

        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Clock className="text-yellow-600" size={25} />

          <p className="text-sm text-gray-500 mt-4">
            Pending Transactions
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {pendingCount}
          </h2>
        </div>

        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Receipt className="text-blue-600" size={25} />

          <p className="text-sm text-gray-500 mt-4">
            Total Transactions
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {payments.length}
          </h2>
        </div>

      </div>

      {/* Transaction History */}
      <div className="bg-white border border-[#eee7da] rounded-xl p-5">

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

          <div>
            <h2 className="font-bold text-lg">
              Transaction History
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Customer booking payment records
            </p>
          </div>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions..."
              className="border border-[#eee7da] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#b99753] w-full md:w-72"
            />
          </div>

        </div>

        {/* Payments Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px] text-left">

            <thead className="bg-[#faf8f3] text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-4">Payment ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Booking ID</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Method</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Update Status</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((payment) => {
                const status = payment.paymentStatus || "Pending";

                return (
                  <tr
                    key={payment.bookingId}
                    className="border-t border-[#eee7da] hover:bg-[#fcfaf6] transition"
                  >

                    <td className="px-5 py-5 text-sm font-semibold text-[#a27d3b]">
                      PAY-{payment.bookingId?.replace("AJW-", "")}
                    </td>

                    <td className="px-5 py-5 text-sm font-medium text-[#211b13]">
                      {payment.fullName}
                    </td>

                    <td className="px-5 py-5 text-sm">
                      {payment.bookingId}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-500">
                      {formatDate(payment.submittedAt)}
                    </td>

                    <td className="px-5 py-5 text-sm font-medium">
                      {payment.paymentMethod || "Not selected"}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-500">
                      {payment.phone}
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(status)}`}
                      >
                        {status}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <select
                        value={status}
                        onChange={(e) =>
                          handleStatusChange(
                            payment.bookingId,
                            e.target.value
                          )
                        }
                        className="border border-[#eee7da] rounded-lg px-3 py-2 text-xs outline-none focus:border-[#b99753] bg-white"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Partially Paid">Partially Paid</option>
                        <option value="Paid">Paid</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-14">

              <Receipt
                size={40}
                className="mx-auto text-[#b99753]"
              />

              <h3 className="font-semibold text-[#211b13] mt-4">
                No Payments Found
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {payments.length === 0
                  ? "Customer booking payments will appear here."
                  : "No transactions match your search."}
              </p>

            </div>
          )}

        </div>

      </div>

      {/* Information */}
      <div className="bg-[#faf8f3] border border-[#eee7da] rounded-xl p-5">
        <div className="flex gap-3 items-start">
          <CheckCircle2
            size={21}
            className="text-[#b99753] shrink-0"
          />

          <div>
            <h3 className="font-semibold text-[#211b13]">
              Payment Management
            </h3>

            <p className="text-sm text-gray-500 mt-1 leading-6">
              Select a payment status from the Update Status column.
              Changes are saved in browser storage and will also
              appear in the customer booking details.
              Verify actual payments before marking them as Paid.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Payments;
