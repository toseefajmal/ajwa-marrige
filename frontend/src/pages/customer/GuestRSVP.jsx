
import { useEffect, useState } from "react";
import {
  Users,
  UserPlus,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const GuestRSVP = () => {
  const [guests, setGuests] = useState(() =>
    JSON.parse(localStorage.getItem("ajwaGuestRSVP") || "[]")
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    status: "Pending",
  });

  useEffect(() => {
    localStorage.setItem("ajwaGuestRSVP", JSON.stringify(guests));
  }, [guests]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGuest = {
      id: Date.now(),
      ...formData,
    };

    setGuests((prev) => [...prev, newGuest]);

    setFormData({
      name: "",
      phone: "",
      status: "Pending",
    });
  };

  const updateStatus = (id, status) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === id ? { ...guest, status } : guest
      )
    );
  };

  const deleteGuest = (id) => {
    if (window.confirm("Are you sure you want to delete this guest?")) {
      setGuests((prev) => prev.filter((guest) => guest.id !== id));
    }
  };

  const attending = guests.filter(
    (guest) => guest.status === "Attending"
  ).length;

  const notAttending = guests.filter(
    (guest) => guest.status === "Not Attending"
  ).length;

  const pending = guests.filter(
    (guest) => guest.status === "Pending"
  ).length;

  const stats = [
    {
      title: "Total Guests",
      value: guests.length,
      icon: Users,
    },
    {
      title: "Attending",
      value: attending,
      icon: CheckCircle,
    },
    {
      title: "Not Attending",
      value: notAttending,
      icon: XCircle,
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f3] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#b99753]">
            Guest Management
          </p>

          <h1 className="text-3xl font-bold text-[#17140f] md:text-4xl">
            Guest RSVP Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your wedding guests and track their responses.
          </p>
        </div>

        {/* Statistics */}

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#eee7d9] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#17140f]">
                      {item.value}
                    </h2>
                  </div>

                  <div className="rounded-xl bg-[#f5efe2] p-3 text-[#b99753]">
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Guest Form */}

        <div className="mb-8 rounded-2xl border border-[#eee7d9] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#f5efe2] p-3 text-[#b99753]">
              <UserPlus size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17140f]">
                Add New Guest
              </h2>
              <p className="text-sm text-gray-500">
                Enter guest details below.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-4"
          >
            <input
              type="text"
              placeholder="Guest Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b99753]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b99753]"
            />

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b99753]"
            >
              <option value="Pending">Pending</option>
              <option value="Attending">Attending</option>
              <option value="Not Attending">Not Attending</option>
            </select>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#b99753] px-5 py-3 font-semibold text-white transition hover:bg-[#17140f]"
            >
              <UserPlus size={18} />
              Add Guest
            </button>
          </form>
        </div>

        {/* Guest List */}

        <div className="overflow-hidden rounded-2xl border border-[#eee7d9] bg-white shadow-sm">
          <div className="border-b border-gray-100 p-6">
            <h2 className="text-xl font-bold text-[#17140f]">
              Guest List
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Update guest responses whenever needed.
            </p>
          </div>

          {guests.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <Users size={45} className="mx-auto text-[#b99753]" />
              <h3 className="mt-4 text-lg font-semibold text-[#17140f]">
                No Guests Added Yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Add your first guest using the form above.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-[#faf8f3] text-sm text-gray-600">
                  <tr>
                    <th className="px-6 py-4">Guest Name</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">RSVP Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {guests.map((guest) => (
                    <tr
                      key={guest.id}
                      className="border-t border-gray-100"
                    >
                      <td className="px-6 py-4 font-semibold text-[#17140f]">
                        {guest.name}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {guest.phone}
                      </td>

                      <td className="px-6 py-4">
                        <select
                          value={guest.status}
                          onChange={(e) =>
                            updateStatus(guest.id, e.target.value)
                          }
                          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#b99753]"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Attending">Attending</option>
                          <option value="Not Attending">
                            Not Attending
                          </option>
                        </select>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteGuest(guest.id)}
                          className="rounded-lg bg-red-50 p-2 text-red-500 transition hover:bg-red-100"
                          title="Delete Guest"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default GuestRSVP;
