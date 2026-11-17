
import { Link } from "react-router-dom";
import {
  Users,
  Maximize,
  CheckCircle2,
  ArrowRight,
  Crown,
  CalendarDays,
  Sparkles,
  Utensils,
  Car,
  Wind,
  Music,
} from "lucide-react";

const Halls = () => {
  const halls = [
    {
      id: 1,
      name: "Royal Grand Hall",
      subtitle: "Luxury Wedding Experience",
      capacity: "500 - 800 Guests",
      size: "Large Event Space",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
      description:
        "A beautifully designed event space for grand weddings, receptions and unforgettable celebrations.",
      facilities: [
        "Elegant Stage Decoration",
        "Air Conditioning",
        "Premium Lighting",
        "Dining Arrangement",
        "Guest Seating",
        "Parking Facility",
      ],
      tag: "Most Popular",
    },
    {
      id: 2,
      name: "Crystal Banquet Hall",
      subtitle: "Elegant & Modern Celebrations",
      capacity: "300 - 500 Guests",
      size: "Medium Event Space",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200",
      description:
        "A stylish and comfortable venue designed for intimate weddings, receptions and family events.",
      facilities: [
        "Modern Stage Setup",
        "Air Conditioning",
        "Beautiful Lighting",
        "Dining Arrangement",
        "Guest Seating",
        "Event Decoration",
      ],
      tag: "Elegant Choice",
    },
    {
      id: 3,
      name: "Luxury Marquee",
      subtitle: "Spacious Outdoor Celebration",
      capacity: "800 - 1200 Guests",
      size: "Extra Large Event Space",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200",
      description:
        "A spacious marquee concept for large celebrations, featuring beautiful event arrangements.",
      facilities: [
        "Spacious Event Area",
        "Decorative Lighting",
        "Guest Seating",
        "Dining Arrangement",
        "Parking Facility",
        "Custom Decoration",
      ],
      tag: "Grand Celebrations",
    },
  ];

  const generalFacilities = [
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "Comfortable indoor environment for guests.",
    },
    {
      icon: Utensils,
      title: "Dining Arrangement",
      description: "Organized dining space for special events.",
    },
    {
      icon: Car,
      title: "Parking Facility",
      description: "Parking arrangements for visiting guests.",
    },
    {
      icon: Music,
      title: "Event Entertainment",
      description: "Event-friendly lighting and sound arrangements.",
    },
  ];

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[540px] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800"
          alt="Luxury wedding hall"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#120e09]/80" />

        <div className="relative text-center px-6 max-w-3xl">

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-[#d5b36a]" />
            <Crown size={18} className="text-[#e3c581]" />
            <span className="w-10 h-px bg-[#d5b36a]" />
          </div>

          <p className="text-[#e3c581] uppercase tracking-[5px] text-xs mt-6">
            Explore Our Venues
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-white mt-6">
            Our <span className="text-[#e3c581] italic">Halls</span>
          </h1>

          <p className="text-gray-300 mt-6 leading-8 max-w-xl mx-auto">
            Discover beautiful spaces designed to make your
            wedding and special celebrations memorable.
          </p>

          <div className="flex justify-center items-center gap-3 mt-7 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e3c581]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#e3c581]">Halls</span>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <Sparkles size={34} className="text-[#b99753] mx-auto" />

          <p className="text-[#aa8542] uppercase tracking-[4px] text-xs mt-6">
            Beautiful Venues
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
            Find The Perfect Space
            <span className="block text-[#b99753] italic">
              For Your Celebration
            </span>
          </h2>

          <p className="text-gray-500 leading-8 mt-6">
            Every celebration deserves a beautiful setting.
            Explore our different venue options and choose
            the space that matches your event requirements.
          </p>

        </div>

      </section>

      {/* Hall Cards */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
            <div>
              <p className="text-[#aa8542] uppercase tracking-[3px] text-xs">
                Discover Our Spaces
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mt-3">
                Explore Our Venues
              </h2>
            </div>

            <span className="text-sm text-gray-500">
              {halls.length} Venue Options
            </span>
          </div>

          <div className="space-y-12">

            {halls.map((hall, index) => (
              <div
                key={hall.id}
                className={`grid lg:grid-cols-2 bg-white border border-[#e8dfce] overflow-hidden shadow-sm ${
                  index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >

                {/* Image */}
                <div className="relative h-[320px] md:h-[460px] overflow-hidden group">

                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute top-6 left-6 bg-[#b99753] text-white px-5 py-3 text-xs uppercase tracking-wider">
                    {hall.tag}
                  </span>

                  <div className="absolute bottom-7 left-7 text-white">
                    <p className="text-[#e3c581] uppercase tracking-[3px] text-xs">
                      Ajwa Marriage Hall
                    </p>

                    <h3 className="text-3xl md:text-4xl font-serif mt-2">
                      {hall.name}
                    </h3>
                  </div>

                </div>

                {/* Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">

                  <p className="text-[#aa8542] uppercase tracking-[3px] text-xs">
                    {hall.subtitle}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-serif mt-4">
                    {hall.name}
                  </h3>

                  <p className="text-gray-500 leading-8 mt-5">
                    {hall.description}
                  </p>

                  {/* Capacity */}
                  <div className="grid grid-cols-2 gap-4 mt-8">

                    <div className="bg-[#f7f3e9] p-5">
                      <Users size={23} className="text-[#b99753]" />

                      <p className="text-xs text-gray-500 mt-3">
                        Guest Capacity
                      </p>

                      <p className="font-semibold mt-1">
                        {hall.capacity}
                      </p>
                    </div>

                    <div className="bg-[#f7f3e9] p-5">
                      <Maximize size={23} className="text-[#b99753]" />

                      <p className="text-xs text-gray-500 mt-3">
                        Venue Size
                      </p>

                      <p className="font-semibold mt-1 text-sm">
                        {hall.size}
                      </p>
                    </div>

                  </div>

                  {/* Facilities */}
                  <div className="mt-8">

                    <h4 className="font-serif text-xl mb-5">
                      Available Facilities
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-4">

                      {hall.facilities.map((facility, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle2
                            size={17}
                            className="text-[#b99753] shrink-0"
                          />

                          {facility}
                        </div>
                      ))}

                    </div>

                  </div>

                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center gap-3 bg-[#17140f] hover:bg-[#b99753] text-white px-7 py-4 mt-9 transition duration-300 w-full sm:w-fit"
                  >
                    Book This Hall <ArrowRight size={18} />
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* General Facilities */}
      <section className="bg-[#f0ece2] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              Guest Comfort
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5">
              Facilities & Services
            </h2>

            <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-7">
              Explore the facilities designed to support
              a comfortable and memorable event experience.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {generalFacilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-8 text-center border border-[#e8dfce] hover:border-[#b99753] hover:-translate-y-2 transition duration-300"
                >

                  <div className="w-16 h-16 bg-[#f5f0e5] flex items-center justify-center mx-auto text-[#aa8542]">
                    <Icon size={28} />
                  </div>

                  <h3 className="font-serif text-xl mt-6">
                    {facility.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-3">
                    {facility.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Booking CTA */}
      <section className="bg-[#17140f] py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <CalendarDays size={40} className="text-[#d5b36a] mx-auto" />

          <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs mt-7">
            Reserve Your Venue
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-5">
            Your Perfect Venue
            <span className="block text-[#e3c581] italic mt-2">
              Is Waiting For You
            </span>
          </h2>

          <p className="text-gray-400 leading-8 mt-6">
            Choose your preferred hall and let us help
            you plan your special celebration.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17140f] px-9 py-4 font-semibold mt-9 transition"
          >
            Book Your Event <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Halls;
