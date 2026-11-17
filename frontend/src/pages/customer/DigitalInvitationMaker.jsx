
import { useState } from "react";
import {
  Printer,
  Heart,
  CalendarDays,
  MapPin,
  Clock,
  Sparkles,
  Check,
  RotateCcw,
} from "lucide-react";

const themes = [
  {
    id: "gold",
    name: "Royal Gold",
    background: "#fffaf0",
    primary: "#a47b32",
    border: "#c5a15b",
    font: "Georgia, serif",
  },
  {
    id: "pink",
    name: "Rose Romance",
    background: "#fff4f5",
    primary: "#a34f68",
    border: "#d99aaa",
    font: "Georgia, serif",
  },
  {
    id: "green",
    name: "Emerald Elegance",
    background: "#f2f7f0",
    primary: "#35634a",
    border: "#8ba88e",
    font: "Georgia, serif",
  },
  {
    id: "blue",
    name: "Royal Blue",
    background: "#f1f5fc",
    primary: "#304e80",
    border: "#8ba4ce",
    font: "Georgia, serif",
  },
];

const initialData = {
  groomName: "Groom Name",
  brideName: "Bride Name",
  heading: "Wedding Invitation",
  message:
    "Together with our families, we invite you to celebrate our special day.",
  eventName: "Wedding Ceremony",
  eventDate: "",
  eventTime: "",
  venue: "Ajwa Marriage Hall",
  footer: "Your Presence Is Our Happiness",
};

