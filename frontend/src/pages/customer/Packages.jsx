
import { Link } from "react-router-dom";
import {
  Check,
  Crown,
  Sparkles,
  Gem,
  ArrowRight,
  Star,
  Users,
  Utensils,
  Flower2,
  Camera,
  Music,
  CalendarDays,
} from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Silver Package",
      subtitle: "Simple & Elegant Celebration",
      price: "2,500",
      unit: "Per Guest",
      icon: Sparkles,
      featured: false,
      description:
        "A beautiful and affordable option for families looking for a memorable celebration.",
      features: [
        "Standard Hall Arrangement",
        "Basic Stage Decoration",
        "Guest Seating Arrangement",
        "Standard Dining Setup",
        "Professional Event Staff",
        "Basic Lighting Setup",
        "Welcome Reception",
      ],
    },
    {
      id: 2,
      name: "Gold Package",
      subtitle: "A Premium Celebration",
      price: "3,500",
      unit: "Per Guest",
      icon: Crown,
      featured: true,
      description:
        "An enhanced celebration experience with elegant decoration and premium arrangements.",
      features: [
        "Premium Hall Arrangement",
        "Luxury Stage Decoration",
        "Premium Guest Seating",
        "Special Dining Arrangement",
        "Professional Event Staff",
        "Decorative Lighting",
        "Welcome Reception",
        "Floral Table Decoration",
        "Customized Event Setup",
      ],
    },
    {
      id: 3,
      name: "Platinum Package",
      subtitle: "The Ultimate Luxury Experience",
      price: "5,000",
      unit: "Per Guest",
      icon: Gem,
      featured: false,
      description:
        "A luxury event experience designed for grand celebrations and unforgettable moments.",
      features: [
        "Luxury Venue Arrangement",
        "Exclusive Stage Decoration",
        "Premium Guest Seating",
        "Special Dining Experience",
        "Dedicated Event Coordinator",
        "Advanced Lighting Setup",
        "Welcome Reception",
        "Premium Floral Decoration",
        "Customized Event Theme",
        "VIP Guest Arrangement",
        "Special Event Assistance",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Flower2,
      title: "Floral Decoration",
      description:
        "Beautiful floral arrangements for your wedding stage and venue.",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Capture your special moments with professional photography arrangements.",
    },
    {
      icon: Music,
      title: "Sound & Lighting",
      description:
        "Event lighting and sound arrangements for your celebration.",
    },
    {
      icon: Utensils,
      title: "Customized Catering",
      description:
        "Discuss menu options and dining arrangements according to your needs.",
    },
  ];

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[540px] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800"
          alt="Luxury wedding event"
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
            Choose Your Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-white mt-6">
            Our <span className="text-[#e3c581] italic">Packages</span>
          </h1>

          <p className="text-gray-300 mt-6 leading-8 max-w-xl mx-auto">
            Discover our wedding packages and choose the perfect
            arrangement for your beautiful celebration.
          </p>

          <div className="flex justify-center items-center gap-3 mt-7 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e3c581]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#e3c581]">Packages</span>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <Sparkles size={36} className="text-[#b99753] mx-auto" />

          <p className="text-[#aa8542] uppercase tracking-[4px] text-xs mt-6">
            Our Wedding Packages
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
            Celebrate Your Day
            <span className="block text-[#b99753] italic">
              Your Way
            </span>
          </h2>

          <p className="text-gray-500 leading-8 mt-6">
            Every celebration is unique. Explore our different
            packages and find an arrangement that matches your
            event requirements and budget.
          </p>

        </div>

      </section>

      {/* Packages */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#aa8542] uppercase tracking-[3px] text-xs">
              Select Your Package
            </p>

            <h2 className="text-3xl md:text-4xl font-serif mt-4">
              Wedding Packages & Pricing
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">

            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col ${
                    item.featured
                      ? "bg-[#17140f] text-white border-2 border-[#c7a45b] lg:scale-105 shadow-2xl z-10"
                      : "bg-white border border-[#e8dfce]"
                  }`}
                >

                  {item.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c7a45b] text-[#17140f] px-7 py-2 text-xs uppercase tracking-[2px] font-bold whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 md:p-9 flex-1">

                    <div className={`w-16 h-16 flex items-center justify-center ${
                      item.featured
                        ? "bg-[#c7a45b]/15 text-[#e3c581]"
                        : "bg-[#f5f0e5] text-[#aa8542]"
                    }`}>
                      <Icon size={30} />
                    </div>

                    <p className={`text-xs uppercase tracking-[3px] mt-7 ${
                      item.featured ? "text-[#d5b36a]" : "text-[#aa8542]"
                    }`}>
                      {item.subtitle}
                    </p>

                    <h3 className="text-3xl font-serif mt-3">
                      {item.name}
                    </h3>

                    <p className={`text-sm leading-7 mt-4 ${
                      item.featured ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {item.description}
                    </p>

                    <div className={`border-y my-8 py-7 ${
                      item.featured
                        ? "border-white/15"
                        : "border-[#e8dfce]"
                    }`}>

                      <p className={`text-sm ${
                        item.featured ? "text-gray-400" : "text-gray-500"
                      }`}>
                        Starting From
                      </p>

                      <div className="flex items-end gap-2 mt-2">
                        <span className={`text-sm font-semibold ${
                          item.featured ? "text-[#e3c581]" : "text-[#aa8542]"
                        }`}>
                          Rs.
                        </span>

                        <span className="text-5xl font-serif">
                          {item.price}
                        </span>
                      </div>

                      <p className={`text-xs mt-2 ${
                        item.featured ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {item.unit}
                      </p>

                    </div>

                    <h4 className="font-semibold mb-6">
                      Package Includes
                    </h4>

                    <div className="space-y-4">

                      {item.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <Check
                            size={18}
                            className={`shrink-0 mt-0.5 ${
                              item.featured
                                ? "text-[#e3c581]"
                                : "text-[#b99753]"
                            }`}
                          />

                          <span className={`text-sm ${
                            item.featured ? "text-gray-300" : "text-gray-600"
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                  <div className="p-8 pt-0 md:px-9 md:pb-9">

                    <Link
                      to="/booking"
                      className={`flex items-center justify-center gap-3 w-full py-4 font-semibold transition ${
                        item.featured
                          ? "bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17140f]"
                          : "bg-[#17140f] hover:bg-[#b99753] text-white"
                      }`}
                    >
                      Choose Package <ArrowRight size={18} />
                    </Link>

                  </div>

                </div>
              );
            })}

          </div>

          <p className="text-center text-gray-500 text-xs mt-12 leading-6">
            * Prices are sample/demo prices only. Actual package
            prices and included services must be confirmed with
            Ajwa Marriage Hall management.
          </p>

        </div>

      </section>

      {/* Additional Services */}
      <section className="bg-[#f0ece2] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              Make It More Special
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5">
              Additional Services
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mt-5 leading-7">
              You can discuss additional arrangements with our
              management team to customize your celebration.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {additionalServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-[#e8dfce] p-8 text-center hover:-translate-y-2 hover:border-[#b99753] transition duration-300"
                >

                  <div className="w-16 h-16 bg-[#f5f0e5] flex items-center justify-center mx-auto text-[#aa8542]">
                    <Icon size={28} />
                  </div>

                  <h3 className="font-serif text-xl mt-6">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-3">
                    {service.description}
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

          <Users size={40} className="text-[#d5b36a] mx-auto" />

          <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs mt-7">
            Let's Plan Together
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-5">
            Need A Customized
            <span className="block text-[#e3c581] italic mt-2">
              Wedding Package?
            </span>
          </h2>

          <p className="text-gray-400 leading-8 mt-6">
            Contact our team to discuss your requirements
            and create an arrangement for your special day.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17140f] px-8 py-4 font-semibold transition"
            >
              Book Your Event <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-[#c7a45b] text-[#e3c581] hover:bg-[#c7a45b] hover:text-[#17140f] px-8 py-4 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Packages;
