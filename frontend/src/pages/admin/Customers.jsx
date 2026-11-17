
import { useState } from "react";
import { Search, Users, Mail, Phone, Eye } from "lucide-react";

const Customers = () => {
  const [search, setSearch] = useState("");

  const customers = [
    { id: 1, name: "Muhammad Ahmed", email: "ahmed@example.com", phone: "03001234567", bookings: 3, joined: "05 Jan 2026" },
    { id: 2, name: "Ali Hassan", email: "ali@example.com", phone: "03111234567", bookings: 2, joined: "12 Feb 2026" },
    { id: 3, name: "Usman Tariq", email: "usman@example.com", phone: "03221234567", bookings: 4, joined: "20 Mar 2026" },
    { id: 4, name: "Hassan Raza", email: "hassan@example.com", phone: "03331234567", bookings: 1, joined: "15 Apr 2026" },
    { id: 5, name: "Bilal Ahmad", email: "bilal@example.com", phone: "03451234567", bookings: 2, joined: "08 May 2026" },
  ];

  const filtered = customers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-bold text-[#211b13]">Customers</h1>
        <p className="text-sm text-gray-500 mt-2">View and manage your registered customers.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Users className="text-purple-600" size={25} />
          <p className="text-sm text-gray-500 mt-4">Total Customers</p>
          <h2 className="text-3xl font-bold mt-2">{customers.length}</h2>
        </div>
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Users className="text-green-600" size={25} />
          <p className="text-sm text-gray-500 mt-4">Total Bookings</p>
          <h2 className="text-3xl font-bold mt-2">{customers.reduce((sum, c) => sum + c.bookings, 0)}</h2>
        </div>
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Users className="text-orange-600" size={25} />
          <p className="text-sm text-gray-500 mt-4">Active Customers</p>
          <h2 className="text-3xl font-bold mt-2">{customers.length}</h2>
        </div>
      </div>

      <div className="bg-white border border-[#eee7da] rounded-xl p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <h2 className="font-bold text-lg">Customer Directory</h2>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
              className="border border-[#eee7da] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#b99753] w-full md:w-72"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-[#faf8f3] text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Bookings</th>
                <th className="px-5 py-4">Joined Date</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <tr key={customer.id} className="border-t border-[#eee7da]">
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f5f0e5] text-[#a27d3b] flex items-center justify-center font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{customer.name}</p>
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Mail size={12} />{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm text-gray-600"><span className="flex items-center gap-2"><Phone size={14} />{customer.phone}</span></td>
                  <td className="px-5 py-5 text-sm">{customer.bookings}</td>
                  <td className="px-5 py-5 text-sm text-gray-500">{customer.joined}</td>
                  <td className="px-5 py-5"><button title="View customer" className="text-[#a27d3b] hover:bg-[#f5f0e5] p-2 rounded"><Eye size={18} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className="text-center py-10 text-gray-500">No customers found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Customers;
