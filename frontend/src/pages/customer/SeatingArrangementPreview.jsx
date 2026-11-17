
import { useState } from "react";
import {
  Plus,
  Trash2,
  Users,
  Armchair,
  Sparkles,
  RotateCcw,
} from "lucide-react";

const SeatingArrangementPreview = () => {
  const [tables, setTables] = useState([
    { id: 1, name: "Table 1", seats: 8 },
    { id: 2, name: "Table 2", seats: 8 },
    { id: 3, name: "Table 3", seats: 10 },
  ]);

  const [tableName, setTableName] = useState("");
  const [seats, setSeats] = useState(8);
  const [hallName, setHallName] = useState("Royal Wedding Hall");

  const totalSeats = tables.reduce(
    (total, table) => total + Number(table.seats),
    0
  );

  const addTable = (e) => {
    e.preventDefault();

    if (!tableName.trim() || Number(seats) < 1) return;

    setTables((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: tableName,
        seats: Number(seats),
      },
    ]);

    setTableName("");
    setSeats(8);
  };

  const deleteTable = (id) => {
    setTables((prev) => prev.filter((table) => table.id !== id));
  };

  const resetLayout = () => {
    if (window.confirm("Reset your complete seating arrangement?")) {
      setTables([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#b99753]">
            Wedding Planning
          </p>

          <h1 className="text-3xl font-bold text-[#17140f] md:text-4xl">
            Seating Arrangement Preview
          </h1>

          <p className="mt-2 text-gray-500">
            Design your wedding hall seating arrangement and preview it live.
          </p>
        </div>

        {/* Summary */}

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#eee7d9] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Tables</p>
                <h2 className="mt-2 text-3xl font-bold text-[#17140f]">
                  {tables.length}
                </h2>
              </div>
              <Armchair size={28} className="text-[#b99753]" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#eee7d9] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Seating Capacity</p>
                <h2 className="mt-2 text-3xl font-bold text-[#17140f]">
                  {totalSeats}
                </h2>
              </div>
              <Users size={28} className="text-[#b99753]" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#eee7d9] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Average Seats / Table</p>
                <h2 className="mt-2 text-3xl font-bold text-[#17140f]">
                  {tables.length
                    ? Math.round(totalSeats / tables.length)
                    : 0}
                </h2>
              </div>
              <Sparkles size={28} className="text-[#b99753]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Controls */}

          <div className="space-y-6">

            <div className="rounded-2xl border border-[#eee7d9] bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-[#17140f]">
                Hall Settings
              </h2>

              <label className="mb-2 block text-sm font-medium text-gray-600">
                Hall Name
              </label>

              <input
                type="text"
                value={hallName}
                onChange={(e) => setHallName(e.target.value)}
                placeholder="Enter hall name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b99753]"
              />
            </div>

            <div className="rounded-2xl border border-[#eee7d9] bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-[#17140f]">
                Add New Table
              </h2>

              <form onSubmit={addTable} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Table Name
                  </label>

                  <input
                    type="text"
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                    placeholder="Example: Family Table"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b99753]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Number of Seats
                  </label>

                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b99753]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b99753] px-5 py-3 font-semibold text-white transition hover:bg-[#17140f]"
                >
                  <Plus size={18} />
                  Add Table
                </button>
              </form>
            </div>

            <button
              onClick={resetLayout}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-red-200 bg-white px-5 py-3 font-semibold text-red-500 transition hover:bg-red-50"
            >
              <RotateCcw size={18} />
              Reset Arrangement
            </button>
          </div>

          {/* Live Preview */}

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[#eee7d9] bg-white shadow-sm">

              <div className="border-b border-gray-100 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-[#b99753]">
                      Live Layout Preview
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-[#17140f]">
                      {hallName || "Your Wedding Hall"}
                    </h2>
                  </div>

                  <span className="rounded-full bg-[#f5efe2] px-4 py-2 text-sm font-semibold text-[#a17c36]">
                    {tables.length} Tables
                  </span>
                </div>
              </div>

              <div className="min-h-[450px] bg-[#f8f5ed] p-5 md:p-8">

                {/* Stage */}

                <div className="mx-auto mb-10 max-w-md rounded-xl border-2 border-[#b99753] bg-[#17140f] px-5 py-5 text-center shadow-md">
                  <Sparkles className="mx-auto mb-2 text-[#d5b36a]" size={24} />
                  <h3 className="font-bold uppercase tracking-[3px] text-[#d5b36a]">
                    Wedding Stage
                  </h3>
                  <p className="mt-1 text-xs text-white/60">
                    Bride & Groom
                  </p>
                </div>

                {/* Tables */}

                {tables.length === 0 ? (
                  <div className="py-16 text-center">
                    <Armchair
                      size={45}
                      className="mx-auto text-[#b99753]"
                    />
                    <h3 className="mt-4 font-semibold text-[#17140f]">
                      No Tables Added
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Add tables using the settings panel.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                    {tables.map((table) => (
                      <div
                        key={table.id}
                        className="relative rounded-2xl border-2 border-[#d5b36a] bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f5efe2] text-[#b99753]">
                          <Armchair size={28} />
                        </div>

                        <h3 className="break-words text-sm font-bold text-[#17140f]">
                          {table.name}
                        </h3>

                        <p className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                          <Users size={14} />
                          {table.seats} Seats
                        </p>

                        <button
                          onClick={() => deleteTable(table.id)}
                          title="Delete Table"
                          className="absolute right-2 top-2 rounded-lg p-1.5 text-red-400 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Entrance */}

                <div className="mx-auto mt-12 max-w-xs rounded-lg border-2 border-dashed border-[#b99753] py-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-[#a17c36]">
                    Main Entrance
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 p-5">
                <p className="text-sm text-gray-500">
                  Total capacity: <strong className="text-[#17140f]">{totalSeats} Guests</strong>
                </p>

                <span className="text-xs text-gray-400">
                  Preview updates automatically
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SeatingArrangementPreview;
