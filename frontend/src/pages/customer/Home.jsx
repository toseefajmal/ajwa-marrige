
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Crown,
  Heart,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Crown,
      title: "Elegant Venues",
      text: "Beautifully designed spaces for unforgettable celebrations.",
    },
    {
      icon: Users,
      title: "Guest Comfort",
      text: "Spacious seating and a welcoming environment for everyone.",
    },
    {
      icon: Star,
      title: "Premium Services",
      text: "Professional event arrangements with attention to detail.",
    },
  ];

  const halls = [
    {
      name: "Royal Grand Hall",
      capacity: "500 - 800 Guests",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900",
    },
    {
      name: "Crystal Banquet Hall",
      capacity: "300 - 500 Guests",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
    },
    {
      name: "Luxury Marquee",
      capacity: "800 - 1200 Guests",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    },
  ];

  const packages = [
    {
      name: "Silver Package",
      description: "A beautiful celebration with essential arrangements.",
      price: "Starting from Rs. 2,500",
      features: ["Elegant Seating", "Basic Decoration", "Dining Arrangement"],
    },
    {
      name: "Gold Package",
      description: "An enhanced experience for your special day.",
      price: "Starting from Rs. 3,500",
      features: ["Premium Decoration", "Special Lighting", "Dining Arrangement"],
      popular: true,
    },
    {
      name: "Platinum Package",
      description: "A complete luxury wedding experience.",
      price: "Starting from Rs. 5,000",
      features: ["Luxury Decoration", "Premium Lighting", "VIP Arrangements"],
    },
  ];

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero Section */}
      <section className="relative min-h-[650px] md:min-h-[760px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=2000"
          alt="Luxury wedding venue"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#100d09]/95 via-[#17110b]/75 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-7">
              <span className="w-12 h-px bg-[#d5b36a]" />
              <span className="text-[#e4c783] uppercase tracking-[4px] text-xs md:text-sm">
                Welcome to Ajwa Marriage Hall
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Celebrate Your
              <span className="block text-[#e4c783] italic mt-2">
                Love Story
              </span>
              With Elegance
            </h1>

            <p className="text-gray-300 text-base md:text-lg mt-7 max-w-xl leading-8">
              Create beautiful memories with exceptional wedding venues,
              elegant decorations and unforgettable hospitality.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/booking"
                className="bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17120a] px-8 py-4 font-semibold flex items-center gap-3 transition duration-300"
              >
                Book Your Event <ArrowRight size={18} />
              </Link>

              <Link
                to="/halls"
                className="border border-white/50 hover:bg-white hover:text-black text-white px-8 py-4 transition duration-300"
              >
                Explore Our Halls
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/20">
              <div>
                <h3 className="text-3xl text-[#e4c783] font-serif">Elegant</h3>
                <p className="text-gray-300 text-sm mt-1">Wedding Venues</p>
              </div>
              <div>
                <h3 className="text-3xl text-[#e4c783] font-serif">Premium</h3>
                <p className="text-gray-300 text-sm mt-1">Event Services</p>
              </div>
              <div>
                <h3 className="text-3xl text-[#e4c783] font-serif">Special</h3>
                <p className="text-gray-300 text-sm mt-1">Every Celebration</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1000"
              alt="Wedding decoration"
              className="w-full h-[430px] object-cover"
            />
            <div className="absolute -bottom-7 -right-4 md:-right-7 bg-[#b99753] text-white p-7 md:p-9">
              <Heart size={30} />
              <p className="font-serif text-2xl mt-3">Made With Love</p>
              <p className="text-sm mt-1 text-white/80">Memories That Last</p>
            </div>
          </div>

          <div>
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs font-semibold">
              About Our Venue
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
              A Perfect Place For Your
              <span className="text-[#b18d4b] italic"> Special Moments</span>
            </h2>

            <p className="text-gray-600 leading-8 mt-7">
              At Ajwa Marriage Hall, we believe every celebration deserves
              something extraordinary. Our venue is designed to bring your
              wedding dreams to life with beautiful spaces, elegant
              arrangements and memorable hospitality.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              From intimate gatherings to grand wedding celebrations, we
              provide a welcoming setting for your most precious moments.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 text-[#a27d3b] font-semibold border-b border-[#a27d3b] pb-2"
            >
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-[#17140f] py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#d1b16d] uppercase tracking-[4px] text-xs">
              The Ajwa Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
              Why Choose Ajwa?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-[#c7a45b]/30 p-9 text-center hover:bg-[#c7a45b]/10 transition duration-300"
                >
                  <Icon size={40} className="text-[#d3b36e] mx-auto" />
                  <h3 className="text-2xl font-serif text-white mt-6">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-7 mt-4">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Halls */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
                Our Venues
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mt-4">
                Explore Our Halls
              </h2>
            </div>

            <Link
              to="/halls"
              className="text-[#a27d3b] font-semibold flex items-center gap-2"
            >
              View All Halls <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {halls.map((hall, index) => (
              <div
                key={index}
                className="group bg-white shadow-sm overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-7">
                  <p className="text-[#a27d3b] text-xs uppercase tracking-widest">
                    Ajwa Exclusive Venue
                  </p>
                  <h3 className="text-2xl font-serif mt-3">{hall.name}</h3>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
                    <Users size={17} className="text-[#b18d4b]" />
                    {hall.capacity}
                  </div>

                  <Link
                    to="/booking"
                    className="flex items-center justify-between mt-7 pt-5 border-t border-gray-200 text-[#a27d3b] font-semibold"
                  >
                    Book This Hall <ChevronRight size={19} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Packages */}
      <section className="bg-[#f0ece2] py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              Our Packages
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">
              Choose Your Celebration
            </h2>
            <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-7">
              Explore our wedding packages and find the perfect arrangement
              for your special occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 md:p-10 shadow-sm ${
                  pkg.popular
                    ? "border-2 border-[#b99753] md:-translate-y-3"
                    : "border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b99753] text-white text-xs px-5 py-2 uppercase tracking-widest">
                    Most Popular
                  </span>
                )}

                <h3 className="text-3xl font-serif">{pkg.name}</h3>
                <p className="text-gray-500 mt-4 leading-7">
                  {pkg.description}
                </p>

                <h4 className="text-xl text-[#a27d3b] font-semibold mt-7">
                  {pkg.price}
                </h4>

                <div className="border-t border-gray-200 mt-7 pt-7 space-y-5">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 text-gray-600 text-sm">
                      <CheckCircle2 size={18} className="text-[#b99753]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="block text-center mt-9 bg-[#17140f] hover:bg-[#b99753] text-white py-4 transition duration-300"
                >
                  Choose Package
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            * Package prices shown are sample placeholders. Confirm actual rates with the management.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              Beautiful Memories
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">
              Moments Worth Celebrating
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700"
              alt="Wedding venue"
              className="col-span-2 row-span-2 w-full h-full min-h-72 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700"
              alt="Wedding table decoration"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700"
              alt="Wedding celebration"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=700"
              alt="Wedding decoration"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=700"
              alt="Wedding event"
              className="w-full h-48 md:h-56 object-cover"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 border border-[#b99753] text-[#a27d3b] hover:bg-[#b99753] hover:text-white px-8 py-4 transition"
            >
              Explore Full Gallery <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800"
          alt="Wedding celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#17120c]/85" />

        <div className="relative max-w-4xl mx-auto text-center">
          <CalendarDays size={42} className="text-[#d5b36a] mx-auto" />

          <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs mt-6">
            Make Your Day Extraordinary
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-white mt-5 leading-tight">
            Your Dream Wedding
            <span className="block text-[#e4c783] italic">Starts Here</span>
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            Let us help you create a celebration filled with elegance,
            happiness and unforgettable memories.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 mt-9 bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17120a] px-9 py-4 font-semibold transition"
          >
            Reserve Your Date <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-[#b99753] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-7 text-white">
          <div>
            <h3 className="text-3xl font-serif">
              Let's Plan Something Beautiful
            </h3>
            <p className="text-white/80 mt-2">
              Contact our team to discuss your next celebration.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-[#17140f] px-7 py-4 flex items-center gap-3 hover:bg-black transition"
            >
              <Phone size={18} /> Contact Us
            </Link>

            <Link
              to="/booking"
              className="border border-white px-7 py-4 flex items-center gap-3 hover:bg-white hover:text-[#17140f] transition"
            >
              <CalendarDays size={18} /> Book Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