const DigitalInvitationMaker = () => {
  const [formData, setFormData] = useState(initialData);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setGenerated(false);
  };

  const handleTheme = (theme) => {
    setSelectedTheme(theme);
    setGenerated(false);
  };

  const handleGenerate = () => {
    if (
      !formData.groomName.trim() ||
      !formData.brideName.trim() ||
      !formData.eventDate ||
      !formData.venue.trim()
    ) {
      alert("Please enter groom, bride, date and venue details.");
      return;
    }

    setGenerated(true);
  };

  const handleReset = () => {
    setFormData(initialData);
    setSelectedTheme(themes[0]);
    setGenerated(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const inputClass =
    "w-full border border-[#e5dfd2] rounded-xl px-4 py-3 outline-none focus:border-[#b99753] bg-white text-sm";

  return (
    <div className="min-h-screen bg-[#faf8f3] py-12 px-5 md:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <Sparkles className="mx-auto text-[#b99753]" size={32} />

          <p className="text-[#b99753] text-xs tracking-[4px] uppercase mt-4">
            Create Your Own Invitation
          </p>

          <h1 className="text-3xl md:text-5xl font-serif text-[#17140f] mt-4">
            Digital Invitation Maker
          </h1>

          <p className="text-gray-500 mt-4">
            Choose a theme, customize your card and generate your invitation.
          </p>
        </div>

        {/* Theme Selection */}
        <div className="mb-10">
          <h2 className="text-xl font-serif mb-5">
            1. Choose Your Invitation Theme
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleTheme(theme)}
                className={`p-4 rounded-xl border-2 text-left transition ${
                  selectedTheme.id === theme.id
                    ? "border-[#b99753] shadow-md"
                    : "border-[#e8e0d2] hover:border-[#b99753]"
                }`}
                style={{ backgroundColor: theme.background }}
              >
                <div
                  className="h-14 rounded-lg border-2 mb-3"
                  style={{
                    borderColor: theme.border,
                    backgroundColor: theme.background,
                  }}
                />

                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">
                    {theme.name}
                  </span>

                  {selectedTheme.id === theme.id && (
                    <Check size={18} color={theme.primary} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Editor */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#eee8dc] shadow-sm">

            <div className="flex justify-between items-center mb-7">
              <div>
                <p className="text-xs text-[#b99753] uppercase tracking-widest">
                  Customize
                </p>
                <h2 className="text-2xl font-serif mt-2">
                  2. Edit Your Card
                </h2>
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#b99753]"
              >
                <RotateCcw size={15} />
                Reset
              </button>
            </div>

            <div className="space-y-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Card Heading
                </label>
                <input
                  name="heading"
                  value={formData.heading}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Wedding Invitation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Groom Name
                </label>
                <input
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter groom name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Bride Name
                </label>
                <input
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter bride name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Type
                </label>
                <select
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Wedding Ceremony</option>
                  <option>Mehndi</option>
                  <option>Barat</option>
                  <option>Walima</option>
                  <option>Engagement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Time
                </label>
                <input
                  type="time"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Venue
                </label>
                <input
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter venue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Invitation Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Footer Text
                </label>
                <input
                  name="footer"
                  value={formData.footer}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

            </div>

            <button
              onClick={handleGenerate}
              className="w-full mt-8 bg-[#17140f] text-[#d5b36a] py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#b99753] hover:text-white transition"
            >
              <Sparkles size={18} />
              Generate Invitation
            </button>

          </div>

          {/* Live Preview */}
          <div className="lg:sticky lg:top-8">

            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-serif">
                3. Invitation Preview
              </h2>

              {generated && (
                <span className="text-xs text-green-700 flex items-center gap-1">
                  <Check size={15} />
                  Generated
                </span>
              )}
            </div>

            <div
              id="invitation-card"
              className="p-4 md:p-7 shadow-xl"
              style={{
                backgroundColor: selectedTheme.background,
                border: `5px double ${selectedTheme.border}`,
                color: selectedTheme.primary,
                fontFamily: selectedTheme.font,
              }}
            >
              <div
                className="border p-6 md:p-9 text-center"
                style={{ borderColor: selectedTheme.border }}
              >
                <Sparkles
                  size={27}
                  className="mx-auto mb-5"
                />

                <p className="text-xs tracking-[4px] uppercase">
                  AJWA MARRIAGE HALL
                </p>

                <h2 className="text-3xl md:text-4xl mt-7 font-serif">
                  {formData.heading || "Wedding Invitation"}
                </h2>

                <Heart size={25} className="mx-auto my-6" />

                <p className="text-sm leading-7 px-2">
                  {formData.message}
                </p>

                <h3 className="text-3xl mt-8 font-serif">
                  {formData.groomName || "Groom Name"}
                </h3>

                <p className="text-xl my-3">&</p>

                <h3 className="text-3xl font-serif">
                  {formData.brideName || "Bride Name"}
                </h3>

                <div
                  className="border-t border-b my-8 py-6 space-y-5"
                  style={{ borderColor: selectedTheme.border }}
                >
                  <p className="text-lg font-semibold">
                    {formData.eventName}
                  </p>

                  <div className="flex justify-center items-center gap-2 text-sm">
                    <CalendarDays size={17} />
                    {formData.eventDate || "Event Date"}
                  </div>

                  <div className="flex justify-center items-center gap-2 text-sm">
                    <Clock size={17} />
                    {formData.eventTime || "Event Time"}
                  </div>

                  <div className="flex justify-center items-center gap-2 text-sm">
                    <MapPin size={17} />
                    {formData.venue || "Wedding Venue"}
                  </div>
                </div>

                <p className="text-xs tracking-[2px] uppercase">
                  {formData.footer}
                </p>

                <Heart size={18} className="mx-auto mt-5" />
              </div>
            </div>

            {generated && (
              <div className="mt-5 p-4 rounded-xl bg-green-50 text-green-800 text-sm">
                Your invitation has been generated successfully!
              </div>
            )}

            <button
              onClick={handlePrint}
              disabled={!generated}
              className="w-full mt-5 bg-[#b99753] text-white py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#17140f] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Printer size={18} />
              Print / Save as PDF
            </button>

          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }

          #invitation-card,
          #invitation-card * {
            visibility: visible !important;
          }

          #invitation-card {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

    </div>
  );
};

export default DigitalInvitationMaker;
