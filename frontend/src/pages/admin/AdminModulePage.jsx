
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

const AdminModulePage = ({ title, description, storageKey, fields }) => {
  const [items, setItems] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    setItems(saved);
  }, [storageKey]);

  const saveItems = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem(storageKey, JSON.stringify(updatedItems));
  };

  const openForm = (item = null) => {
    const emptyForm = {};
    fields.forEach((field) => {
      emptyForm[field.name] = "";
    });

    setFormData(item ? { ...item } : emptyForm);
    setEditingId(item ? item.id : null);
    setFormOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updatedItems = items.map((item) =>
        item.id === editingId ? { ...formData, id: editingId } : item
      );
      saveItems(updatedItems);
    } else {
      const newItem = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      saveItems([...items, newItem]);
    }

    setFormOpen(false);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    saveItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-[#b99753] font-semibold">
            AJWA MANAGEMENT
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#17140f] mt-1">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>

        <button
          onClick={() => openForm()}
          className="flex items-center justify-center gap-2 bg-[#17140f] text-white px-5 py-3 rounded-full hover:bg-[#b99753] transition"
        >
          <Plus size={18} />
          Add New
        </button>
      </div>

      {formOpen && (
        <div className="bg-white border border-[#e9e1d2] rounded-2xl p-5 md:p-7 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-[#17140f]">
              {editingId ? "Update Record" : "Add New Record"}
            </h2>

            <button
              onClick={() => setFormOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            {fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {field.label}
                </label>

                <input
                  type={field.type || "text"}
                  required={field.required !== false}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.name]: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#b99753]"
                />
              </div>
            ))}

            <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#b99753] text-white px-6 py-3 rounded-full hover:bg-[#a48442]"
              >
                <Save size={17} />
                {editingId ? "Update" : "Save"}
              </button>

              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="px-6 py-3 rounded-full border border-gray-200 text-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-[#eee7da] p-5">
          <p className="text-sm text-gray-500">Total Records</p>
          <h3 className="text-3xl font-bold text-[#17140f] mt-2">
            {items.length}
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-[#eee7da] p-5">
          <p className="text-sm text-gray-500">Recently Added</p>
          <h3 className="text-3xl font-bold text-[#b99753] mt-2">
            {items.filter((item) => {
              if (!item.createdAt) return false;
              return (
                Date.now() - new Date(item.createdAt).getTime() <
                7 * 86400000
              );
            }).length}
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-[#eee7da] p-5">
          <p className="text-sm text-gray-500">Management Status</p>
          <h3 className="text-xl font-bold text-green-600 mt-3">Active</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#eee7da] overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-bold text-[#17140f]">{title} Records</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage and update your records
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-14 px-5">
            <div className="w-14 h-14 rounded-full bg-[#f8f3e9] flex items-center justify-center mx-auto mb-3">
              <Plus className="text-[#b99753]" />
            </div>

            <h3 className="font-semibold text-[#17140f]">
              No records found
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Click Add New to create your first record.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[650px]">
              <thead className="bg-[#faf8f3] text-gray-600 text-sm">
                <tr>
                  {fields.map((field) => (
                    <th key={field.name} className="px-5 py-4 font-semibold">
                      {field.label}
                    </th>
                  ))}
                  <th className="px-5 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100">
                    {fields.map((field) => (
                      <td
                        key={field.name}
                        className="px-5 py-4 text-sm text-gray-700"
                      >
                        {item[field.name] || "—"}
                      </td>
                    ))}

                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openForm(item)}
                          className="p-2 rounded-lg bg-[#f8f3e9] text-[#9b7838] hover:bg-[#efe4ce]"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModulePage;
