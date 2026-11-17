
import { useState } from "react";
import { Plus, Search, Edit, Trash2, Users, X, Building2 } from "lucide-react";

const ManageHalls = () => {
  const [halls, setHalls] = useState([
    { id: 1, name: "Royal Grand Hall", capacity: "500 - 800", type: "Indoor", status: "Available" },
    { id: 2, name: "Crystal Banquet Hall", capacity: "300 - 500", type: "Indoor", status: "Available" },
    { id: 3, name: "Luxury Marquee", capacity: "800 - 1200", type: "Outdoor", status: "Available" },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    type: "Indoor",
    status: "Available",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setHalls((prev) =>
        prev.map((hall) =>
          hall.id === editingId ? { ...hall, ...formData } : hall
        )
      );
    } else {
      setHalls((prev) => [
        ...prev,
        { id: Date.now(), ...formData },
      ]);
    }

    setFormData({ name: "", capacity: "", type: "Indoor", status: "Available" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (hall) => {
    setFormData({
      name: hall.name,
      capacity: hall.capacity,
      type: hall.type,
      status: hall.status,
    });
    setEditingId(hall.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this hall?")) {
      setHalls((prev) => prev.filter((hall) => hall.id !== id));
    }
  };

  const filtered = halls.filter((hall) =>
    hall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-7">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#211b13]">Manage Halls</h1>
          <p className="text-sm text-gray-500 mt-2">Add, update and manage your event venues.</p>
        </div>

        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ name: "", capacity: "", type: "Indoor", status: "Available" });
            setShowForm(true);
          }}
          className="flex items-center justify-center gap-2 bg-[#17140f] text-white px-5 py-3 rounded-lg hover:bg-[#b99753] transition"
        >
          <Plus size={18} /> Add New Hall
        </button>
      </div>

      {showForm && (
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">{editingId ? "Edit Hall" : "Add New Hall"}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500"><X size={21} /></button>
          </div>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">Hall Name</label>
              <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-[#eee7da] rounded-lg p-3 outline-none focus:border-[#b99753]" placeholder="Enter hall name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Guest Capacity</label>
              <input required value={formData.capacity} onChange={(e) => setFormData({ ...formData, capacity: e.target.value })} className="w-full border border-[#eee7da] rounded-lg p-3 outline-none focus:border-[#b99753]" placeholder="e.g. 300 - 500" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Hall Type</label>
              <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full border border-[#eee7da] rounded-lg p-3 outline-none">
                <option>Indoor</option>
                <option>Outdoor</option>
                <option>Marquee</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full border border-[#eee7da] rounded-lg p-3 outline-none">
                <option>Available</option>
                <option>Maintenance</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex gap-3">
              <button type="submit" className="bg-[#17140f] text-white px-7 py-3 rounded-lg hover:bg-[#b99753]">
                {editingId ? "Update Hall" : "Save Hall"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="border border-gray-300 px-7 py-3 rounded-lg">Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid sm:grid-cols-3 gap-5">
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Building2 className="text-[#b99753]" size={25} />
          <p className="text-sm text-gray-500 mt-4">Total Halls</p>
          <h2 className="text-3xl font-bold mt-2">{halls.length}</h2>
        </div>
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Users className="text-green-600" size={25} />
          <p className="text-sm text-gray-500 mt-4">Available Halls</p>
          <h2 className="text-3xl font-bold mt-2">{halls.filter(h => h.status === "Available").length}</h2>
        </div>
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <Building2 className="text-orange-600" size={25} />
          <p className="text-sm text-gray-500 mt-4">Under Maintenance</p>
          <h2 className="text-3xl font-bold mt-2">{halls.filter(h => h.status === "Maintenance").length}</h2>
        </div>
      </div>

      <div className="bg-white border border-[#eee7da] rounded-xl p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <h2 className="font-bold text-lg">All Halls</h2>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search halls..." className="border border-[#eee7da] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#b99753] w-full md:w-72" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left">
            <thead className="bg-[#faf8f3] text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-4">Hall Name</th>
                <th className="px-5 py-4">Capacity</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((hall) => (
                <tr key={hall.id} className="border-t border-[#eee7da]">
                  <td className="px-5 py-5 font-semibold text-sm">{hall.name}</td>
                  <td className="px-5 py-5 text-sm">{hall.capacity} Guests</td>
                  <td className="px-5 py-5 text-sm">{hall.type}</td>
                  <td className="px-5 py-5">
                    <span className={`px-3 py-1.5 rounded-full text-xs ${hall.status === "Available" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700"}`}>{hall.status}</span>
                  </td>
                  <td className="px-5 py-5">
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(hall)} className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={17} /></button>
                      <button onClick={() => handleDelete(hall.id)} className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 size={17} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className="text-center py-10 text-gray-500">No halls found.</p>}
        </div>
      </div>
    </div>
  );
};

export default ManageHalls;
