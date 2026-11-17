
import { useState } from "react";
import { Calculator, Users, Utensils, Building2, Sparkles } from "lucide-react";

const WeddingBudgetCalculator = () => {
  const [guests, setGuests] = useState(200);
  const [menuPrice, setMenuPrice] = useState(1500);
  const [hallCharges, setHallCharges] = useState(50000);
  const [decoration, setDecoration] = useState(30000);
  const [otherCharges, setOtherCharges] = useState(10000);

  const foodTotal = guests * menuPrice;
  const total = foodTotal + Number(hallCharges) + Number(decoration) + Number(otherCharges);

  const formatPrice = (amount) =>
    `Rs. ${Number(amount).toLocaleString("en-PK")}`;

  const inputClass =
    "w-full border border-[#e5dfd2] rounded-xl px-4 py-3 outline-none focus:border-[#b99753] bg-white";

  return (
    <div className="min-h-screen bg-[#faf8f3] py-12 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-[#b99753] uppercase tracking-[3px] text-xs">
            Plan Your Wedding
          </span>

          <h1 className="text-3xl md:text-5xl font-serif text-[#17140f] mt-4">
            Wedding Budget Calculator
          </h1>

          <p className="text-gray-500 mt-4">
            Calculate your estimated wedding event expenses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Budget Inputs */}
          <div className="bg-white p-7 md:p-9 rounded-2xl shadow-sm border border-[#eee8dc]">

            <h2 className="text-xl font-serif mb-7 text-[#17140f]">
              Event Details
            </h2>

            <div className="space-y-6">

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Users size={17} /> Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Utensils size={17} /> Menu Price Per Head (Rs.)
                </label>
                <input
                  type="number"
                  min="0"
                  value={menuPrice}
                  onChange={(e) => setMenuPrice(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Building2 size={17} /> Hall Charges (Rs.)
                </label>
                <input
                  type="number"
                  min="0"
                  value={hallCharges}
                  onChange={(e) => setHallCharges(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Sparkles size={17} /> Decoration Charges (Rs.)
                </label>
                <input
                  type="number"
                  min="0"
                  value={decoration}
                  onChange={(e) => setDecoration(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Other Expenses (Rs.)
                </label>
                <input
                  type="number"
                  min="0"
                  value={otherCharges}
                  onChange={(e) => setOtherCharges(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>

            </div>
          </div>

          {/* Budget Summary */}
          <div className="bg-[#17140f] text-white p-7 md:p-9 rounded-2xl">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#b99753]/20 flex items-center justify-center text-[#d5b36a]">
                <Calculator size={25} />
              </div>

              <div>
                <h2 className="text-xl font-serif">Budget Summary</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Your estimated event expenses
                </p>
              </div>
            </div>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-300">Food Expenses</span>
                <span>{formatPrice(foodTotal)}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-300">Hall Charges</span>
                <span>{formatPrice(hallCharges)}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-300">Decoration</span>
                <span>{formatPrice(decoration)}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-300">Other Expenses</span>
                <span>{formatPrice(otherCharges)}</span>
              </div>

              <div className="pt-5">
                <p className="text-sm text-[#d5b36a] mb-3">
                  Total Estimated Budget
                </p>

                <h3 className="text-3xl md:text-4xl font-serif text-[#d5b36a]">
                  {formatPrice(total)}
                </h3>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mt-6">
                <p className="text-sm text-gray-400">
                  Estimated Cost Per Guest
                </p>
                <p className="text-xl mt-2">
                  {formatPrice(guests > 0 ? total / guests : 0)}
                </p>
              </div>

            </div>
          </div>

        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Note: This is an estimated budget. Final charges may vary.
        </p>

      </div>
    </div>
  );
};

export default WeddingBudgetCalculator;
