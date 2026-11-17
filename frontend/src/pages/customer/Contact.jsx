
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Message:", formData);
    setSubmitted(true);
  };

  const inputStyle =
    "w-full bg-[#faf8f3] border border-[#e5dfd2] px-4 py-4 outline-none focus:border-[#b99753] transition text-sm placeholder:text-gray-400";

  const contactInfo = [
    {
      title: "Phone Number",
      detail: "Add Your Contact Number",
      description: "Call us for booking and event inquiries.",
    },
    {
      title: "Email Address",
      detail: "Add Your Email Address",
      description: "Send us your questions and requirements.",
    },
    {
      title: "Our Location",
      detail: "Add Your Hall Address",
      description: "Visit us to explore our venue.",
    },
    {
      title: "Working Hours",
      detail: "Confirm With Management",
      description: "Contact us to arrange a visit.",
    },
  ];

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero Section */}
      <section className="relative h-[440px] md:h-[520px] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800"
          alt="Luxury wedding venue"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#120e09]/80" />

        <div className="relative text-center px-6 max-w-3xl">

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-[#d5b36a]" />
            <span className="text-[#e3c581] uppercase tracking-[4px] text-xs">
              Get In Touch
            </span>
            <span className="w-10 h-px bg-[#d5b36a]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white mt-7">
            Contact <span className="text-[#e3c581] italic">Us</span>
          </h1>

          <p className="text-gray-300 mt-6 leading-8">
            We would love to hear from you. Contact our team
            and let us help plan your beautiful celebration.
          </p>

          <div className="flex items-center justify-center gap-3 mt-7 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e3c581]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#e3c581]">Contact</span>
          </div>

        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5">
              We Are Here For You
            </h2>

            <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-7">
              Reach out to us for reservations, venue visits,
              event details and general inquiries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e8dfce] p-8 text-center hover:border-[#b99753] hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 bg-[#f5f0e5] flex items-center justify-center mx-auto text-[#aa8542] font-serif text-2xl">
                  {index + 1}
                </div>

                <h3 className="font-serif text-xl mt-6">
                  {item.title}
                </h3>

                <p className="text-[#a27d3b] font-semibold text-sm mt-3">
                  {item.detail}
                </p>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Information */}
          <div className="bg-[#17140f] text-white p-9 md:p-12">

            <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs">
              Let's Talk
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
              Let's Make Your
              <span className="block text-[#e3c581] italic">
                Day Special
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-7">
              Whether you are planning a wedding, reception,
              Mehndi or another special occasion, our team is
              ready to help you explore the possibilities.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 bg-[#c7a45b]/15 flex items-center justify-center text-[#d5b36a] font-serif">
                  01
                </div>

                <div>
                  <h3 className="font-semibold">Call Our Team</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Add your official phone number here.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 bg-[#c7a45b]/15 flex items-center justify-center text-[#d5b36a] font-serif">
                  02
                </div>

                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Add your official email address here.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 bg-[#c7a45b]/15 flex items-center justify-center text-[#d5b36a] font-serif">
                  03
                </div>

                <div>
                  <h3 className="font-semibold">Visit Our Venue</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Add your complete marriage hall address here.
                  </p>
                </div>
              </div>

            </div>

            <div className="border-t border-white/20 mt-12 pt-8">
              <h3 className="font-serif text-xl">
                Follow Our Journey
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                Follow us on social media for our latest events and updates.
              </p>
            </div>

          </div>

          {/* Form */}
          <div className="bg-white border border-[#e8dfce] shadow-sm p-7 md:p-10">

            <div className="mb-9">
              <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
                Send A Message
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mt-4">
                Get In Touch With Us
              </h2>

              <p className="text-gray-500 text-sm mt-4 leading-7">
                Fill out the form below and share your questions
                or event requirements with us.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">

                <div className="w-16 h-16 rounded-full border-2 border-[#b99753] text-[#b99753] flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>

                <h3 className="text-3xl font-serif mt-7">
                  Message Submitted!
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  Your message has been captured in this demo.
                  It has not been sent to the hall management yet.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-8 bg-[#17140f] hover:bg-[#b99753] text-white px-8 py-4 transition"
                >
                  Send Another Message
                </button>

              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputStyle}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03XX XXXXXXX"
                      className={inputStyle}
                      required
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="Wedding Booking">Wedding Booking</option>
                    <option value="Hall Information">Hall Information</option>
                    <option value="Packages">Packages</option>
                    <option value="Event Planning">Event Planning</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write your message here..."
                    className={`${inputStyle} resize-none`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#b99753] hover:bg-[#17140f] text-white py-5 font-semibold transition duration-300"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  This is currently a frontend demo contact form.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#f0ece2] py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-[#aa8542] uppercase tracking-[4px] text-xs">
              Find Us
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-4">
              Visit Ajwa Marriage Hall
            </h2>

            <p className="text-gray-500 mt-4">
              Add your real venue location to display the correct map.
            </p>
          </div>

          <div className="bg-white border border-[#e8dfce] p-5 md:p-8 text-center">

            <h3 className="text-2xl font-serif mt-5">
              Our Venue Location
            </h3>

            <p className="text-gray-500 mt-3 text-sm">
              Official address and map will be added after location details are provided.
            </p>

            <Link
              to="/booking"
              className="inline-flex items-center mt-7 bg-[#17140f] text-white px-7 py-4 hover:bg-[#b99753] transition"
            >
              Book Your Event
            </Link>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#17140f] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs">
            Ajwa Marriage Hall
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-7">
            Have An Event In Mind?
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            Let us help you plan a beautiful celebration
            at Ajwa Marriage Hall.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center mt-8 bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17120a] px-8 py-4 font-semibold transition"
          >
            Make A Reservation
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Contact;
