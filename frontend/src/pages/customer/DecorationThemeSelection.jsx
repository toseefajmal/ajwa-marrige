
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const DecorationThemeSelection = () => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const themes = [
    {
      id: 1,
      name: "Royal Gold",
      category: "Luxury",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      description: "Elegant golden decoration with royal stage styling.",
    },
    {
      id: 2,
      name: "Floral White",
      category: "Classic",
      price: 40000,
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800",
      description: "Beautiful white flowers with a soft elegant look.",
    },
    {
      id: 3,
      name: "Mehndi Theme",
      category: "Traditional",
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      description: "Colorful traditional decoration for Mehndi events.",
    },
    {
      id: 4,
      name: "Pink Romance",
      category: "Premium",
      price: 55000,
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      description: "Romantic pink floral stage and beautiful lighting.",
    },
    {
      id: 5,
      name: "Garden Wedding",
      category: "Outdoor",
      price: 60000,
      image:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800",
      description: "Natural greenery and beautiful outdoor decoration.",
    },
    {
      id: 6,
      name: "Royal Red",
      category: "Traditional",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      description: "Traditional red and gold wedding stage decoration.",
    },
  ];

  const handleSelect = (theme) => {
    setSelectedTheme(theme.id);
    localStorage.setItem("ajwaSelectedTheme", JSON.stringify(theme));
  };

  const selected = themes.find((theme) => theme.id === selectedTheme);

  return (
    <div className="min-h-screen bg-[#faf8f3] py-14 px-5 md:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-[#b99753]" size={30} />
          </div>

          <p className="text-[#b99753] text-xs tracking-[4px] uppercase">
            Make Your Event Special
          </p>

          <h1 className="text-3xl md:text-5xl font-serif text-[#17140f] mt-4">
            Choose Your Decoration Theme
          </h1>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Explore our beautiful wedding decoration themes and select
            the perfect style for your special day.
          </p>
        </div>

        {/* Theme Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
                selectedTheme === theme.id
                  ? "border-[#b99753] shadow-lg"
                  : "border-[#eee8dc] hover:shadow-lg"
              }`}
            >
              <div className="relative h-60 overflow-hidden">

                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-4 left-4 bg-white/90 text-[#17140f] px-4 py-2 rounded-full text-xs">
                  {theme.category}
                </span>

                {selectedTheme === theme.id && (
                  <div className="absolute top-4 right-4 bg-[#b99753] text-white w-9 h-9 rounded-full flex items-center justify-center">
                    <Check size={20} />
                  </div>
                )}

              </div>

              <div className="p-6">

                <h2 className="text-xl font-serif text-[#17140f]">
                  {theme.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2 min-h-10">
                  {theme.description}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-xs text-gray-400">
                      Starting From
                    </p>

                    <p className="text-lg font-semibold text-[#b99753]">
                      Rs. {theme.price.toLocaleString("en-PK")}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelect(theme)}
                    className={`px-5 py-3 rounded-full text-xs font-medium transition ${
                      selectedTheme === theme.id
                        ? "bg-[#17140f] text-[#d5b36a]"
                        : "bg-[#b99753] text-white hover:bg-[#17140f]"
                    }`}
                  >
                    {selectedTheme === theme.id ? "Selected" : "Select Theme"}
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Selected Theme Summary */}
        {selected && (
          <div className="mt-10 bg-[#17140f] text-white rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5">

            <div>
              <p className="text-[#d5b36a] text-xs uppercase tracking-widest">
                Your Selected Theme
              </p>

              <h2 className="text-2xl font-serif mt-2">
                {selected.name}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {selected.description}
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                Decoration Price
              </p>

              <h3 className="text-2xl text-[#d5b36a] mt-1">
                Rs. {selected.price.toLocaleString("en-PK")}
              </h3>
            </div>

          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-8">
          Decoration prices are estimated and may vary according to event requirements.
        </p>

      </div>
    </div>
  );
};

export default DecorationThemeSelection;
