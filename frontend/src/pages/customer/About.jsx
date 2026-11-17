
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Heart,
  Sparkles,
  Users,
  CheckCircle2,
  Crown,
  Star,
  CalendarDays,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Celebrations",
      description:
        "We believe every wedding is a beautiful story. Our goal is to make every celebration special and memorable.",
    },
    {
      icon: Crown,
      title: "Luxury & Elegance",
      description:
        "We focus on elegant surroundings, beautiful decorations and a welcoming atmosphere for your guests.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "From initial planning to the final arrangements, we value quality and attention to every detail.",
    },
    {
      icon: Users,
      title: "Guest Satisfaction",
      description:
        "Your happiness and your guests' comfort remain at the heart of every celebration we host.",
    },
  ];

  const services = [
    "Wedding and Reception Events",
    "Mehndi and Engagement Celebrations",
    "Elegant Hall Decorations",
    "Dining and Guest Arrangements",
    "Event Planning Assistance",
    "Customized Wedding Packages",
  ];

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[570px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=2000"
          alt="Elegant wedding celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#120e09]/75" />

        <div className="relative text-center px-6 max-w-4xl">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-[#d5b36a]" />
            <span className="text-[#e3c581] uppercase tracking-[4px] text-xs">
              Discover Our Story
            </span>
            <span className="w-10 h-px bg-[#d5b36a]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white mt-7">
            About <span className="text-[#e3c581] italic">Ajwa</span>
          </h1>

          <p className="text-gray-300 mt-6 text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Creating beautiful celebrations, bringing families together
            and making your special moments unforgettable.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e3c581]">Home</Link>
            <span>/</span>
            <span className="text-[#e3c581]">About Us</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000"
              alt="Luxury wedding banquet hall"
              className="w-full h-[430px] md:h-[530px] object-cover"
            />

            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-[#b99753] text-white p-7 md:p-9">
              <Sparkles size={30} />
              <h3 className="font-serif text-2xl mt-3">
                Your Special Day
              </h3>
              <p className="text-sm text-white/80 mt-2">
                Deserves Something Special
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs font-semibold">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
              Where Beautiful
              <span className="block text-[#b18d4b] italic">
                Memories Begin
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-7">
              Welcome to Ajwa Marriage Hall, a place designed to bring
              your most beautiful celebrations to life. We understand
              that weddings and family occasions are among the most
              meaningful moments in life.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Our aim is to provide an elegant venue, thoughtful
              arrangements and a comfortable environment where families
              can celebrate their happiness together.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Whether you are planning a wedding, reception, Mehndi or
              another special gathering, we want your event to feel
              personal, beautiful and memorable.
            </p>

            <Link
              to="/booking"
              className="inline-flex items-center gap-3 mt-9 bg-[#17140f] hover:bg-[#b99753] text-white px-8 py-4 transition duration-300"
            >
              Plan Your Event <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Dark Mission Section */}
      <section className="bg-[#17140f] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <Heart size={42} className="text-[#d5b36a] mx-auto" />

          <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs mt-7">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-5 leading-tight">
            Making Every Celebration
            <span className="block text-[#e3c581] italic mt-2">
              Truly Unforgettable
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-8 mt-8 max-w-3xl mx-auto">
            Our mission is to create a welcoming and elegant environment
            where people can celebrate life's most precious occasions.
            We aim to make every event special through thoughtful
            arrangements, quality services and genuine hospitality.
          </p>

          <div className="w-20 h-px bg-[#b99753] mx-auto mt-10" />

        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              What Makes Us Special
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-4">
              Our Core Values
            </h2>

            <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-7">
              The principles that guide our approach to every celebration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-[#e8dfce] p-8 hover:border-[#b99753] hover:-translate-y-2 transition duration-300"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-[#f5f0e5] text-[#aa8542]">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-serif mt-7">
                    {value.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-4">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f0ece2] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
              Everything For Your
              <span className="block text-[#b18d4b] italic">
                Perfect Celebration
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-7">
              We offer a range of event services to help make your
              celebration beautiful, comfortable and well organized.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-9">
              {services.map((service, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2
                    size={20}
                    className="text-[#b18d4b] shrink-0 mt-1"
                  />
                  <span className="text-gray-700 text-sm leading-6">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/halls"
              className="inline-flex items-center gap-3 mt-10 text-[#a27d3b] font-semibold border-b border-[#a27d3b] pb-2"
            >
              Explore Our Venues <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
              alt="Wedding table setup"
              className="w-full h-72 object-cover mt-10"
            />

            <img
              src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800"
              alt="Wedding floral decoration"
              className="w-full h-72 object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
              alt="Wedding reception"
              className="col-span-2 w-full h-64 object-cover"
            />
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
            Celebrate With Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-5">
            A Venue For Every Occasion
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mt-14">
            {[
              {
                image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
                title: "Wedding",
              },
              {
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
                title: "Reception",
              },
              {
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
                title: "Mehndi",
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-9">
                  <h3 className="text-white text-3xl font-serif">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#17140f] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <Star size={35} className="text-[#d5b36a] mx-auto" />

          <h2 className="text-4xl md:text-6xl font-serif text-white mt-7">
            Let's Create Beautiful
            <span className="block text-[#e3c581] italic mt-2">
              Memories Together
            </span>
          </h2>

          <p className="text-gray-400 leading-8 mt-7 max-w-2xl mx-auto">
            Your special occasion deserves a beautiful setting.
            Let Ajwa Marriage Hall be part of your celebration.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 mt-9 bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17120a] px-9 py-4 font-semibold transition"
          >
            <CalendarDays size={19} />
            Book Your Event
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;
